import React from 'react'
import './ImputAppointments.css'

export const ImputAppointments = ({type, name, placeholder,value, disabled, functionProp}) => {
     return (
         <input 
            disabled={disabled}
            className={"inputDesign"}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value || undefined}
            onChange={(e)=>functionProp(e)}      />

     )
}