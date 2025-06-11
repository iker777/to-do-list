import { useState } from "react";

function Formulario({ setTareas }) {

    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [tareaId, setTareaId] = useState(() => {
        // Inicializar tareaId desde localStorage al cargar la app
        try {
            const tareasLocalStorage = localStorage.getItem('tareas');
            const tareasLocalStorageArray = JSON.parse(tareasLocalStorage)

            if (!tareasLocalStorage || tareasLocalStorageArray.length === 0) {
                return 1;
            }
            if (tareasLocalStorageArray) {
                const ultimaTarea = tareasLocalStorageArray[tareasLocalStorageArray.length - 1];
                console.log(tareasLocalStorageArray)
                return ultimaTarea.id + 1
            }

        } catch (error) {
            console.error("Error al cargar localStorage:", error);
            return 1;
        }
    });


    function guardarTarea(e) {
        e.preventDefault();
        const nuevaTareaCreada = {
            id: tareaId, // Incrementa el ID para cada nueva tarea
            tituloTarea: titulo,
            textoTarea: texto,
        };
        setTareas(prevState => ([...prevState, nuevaTareaCreada]));
        setTareaId(prevId => prevId + 1); // Incrementa el ID para la próxima tarea

        setTitulo("");
        setTexto("");
    }

    return (
        <div className="formulario">
            <h1 className="formulario__h1">Escribe la tarea</h1>
            <form className="form">
                <label htmlFor="titulo" className="form__label">Título</label>
                <input type="text" className="form__input" name="tituloTarea" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                <label htmlFor="textoTarea" className="form__label">Texto Tarea</label>
                <textarea name="textoTarea" className="form__textarea" value={texto} onChange={(e) => setTexto(e.target.value)}></textarea>
                <button className="form__btn" onClick={guardarTarea}>Enviar</button>
            </form>
        </div>
    )
}

export default Formulario;