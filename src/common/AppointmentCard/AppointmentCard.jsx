

import React from 'react'
import '.AppointmentCard.sass'

export const AppointmentCard = ({title, description, date, turn, worker, client}) => {
     return (
        <div>
            <div>Titulo{title}</div>
            <div>Descripción{description}</div>
            <div>Fecha{date}</div>
            <div>Turno{turn}</div>
            <div>Trabajador{worker}</div>
            <div>Cliente{client} </div>
        </div>

     )
}