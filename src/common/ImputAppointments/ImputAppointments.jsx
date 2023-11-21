import React from 'react'
import './ImputAppointments.css'

export const ImputAppointments = ({design, type, name, placeholder,value, disabled, functionProp}) => {
     return (
         <input 
            disabled={disabled}
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value || undefined}
            onChange={(e)=>functionProp(e)}      />

     )
}