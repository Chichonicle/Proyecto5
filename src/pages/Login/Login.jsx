import React, { useState, useEffect } from "react";
import "./Login.css";
import { CustomInput } from "../../common/Custominput/CustomInput";

import { useNavigate } from 'react-router-dom';
import { logUser } from "../../services/apiCalls";

export const Login = () => {

  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const functionHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

//   useEffect(()=>{
//     console.log(credenciales);
//   },[credenciales]);

  const logMe = () => {

    logUser(credenciales)
        .then(
            resultado => {
                console.log(resultado)
                //Aqui guardaría el token........

                //Una vez guardado el token....nos vamos a home....
                setTimeout(()=>{
                    navigate("/");
                },500);
            }
        )
        .catch(error => console.log(error));

  }

  return (
    <div className="loginDesign">
      <CustomInput
        design={"inputDesign"}
        type={"email"}
        name={"email"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <CustomInput
        design={"inputDesign"}
        type={"password"}
        name={"password"}
        placeholder={""}
        // value={}
        functionProp={functionHandler}
        // onBlur={}
      />
      <div className='buttonSubmit' onClick={logMe}>Log Me!</div>
    </div>
  );
};