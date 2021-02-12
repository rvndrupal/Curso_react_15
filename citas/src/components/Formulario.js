import React, {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import PropTypes from 'prop-types';


//rfce

function Formulario({crearCita}) {



    //crear el state
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    //state error
    const [Error, setError] = useState(false)

    //Actualizar state funcion
    const actualizarState= (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value  //muy chingona toma el campo y escribe en su state correspondiente
        })
    }

    //extraer los valores
    const {mascota,propietario,fecha,hora,sintomas}=cita;
    //envia formulario
    const EnviarFormulario= (e) =>{
        e.preventDefault();
        
        //validar formulario
        if(mascota.trim()==='' ||  propietario.trim()==='' || fecha.trim()==='' || hora.trim()==='' || sintomas.trim()==='' ){
            setError(true)
            return
        }
        //eliminar mensaje Previo
        setError(false);

        //generar id
        //instalar npm i uuid
        cita.id=uuidv4();

        //crear la cita
        crearCita(cita);

        //Reiniciar Form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
            //por los values del form esta chingon
        })

        



    }//enviar




    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { Error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null}

            <form
                onSubmit={EnviarFormulario}
            >
                <label>Nombre de la Mascota</label>
                <input 
                   type="text"
                   name="mascota"
                   className="u-full-width"
                   placeholder="Nombre Mascota" 
                   onChange={actualizarState}
                   value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input 
                   type="text"
                   name="propietario"
                   className="u-full-width"
                   placeholder="Nombre del dueño de la Mascota" 
                   onChange={actualizarState}
                   value={propietario}

                />
                <label>Fecha</label>
                <input 
                   type="date"
                   name="fecha"
                   className="u-full-width" 
                   onChange={actualizarState}
                   value={fecha}

                />
                <label>Hora</label>
                <input 
                   type="time"
                   name="hora"
                   className="u-full-width" 
                   onChange={actualizarState}
                   value={hora}

                />
                <label>Síntomas</label>
                <textarea
                className="u-full-width"
                name="sintomas" 
                onChange={actualizarState}
                value={sintomas}

                ></textarea>
                <button 
                type="submit"
                className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>


        </Fragment>
    )
}


Formulario.propTypes={
    crearCita:PropTypes.func.isRequired
}


export default Formulario
