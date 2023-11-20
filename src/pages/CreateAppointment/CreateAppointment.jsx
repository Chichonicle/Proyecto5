import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../common/Custominput/CustomInput";
import { useState } from "react";


export const Create = () => {
    const navigate = useNavigate();
  
    const [create, setCreate] = useState({
      title: "",
      description: "",
      date: "",
      turn: "",
      worker: "",
      client: "",
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
  
  
      createAppointment(appointment)
        .then((resultado) => {
          console.log(resultado);
  
          setTimeout(() => {
            navigate("/profile");
          }, 500);
        })
        .catch((error) => console.log(error));
    };
    return 
    };
    