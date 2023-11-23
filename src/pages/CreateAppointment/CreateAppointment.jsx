import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
        disabled={false}
        design={"inputDesign"}
        type={"text"}
        name={"title"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
      />
      <div className="Name">Descripción</div>
      <ImputAppointments
        disabled={false}
        design={"inputDesign"}
        type={"text"}
        name={"description"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
      />
      <div className="Name">Fecha</div>
      <ImputAppointments
        disabled={false}
        design={"inputDesign"}
        type={"date"}
        name={"date"}
        placeholder={""}
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
        disabled={false}
        design={"inputDesign"}
        type={"text"}
        name={"worker"}
        placeholder={""}
        functionProp={functionHandler}
      />
      <div className="Name">Cliente</div>
      <ImputAppointments
        disabled={true}
        design={"inputDesign"}
        type={"text"}
        name={"client"}
        placeholder={""}
        value={datosRdxUser.credentials.user.name}
        functionProp={functionHandler}
      />

      <div className="buttonSubmit" onClick={Submit}>
        Submit
      </div>
    </div>
  );
};
