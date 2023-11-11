
import axios from 'axios';

export const logUser = async (body) => {
   
    return await axios.post(`http://localhost:3000/users/register`, body);

    

}