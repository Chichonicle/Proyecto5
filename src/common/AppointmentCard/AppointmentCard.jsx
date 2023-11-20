

import React from 'react'
import './AppointmentCard.css'

export const AppointmentCard = ({title, description, date, turn, worker, client}) => {
     return (
        <div className='AppointmentCard'>
            <div>Titulo: {title}</div>
            <div>Descripción: {description}</div>
            <div>Fecha: {date}</div>
            <div>Turno: {turn}</div>
            <div>Trabajador: {worker}</div>
            <div>Cliente: {client} </div>
        </div>

     )
}