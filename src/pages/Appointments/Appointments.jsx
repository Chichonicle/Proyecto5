import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetAppointments } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import "./Appointments.css"




export const Appointments = () => {
    const rdxUser = useSelector(userData);
    const token = rdxUser.credentials.token;
    const [appointments, setAppointments] = useState([]);
    

    useEffect(() => {
        console.log(appointments)
        if (appointments.length === 0) {
                GetAppointments(token)  
                    .then(
                        appointments => {
                            console.log(appointments)
                            setAppointments(appointments.data.myAppointments)
                        }
                    )
                    .catch((error) =>  console.log(error));
                    }
                    
    }, [appointments]);


    return (

        <div className='citasDesign'>
            {appointments.length > 0 ? (
                <div className='appointmentsRoster'>
                    {appointments.map(appointment => {
                        return (
                            <AppointmentCard
                                key={appointment.id}
                                title={appointment.title}
                                description={appointment.description}
                                date={appointment.appointment_date}
                                turn={appointment.appointment_turn}
                                worker={appointment.worker}
                                client={appointment.Client}
                            />)
                    })
                    }
                </div>
            )
                : (
                    <div>Loading</div>
                )
            }
        </div>
    )
}