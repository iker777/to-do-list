import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ContenedorTareas from './components/ContenedorTareas';

function App() {



  const [tareas, setTareas] = useState([])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);





  return (
    <div className="App">
      <Formulario setTareas={setTareas} tareas={tareas}/>
      <ContenedorTareas />
    </div>
  );
}

export default App;
