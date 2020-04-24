import React from 'react';

function Formulario() {
    return (
        <form>
            <h2>Agrega tus datos aqui</h2>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className={'u-full-width'}
                    placeholder={'Ej. Transporte'}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className={'u-full-width'}
                    placeholder={'Ej. 300'}
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