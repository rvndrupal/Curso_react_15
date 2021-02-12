import React from 'react'

import PropTypes from 'prop-types';

//rfce

function Cita({cita, eliminarCita}) {

    const {mascota,propietario,fecha,hora,sintomas,id}=cita;

    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <button
                type="button"
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(id) }
            >Eliminar &times;</button>

        </div>
    )
}

Cita.propTypes={
    cita:PropTypes.object.isRequired,
    eliminarCita:PropTypes.func.isRequired,
}

export default Cita
