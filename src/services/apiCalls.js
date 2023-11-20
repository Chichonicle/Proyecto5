
import axios from 'axios';

export const logUser = async (body) => {
   
    return await axios.post(`http://localhost:3000/users/login`, body); 

}

export const registerUser = async (body) => {
    
    return await axios.post(`http://localhost:3000/users/register`, body);
}

export const GetProfile = async () =>{

    return await axios.get(`http://localhost:3000/users/profile`);
}


export const GetProyects = async () => {

    return await axios.get(`http://localhost:3000/users/proyects`);
}

export const GetWorkers = async () => {

    return await axios.get(`http://localhost:3000/users/allworkers`);

}

export const GetAppointments = async (token) => {
    console.log('----------------------------------');
    console.log(token);
    console.log('----------------------------------');

    return await axios.get(`http://localhost:3000/users/appointments` ,{
        headers: {
          Authorization: `Bearer ${token}`
        },
        
      })
    }

