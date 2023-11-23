import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { Profile } from '../Profile/Profile';
import { Workers } from '../Workers/Workers';
import { Appointments } from '../Appointments/Appointments';
import { Newappointment } from '../CreateAppointment/CreateAppointment';
import { AppointmentsWorker } from '../WorkerAppointments/WorkerAppointments';



export const Body = () => {
     return (
         <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/workers" element={<Workers />}/>
                <Route path="/appointments" element={<Appointments />}/>
                <Route path="/appointmentsworker" element={<AppointmentsWorker />}/>
                <Route path="/createappointment" element={<Newappointment />}/>
            </Routes>
         </>
     )
}