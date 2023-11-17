
import "./Workers.css"

import { useState, useEffect } from 'react';
import { CustomInput } from '../../common/Custominput/CustomInput';
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { GetWorkers } from "../../services/apiCalls";


export const Workers = () => {

    const [workers, setWorkers] = useState([])

    useEffect(()=>{
        if(workers.length === 0){

            GetWorkers()
                .then(
                    result => {
                        if(result.data.workers.length > 0 ){

                            setWorkers(result.data.workers)
                        }
                    }
                )
                .catch(error => console.log(error))
        }
    },[workers])

    return(
        <div className="WorkersDesign">
            {
                workers.length > 0 

                ? (<div>
                </div>)

                : (<div>Aun no los tenemos</div>)
            }
        </div>
    )


};