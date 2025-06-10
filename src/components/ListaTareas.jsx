import Tarea from "./Tarea";

function ListaTareas({tareas, borrarTarea, editarTarea}){
    return(
        <div className="listaTareas">
             <h2 className="listaTareas__h2">{tareas.length === 0 ? "No hay tareas" : "Tareas por hacer"}</h2>
            {tareas.map((tarea) => (
                <Tarea key={tarea.id} tarea={tarea} borrarTarea={borrarTarea} editarTarea={editarTarea}/>
            ))}
        </div>
    )
}

export default ListaTareas;