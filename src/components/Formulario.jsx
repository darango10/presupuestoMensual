import React, {useState} from 'react';
import Error from "./Error";
import shortid from 'shortid'

function Formulario({agregarNuevoGasto}) {
    // Crear state para gastos
    const [gasto, actualizarGasto] = useState({
        id: '',
        nombre: '',
        cantidad: 0
    });
    const [error, guardarError] = useState(false)

    //Funcion para actualizar state
    const actualizarState = (e) => {
        if (e.target.name === 'cantidad') {
            actualizarGasto({
                ...gasto,
                cantidad: parseInt(e.target.value)
            })
        } else {
            actualizarGasto({
                ...gasto,
                nombre: e.target.value,
                id: shortid()
            })
        }
    }

    // Extraer los valores
    const {nombre, cantidad} = gasto;

    //Agregar Gasto al state principal
    const agregarGasto = e => {
        e.preventDefault()
        // Validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        // Construir el gasto
        // console.log(gasto)

        // Pasare el gasto al componente principal
        agregarNuevoGasto(gasto);

        //Resetear el form
        actualizarGasto({
            id: '',
            nombre: '',
            cantidad: 0
        })


    }

    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus datos aqui</h2>
            {error ? <Error mensaje={'Ambos campos son obligatorios o presupuesto incorrecto'}/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className={'u-full-width'}
                    name={'nombre'}
                    placeholder={'Ej. Transporte'}
                    value={nombre}
                    onChange={actualizarState}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    name={'cantidad'}
                    className={'u-full-width'}
                    placeholder={'Ej. 300'}
                    value={cantidad}
                    onChange={actualizarState}
                />
            </div>
            <input type="submit"
                   value={'Agregar Gasto'}
                   className={'button-primary u-full-width'}
            />
        </form>
    );
}

export default Formulario;