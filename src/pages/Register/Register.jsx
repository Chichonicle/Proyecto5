import React, { useState, useEffect } from "react";
import "./Register.css";
import { CustomInput } from "../../common/Custominput/CustomInput";
import { validator } from "../../services/useful";
import { registerUser } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const functionHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorCheck = (e) => {
    let error = "";

    error = validator(e.target.name, e.target.value);

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const Submit = () => {
    for (let test1 in user) {
      if (user[test1] === "") {
        return;
      }
    }

    for (let test in userError) {
      if (userError[test] !== "") {
        return;
      }
    }

    registerUser(user)
      .then((resultado) => {
        console.log(resultado);

        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="registerDesign">
      <div className="Name">Name</div>
      <CustomInput
        disabled={false}
        design={`inputDesign ${
          userError.nameError !== "" ? "inputDesignError" : ""
        }`}
        type={"text"}
        name={"name"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className="Name">Email</div>
      <CustomInput
        disabled={false}
        design={`inputDesign ${
          userError.emailError !== "" ? "inputDesignError" : ""
        }`}
        type={"email"}
        name={"email"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className="errorMsg">{userError.emailError}</div>
      <div className="Name">Password</div>
      <CustomInput
        disabled={false}
        design={`inputDesign ${
          userError.passwordError !== "" ? "inputDesignError" : ""
        }`}
        type={"password"}
        name={"password"}
        placeholder={""}
        value={""}
        functionProp={functionHandler}
        functionBlur={errorCheck}
      />
      <div className="errorMsg">{userError.passwordError}</div>

      <div className="errorMsg">{userError.nameError}</div>
      <div className="buttonSubmit" onClick={Submit}>
        Submit
      </div>
    </div>
  );
};
