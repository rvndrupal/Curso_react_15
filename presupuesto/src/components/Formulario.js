import React,{useState, Fragment} from 'react'

function Formulario() {
    return (
        <Fragment>
            <form>
                <h2>Agrega tus datos aqui </h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input 
                        type="text"
                        className="u-full-width"
                        placeholder="Ej. Trasnporte"
                    />
                </div>

                <div className="campo">
                    <label>Cantidad de Gasto</label>
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Ej. 300"
                    />
                </div>
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />

            </form>
        </Fragment>
    )
}

export default Formulario
