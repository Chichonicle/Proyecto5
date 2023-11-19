

import React from 'react'
import '.AppointmentCard.sass'

export const AppointmentCard = ({title, description, date, turn, worker, client}) => {
     return (
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{date}</div>
            <div>{turn}</div>
            <div>{worker}</div>
            <div>{client} </div>
        </div>

     )
}