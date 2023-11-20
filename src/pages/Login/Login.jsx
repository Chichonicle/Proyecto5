import React, { useState, useEffect } from "react";
import "./Login.css";
import { CustomInput } from "../../common/Custominput/CustomInput";
import { logUser } from "../../services/apiCalls";
import { useNavigate } from 'react-router-dom';

//Importo Rdx

import { useDispatch } from "react-redux";  //useDispatch es necesario para emitir acciones
import { login } from "../userSlice";

export const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [msgError, setMsgError] = useState('');

  const functionHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const errorCheck = () => {
    console.log("No has dicho la palabra mágica");
  }

  // useEffect(()=>{
  //   console.log(credenciales);
  // },[credenciales]);

  const logMe = () => {

    logUser(credenciales)
        .then(
            resultado => {
                // console.log(resultado)
                //Aqui guardaría el token........
                dispatch(login({credentials: resultado.data}))

                //Una vez guardado el token....nos vamos a home....
                setTimeout(()=>{
                    navigate("/");
                },500);
            }
        )
        .catch(error => 
          console.log(error))
        

  }

  return (
    <div className="loginDesign">
      <div className="Name">Email</div>
      <CustomInput
        disabled={false}
        design={"inputDesign"}
        type={"email"}
        name={"email"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className="Name">Password</div>
      <CustomInput
         disabled={false}
        design={"inputDesign"}
        type={"password"}
        name={"password"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className='buttonSubmit' onClick={logMe}>Log Me!</div>
      <div>{msgError}</div>
    </div>
  );
};