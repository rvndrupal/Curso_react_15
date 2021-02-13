import React, {Fragment, useState} from 'react'

import Error from './Error'

//rfce
function Pregunta({setPresupuesto,setRestante,setMostrapregunta}) {

    //Definir el state
    const [cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion Leer presupuesto
    const  definirPresupuesto = e =>{
        guardarCantidad( parseInt(e.target.value, 10))
        console.log(cantidad);
    }

    //submit
    const agregarPresupuesto = e => {
        e.preventDefault();
        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
            guardarError(false);
        
        //pasando la validacion 
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrapregunta(false) //lo pasamos a falso depues de cargar las cantidades
           




    }



    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto no es valido" />  : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
                />

            </form>

        </Fragment>
    )
}

export default Pregunta
