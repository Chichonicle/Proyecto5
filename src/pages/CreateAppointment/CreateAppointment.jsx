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

  const [create, setCreate] = useState({
    title: "",
    description: "",
    date: "",
    turn: "",
    worker: "",
    client: datosRdxUser.credentials.user.name,
  });

  const functionHandler = (e) => {
    setCreate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const Submit = () => {
    for (let test1 in create) {
      console.log(create[test1], test1);
      if (create[test1] === "") {
        return;
      }
    }

    CreateAppointment(token)
      .then((resultado) => {
        console.log(resultado);

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
      <ImputAppointments
        disabled={false}
        design={"inputDesign"}
        type={"text"}
        name={"turn"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
      />
      <div className="Name">Trabajador</div>
      <WorkerSelector
        disabled={false}
        design={"inputDesign"}
        type={"text"}
        name={"worker"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
      />
      {/* <ImputAppointments
            disabled={false}
            design={"inputDesign"}
            type={"text"}
            name={"worker"}
            placeholder={""}
            value={""}
            functionProp={functionHandler}
            
          /> */}
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
