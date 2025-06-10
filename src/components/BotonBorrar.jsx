function BotonBorrar({tarea, borrarTarea}){
    return (
        <span className="tarea__btn tarea__btn--exit" onClick={() => borrarTarea(tarea.id)}>✖</span>
    )
}

export default BotonBorrar;