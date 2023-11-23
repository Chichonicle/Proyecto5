import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GetAppointments,
  GetWorkerAppointments,
} from "../../services/apiCalls";
import { userData } from "../userSlice";
import { AppointmentCardWorker } from "../../common/AppointmentCardWorker/AppointmentCardWorker";
import "./WorkerAppointments.css";
import { useNavigate } from "react-router-dom";

export const AppointmentsWorker = () => {
  const rdxUser = useSelector(userData);
  const token = rdxUser.credentials.token;
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const isUser = rdxUser.credentials?.user?.role === "user";

  const navigate = useNavigate();

  const CitaNueva = () => {
    if (!isUser) return;
    setTimeout(() => {
      navigate("/CreateAppointment");
    }, 500);
  };

  useEffect(() => {
    //RDX se puede seguir como un hook de useState... por lo tanto seguimos

    if (!rdxUser.credentials.token) {
      navigate("/");
    }
  }, [rdxUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getFunction = isUser ? GetAppointments : GetWorkerAppointments;
        const response = await getFunction(token);
        setAppointments(response.data.myAppointments || []); // Manejar array vacío
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [token]);

  return (
    <div className="citasDesignWorker">
      {isUser && (
        <div className="citaNueva" onClick={CitaNueva}>
          Nueva cita
        </div>
      )}
      {!loading ? (
        <div className="appointmentsRosterWorker">
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <AppointmentCardWorker
                key={appointment.id}
                title={appointment.title}
                description={appointment.description}
                date={appointment.appointment_date}
                turn={appointment.appointment_turn}
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
};
