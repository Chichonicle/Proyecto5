import React, { useEffect, useState } from 'react'
import './WorkerSelector.css'
import { GetWorkers } from '../../services/apiCalls'

export const WorkerSelector = ({design, type, name, placeholder,value, disabled, functionProp}) => {

    const [workers, setWorkers] = useState([])
    useEffect (()=> {

        GetWorkers()
        .then(
            result => {
                if(result.data.workers.length > 0 ){
                    setWorkers(result.data.workers)
                }
            }
        )
        .catch(error => console.log(error))

    }, [])

     return (
        
         <select
            className={design}
            name={name}
            value={value || undefined}
            onChange={(e)=>functionProp(e)}  >  
            {workers.map((worker) =>{
                return(
                    <option value={worker.id}>{worker.name}</option>
                )
            })}

         </select>
     )
}