import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetAppointments } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import "./Appointments.css"
import { useNavigate } from "react-router-dom";




// export const Appointments = () => {
//     const rdxUser = useSelector(userData);
//     const token = rdxUser.credentials.token;
//     const [appointments, setAppointments] = useState([]);
//     const CitaNueva = () => {
//         setTimeout(()=>{
//             navigate("/CreateAppointment");
//         },500);
//     }
    

//     useEffect(() => {
//         if (appointments.length === 0) {
//                 GetAppointments(token)  
//                     .then(
//                         appointments => {
//                             setAppointments(appointments.data.myAppointments)
//                         }
//                     )
//                     .catch((error) =>  console.log(error));
//                     }
                    
//     }, [appointments]);


//     return (
        
//         <div className='citasDesign'>
//             <div className="citaNueva" onClick={CitaNueva}>Nueva cita</div>
//             {appointments.length > 0 ? (
//                 <div className='appointmentsRoster'>
//                     {appointments.map(appointment => {
//                         return (
//                             <AppointmentCard
//                                 key={appointment.id}
//                                 title={appointment.title}
//                                 description={appointment.description}
//                                 date={appointment.appointment_date}
//                                 turn={appointment.appointment_turn}
//                                 worker={appointment.worker}
//                                 client={appointment.Client}
//                             />)
//                     })
//                     }
//                 </div>
//             )
//                 : (
//                     <div>Loading</div>
//                 )
//             }
//         </div>
//     )
// }

    export const Appointments = () => {
    const rdxUser = useSelector(userData);
    const token = rdxUser.credentials.token;
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const CitaNueva = () => {
        setTimeout(() => {
            navigate("/CreateAppointment");
        }, 500);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetAppointments(token);
                setAppointments(response.data.myAppointments || []); // Manejar array vacío
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [token]);

    return (
        <div className='citasDesign'>
            <div className="citaNueva" onClick={CitaNueva}>Nueva cita</div>
            {!loading ? (
                <div className='appointmentsRoster'>
                    {appointments.length > 0 ? (
                        appointments.map(appointment => (
                            <AppointmentCard
                                key={appointment.id}
                                title={appointment.title}
                                description={appointment.description}
                                date={appointment.appointment_date}
                                turn={appointment.appointment_turn}
                                worker={appointment.worker}
                                client={appointment.Client}
                            />
                        ))
                    ) : (
                        <div>No hay citas disponibles.</div>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}