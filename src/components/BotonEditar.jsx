function BotonEditar({ tarea, editarTarea }) {
    return (
        <span className="tarea__btn tarea__btn--edit" onClick={() => editarTarea(tarea.id)}>🖊</span>
    )
}

export default BotonEditar;