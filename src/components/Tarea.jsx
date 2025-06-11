import BotonEditar from "./BotonEditar";
import BotonBorrar from "./BotonBorrar";

function Tarea({tarea, borrarTarea, editarTarea}) {
    return (
        <div className="tarea">
            <div className="tarea__btnContainer">
                <BotonEditar tarea={tarea} editarTarea={editarTarea}/>
                <BotonBorrar tarea={tarea} borrarTarea={borrarTarea} />
            </div>
            <div className="tarea__contenido">
                <span>{tarea.id}</span>
                <h2 className="tarea__h2">{tarea.tituloTarea}</h2>
                <p className="tarea__p">{tarea.textoTarea}</p>
            </div>
        </div>
    )
}

export default Tarea;