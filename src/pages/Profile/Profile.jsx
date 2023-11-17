import React, { useEffect, useState } from 'react';
import './Profile.css'
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';
import { CustomInput } from '../../common/Custominput/CustomInput';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
    const datosRdxUser = useSelector(userData);

    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        email: datosRdxUser.credentials.user.email,
        name: datosRdxUser.credentials.user.name,
        role: datosRdxUser.credentials.user.role,
       
    });

    useEffect(() => {
        //RDX se puede seguir como un hook de useState... por lo tanto seguimos
    
        if(!datosRdxUser.credentials.token){
          navigate("/")
        }
      }, [datosRdxUser]);
    

    const errorCheck = (e) => {

        let error = "";
    
        error = validator(e.target.user.name, e.target.value);

        setProfileError((prevState) => ({
            ...prevState,
            [e.target.user.name + "Error"]: error,
        }))
    }
    const functionHandler = (e) => {
        setProfile((prevState) => ({
          ...prevState,
          [e.target.user.name]: e.target.value,
      }))};
    
    return (
        <div className="profileDesign">
            <div className="Name">Nombre</div>
            <CustomInput
                disabled={true}
                design={'inputDesign'}
                type={"text"}
                name={"name"}
                placeholder={""}
                value={profile.name}
                functionProp={functionHandler}
                functionBlur={errorCheck}
            />
            <div className="Name">Email</div>
            <CustomInput
                disabled={true}
                design={'inputDesign'}
                type={"text"}
                name={"email"}
                placeholder={""}
                value={profile.email}
                functionProp={functionHandler}
                functionBlur={errorCheck}
            />
            <div className="Name">Role</div>
            <CustomInput
                disabled={true}
                design={'inputDesign'}
                type={"text"}
                name={"role"}
                placeholder={""}
                value={profile.role}
                functionProp={functionHandler}
                functionBlur={errorCheck}
            />
        </div>
    );

}



