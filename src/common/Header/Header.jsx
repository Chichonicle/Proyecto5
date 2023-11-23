import React from "react";
import "./Header.css";
import { LinkButton } from "../LinkButton/LinkButton";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import { logout, userData } from "../../pages/userSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const rdxCredentials = useSelector(userData);
  const isSuperadmin = rdxCredentials.credentials?.user?.role === "super_admin";

  const logOutMe = () => {
    dispatch(logout({ credentials: "" }));

    navigate("/");
  };

  return (
    <div className="headerDesign">
      {isSuperadmin && (
        <div>
          <LinkButton path={"/allUsers"} title={"Users"} />
        </div>
      )}
      {isSuperadmin && (
        <div>
          <LinkButton path={"/allAppointments"} title={"Appointments"} />
        </div>
      )}
      <LinkButton path={"/workers"} title={"Workers"} />
      <LinkButton path={"/"} title={"Home"} />

      {!rdxCredentials?.credentials.token ? (
        <>
          <LinkButton path={"/login"} title={"Login"} />
          <LinkButton path={"/register"} title={"Register"} />
        </>
      ) : (
        <>
          <LinkButton
            path={"/profile"}
            title={rdxCredentials.credentials.user.name}
          />
          <div onClick={logOutMe}>
            <LinkButton path={"/"} title={"log out"} />
          </div>
        </>
      )}
    </div>
  );
};
