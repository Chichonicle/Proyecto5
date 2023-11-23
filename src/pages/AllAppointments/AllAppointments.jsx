import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import "./AllAppointments.css";
import { useNavigate } from "react-router-dom";
import { GetAllAppointments } from "../../services/apiCalls";

export const AllAppointments = () => {
  const rdxUser = useSelector(userData);
  const token = rdxUser.credentials.token;
  const [appointments, setAppointments] = useState([]);
  const isSuperadmin = rdxUser.credentials?.user?.role === "super_admin";
  const navigate = useNavigate();




  useEffect(() => {
    //RDX se puede seguir como un hook de useState... por lo tanto seguimos

    if (!isSuperadmin) {
      navigate("/");
    }
  }, [rdxUser]);

  useEffect(() => {
   if (appointments.length === 0) {
    GetAllAppointments(token)
    .then(
        appointments => {
            setAppointments(appointments.data.myAppointments)
        }
    )
    .catch(error => console.log(error));

   }
  }, [appointments]);

  return (
    <div className="citasDesign">
      
        <div className="appointmentsRoster">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
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
    </div>
  );
};
