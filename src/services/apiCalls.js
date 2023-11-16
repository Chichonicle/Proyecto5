
import axios from 'axios';

export const logUser = async (body) => {
   
    return await axios.post(`http://localhost:3000/users/login`, body); 

}

export const registerUser = async (body) => {
    
    return await axios.post(`http://localhost:3000/users/register`, body);
}

// export const GetProfile = async () =>{

//     return await axios.get(`http://localhost:3000/users/profile`, body);
// }


export const GetProyects = async (body) => {

    return await axios.get(`http://localhost:3000/users/proyects`, body);
}