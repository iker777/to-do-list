function Tarea() {
    return (
        <div className="tarea">
            <div className="tarea__btnContainer">
                <span className="tarea__btn tarea__btn--edit">🖊</span>
                <span className="tarea__btn tarea__btn--exit">✖</span>
            </div>
            <div className="tarea__contenido">
                <h2 className="tarea__h2">tituloTarea</h2>
                <p className="tarea__p">textoTarea</p>
            </div>
        </div>
    )
}

export default Tarea;