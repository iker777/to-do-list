import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ContenedorTareas from './components/ContenedorTareas';

function App() {



  const [tareas, setTareas] = useState([])

  useEffect(() => {
    if (localStorage.getItem("tareas") !== null) {
      setTareas((prevState) => [...prevState, JSON.parse(localStorage.tareas)])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);





  return (
    <div className="App">
      <Formulario setTareas={setTareas} tareas={tareas} />
      <ContenedorTareas tareas={tareas} />
    </div>
  );
}

export default App;
