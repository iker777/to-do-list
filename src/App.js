import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ContenedorTareas from './components/ContenedorTareas';

function App() {

  const [tarea, setTarea] = useState({
    tituloTarea: "",
    textoTarea: ""
  })



  return (
    <div className="App">
      <Formulario setTarea={setTarea}/>
      <ContenedorTareas/>
      <p>{tarea.tituloTarea}</p>
      <p>{tarea.textoTarea}</p>
    </div>
  );
}

export default App;
