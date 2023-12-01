
import React from 'react'
import './AppointmentCard.css'
import { deleteAppointment } from '../../services/apiCalls'

export const AppointmentCard = ({title, description, date, turn, worker, client, id, edit}) => {
    const onclickDelete = ()=>deleteAppointment(id)
     return (
        
        <div className='AppointmentCard'>
            <div>Titulo: {title}</div>
            <div>Descripción: {description}</div>
            <div>Fecha: {date}</div>
            <div>Turno: {turn}</div>
            <div>Trabajador: {worker}</div>
            <div>Cliente: {client} </div>
            <div className='buttons'>
            <div className='Delete' onClick={onclickDelete} >Delete</div>
            <div className='Delete' onClick={edit}>Edit</div>
            </div>
        </div>
     )
}