import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CreateAppointment } from "../../services/apiCalls";
import "./CreateAppointment.css";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { ImputAppointments } from "../../common/ImputAppointments/ImputAppointments";
import { WorkerSelector } from "../../common/WorkerSelector/WorkerSelector";

export const Newappointment = () => {
  const navigate = useNavigate();
  const datosRdxUser = useSelector(userData);
  const token = datosRdxUser.credentials.token;

  useEffect(() => {
    if (!datosRdxUser.credentials.token) {
      navigate("/");
    }
  }, [datosRdxUser]);

  const [create, setCreate] = useState({
    title: "",
    description: "",
    date: "",
    turn: "morning",
    worker: 1,
    client: datosRdxUser.credentials.user.id,
  });

  const functionHandler = (e) => {
    setCreate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const Submit = () => {
    for (let test1 in create) {
      if (create[test1] === "") {
        return;
      }
    }

    CreateAppointment(create, token)
      .then((resultado) => {
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="createDesign">
      <div className="Name">Titulo</div>
      <ImputAppointments
        type={"text"}
        name={"title"}
        value={""}
        functionProp={functionHandler}
      />
      <div className="Name">Descripción</div>
      <ImputAppointments
        type={"text"}
        name={"description"}
        value={""}
        functionProp={functionHandler}
      />
      <div className="Name">Fecha</div>
      <ImputAppointments
        type={"date"}
        name={"date"}
        value={""}
        functionProp={functionHandler}
      />
      <div className="Name">Turno</div>
      <select className={"inputDesign"} name="turn" onChange={functionHandler}>
        <option value={"morning"}>{"Mañana"}</option>
        <option value={"evening"}>{"Tarde"}</option>
      </select>
      <div className="Name">Trabajador</div>
      <WorkerSelector
        type={"text"}
        name={"worker"}
        functionProp={functionHandler}
      />
      <div className="Name">Cliente</div>
      <ImputAppointments
        disabled={true}
        type={"text"}
        name={"client"}
        value={datosRdxUser.credentials.user.name}
        functionProp={functionHandler}
      />

      <div className="buttonSubmit" onClick={Submit}>
        Submit
      </div>
    </div>
  );
};
