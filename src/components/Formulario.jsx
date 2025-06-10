import { useState } from "react";

function Formulario({ setTarea }) {

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');

    function guardarTarea(e) {
        e.preventDefault();
        setTarea({
            tituloTarea: titulo,
            textoTarea: texto
        })
    }

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