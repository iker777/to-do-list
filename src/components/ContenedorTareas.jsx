import Tarea from "./Tarea";

function ContenedorTareas(){
    return(
        <div className="contenedorTareas">
            <h2 className="contenedorTareas__h2">Tareas por hacer</h2>
            <Tarea/>
        </div>
    )
}

export default ContenedorTareas;