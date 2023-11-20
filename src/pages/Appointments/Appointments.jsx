import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetAppointments } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";




export const Appointments = () => {
    const rdxUser = useSelector(userData);
    const token = rdxUser.credentials.token;
    const [appointments, setAppointments] = useState([]);
    

    useEffect(() => {

        if (appointments.length === 0) {
        
                GetAppointments(token)  
                    .then(
                        appointments => {
                            setAppointments(appointments.data.data)
                            console.log(appointments)
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
                                worker={appointment.workerAppointment.name}
                                cilent={appointment.userAppointment.name}
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