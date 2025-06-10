import { useEffect, useState } from "react";

function Formulario({ setTareas, tareas }) {

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [nuevaTarea, setNuevaTarea] = useState({
        tituloTarea: "",
        textoTarea: ""
    })

    function guardarTarea(e) {
        e.preventDefault();
        setNuevaTarea({
            tituloTarea: titulo,
            textoTarea: texto
        })
        setTareas(prevState => ([...prevState, nuevaTarea]))
    }

    useEffect(() => {
        console.log(tareas)
    }, [nuevaTarea])

    return (
        <div className="formulario">
            <h1 className="formulario__h1">Escribe la tarea</h1>
            <form className="form">
                <label htmlFor="titulo" className="form__label">Título</label>
                <input type="text" className="form__input" name="tituloTarea" onChange={(e) => setTitulo(e.target.value)} />
                <label htmlFor="textoTarea" className="form__label">Texto Tarea</label>
                <textarea name="textoTarea" className="form__textarea" onChange={(e) => setTexto(e.target.value)}></textarea>
                <button className="form__btn" onClick={guardarTarea}>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;