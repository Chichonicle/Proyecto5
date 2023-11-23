import React from "react";
import "./AppointmentCardWorker.css";

export const AppointmentCardWorker = ({
  title,
  description,
  date,
  turn,
  client,
}) => {
  return (
    <div className="AppointmentCard">
      <div>Titulo: {title}</div>
      <div>Descripción: {description}</div>
      <div>Fecha: {date}</div>
      <div>Turno: {turn}</div>
      <div>Cliente: {client} </div>
    </div>
  );
};
