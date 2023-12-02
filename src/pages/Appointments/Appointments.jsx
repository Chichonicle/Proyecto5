import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  GetAppointments,
  GetWorkerAppointments,
  deleteAppointment,
  updateAppointment,
} from "../../services/apiCalls";
import { userData } from "../userSlice";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import "./Appointments.css";
import { useNavigate } from "react-router-dom";
import { ImputAppointments } from "../../common/ImputAppointments/ImputAppointments";
import { WorkerSelector } from "../../common/WorkerSelector/WorkerSelector";

export const Appointments = () => {
  const rdxUser = useSelector(userData);
  const token = rdxUser.credentials.token;
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const isUser = rdxUser.credentials?.user?.role === "user";

  const navigate = useNavigate();

  const CitaNueva = () => {
    if (!isUser) return;
    setTimeout(() => {
      navigate("/CreateAppointment");
    }, 500);
  };

  const onclickDelete = (id) => {
    deleteAppointment(token, { id });

    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
    alert("Cita eliminada");
  };

  const editAppointmentSubmit = () => {
    updateAppointment(token, editingAppointment).then
  
  ((resultado) => {
    console.log(resultado);

    setTimeout(() => {
      navigate("/Profile");
    }, 500);
  })
  .catch((error) => console.log(error));
};
  const functionHandler = (e) => {
    setEditingAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!rdxUser.credentials.token) {
      navigate("/");
    }
  }, [rdxUser]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getFunction = isUser ? GetAppointments : GetWorkerAppointments;
        const response = await getFunction(token);
        setAppointments(response.data.myAppointments || []);
      } catch (error) {}

      setLoading(false);
    };

    fetchData();
  }, [token]);

  return (
    <div className="citasDesign">
      {isUser && editingAppointment === null && (
        <div className="citaNueva" onClick={CitaNueva}>
          Nueva cita
        </div>
      )}
      {editingAppointment !== null ? (
        <>
          <div className="Name">Titulo</div>
          <ImputAppointments
            design={"inputDesign"}
            type={"text"}
            name={"title"}
            value={editingAppointment.title}
            functionProp={functionHandler}
          />
          <div className="Name">Descripción</div>
          <ImputAppointments
            design={"inputDesign"}
            type={"text"}
            name={"description"}
            value={editingAppointment.description}
            functionProp={functionHandler}
          />
          <div className="Name">Fecha</div>
          <ImputAppointments
            design={"inputDesign"}
            type={"date"}
            name={"date"}
            value={editAppointmentSubmit.appointment_date}
            functionProp={functionHandler}
          />
          <div className="Name">Turno</div>
          <select
            className={"inputDesign"}
            name="turn"
            onChange={functionHandler}
          >
            <option value={"morning"}>{"Mañana"}</option>
            <option value={"evening"}>{"Tarde"}</option>
          </select>
          <div className="Name">Trabajador</div>
          <WorkerSelector
            design={"inputDesign"}
            type={"text"}
            name={"worker"}
            value={"" }
            functionProp={functionHandler}
          />

          <div className="buttonSubmit" onClick={editAppointmentSubmit}>Submit</div>
        </>
      ) : (
        ""
      )}
      {editingAppointment === null &&
        (!loading ? (
          <div className="appointmentsRoster">
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onclickDelete={() => onclickDelete(appointment.id)}
                  edit={() => setEditingAppointment(appointment)}
                />
              ))
            ) : (
              <div>No hay citas disponibles.</div>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        ))}
    </div>
  );
};
