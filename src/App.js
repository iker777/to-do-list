import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';

function App() {

  const [tareas, setTareas] = useState(() => {
    // Inicializar tareas desde localStorage al cargar la app
    try {
      const tareasGuardadas = localStorage.getItem('tareas');
      return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    } catch (error) {
      console.error("Error al cargar tareas de localStorage:", error);
      return [];
    }
  });

  // Este useEffect se ejecutará cada vez que 'tareas' cambie
  useEffect(() => {
    try {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    } catch (error) {
      console.error("Error al guardar tareas en localStorage:", error);
    }
  }, [tareas]); // La dependencia es 'tareas'

  // Borrar tareas
  const borrarTarea = (id) => {
    setTareas((prevState) => prevState.filter((tarea) => tarea.id !== id));
  };
  // Editar tareas
  const editarTarea = (id) => {
    const tareaAEditar = tareas.find((tarea) => tarea.id === id);
    if (tareaAEditar) {
      const titulo = prompt("Editar título:", tareaAEditar.tituloTarea);
      const texto = prompt("Editar texto:", tareaAEditar.textoTarea);
      if (titulo !== null && texto !== null) {
        setTareas((prevState) =>
          prevState.map((tarea) =>
            tarea.id === id ? { ...tarea, tituloTarea: titulo, textoTarea: texto } : tarea
          )
        );
      }
    }
  };


  return (  
    <div className="App">
      <Formulario setTareas={setTareas}/>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} editarTarea={editarTarea}/>
    </div>
  );
}

export default App;
