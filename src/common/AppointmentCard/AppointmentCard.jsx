import React from "react";
import "./AppointmentCard.css";

export const AppointmentCard = ({ appointment, onclickDelete }) => {
  const {
    title,
    description,
    appointment_date,
    appointment_turn,
    worker,
    Client,
  } = appointment;

  return (
    <div className="AppointmentCard">
      <div>Titulo: {title}</div>
      <div>Descripción: {description}</div>
      <div>Fecha: {appointment_date}</div>
      <div>Turno: {appointment_turn}</div>
      <div>Trabajador: {worker}</div>
      <div>Cliente: {Client} </div>
      <div className="buttons">
        <div className="Delete" onClick={onclickDelete}>
          Delete
        </div>
        {/* <div className='Delete' onClick={edit}>Edit</div> */}
      </div>
    </div>
  );
};
