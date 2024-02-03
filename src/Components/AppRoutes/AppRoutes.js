import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import FacilityList from "../../Pages/Facility List/FacilityList";
import DoctorList from "../../Pages/Doctor List/DoctorList";
import AppointmentList from "../../Pages/Appointment List/AppointmentList";
import ChangePassword from "../../Pages/Change Password/ChangePassword";
import ServerKey from "../../Pages/Server Key/ServerKey";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/facilitylist" element={<FacilityList />}></Route>
      <Route path="/doctorlist" element={<DoctorList />}></Route>
      <Route path="/appointmentlist" element={<AppointmentList />}></Route>
      <Route path="/changepassword" element={<ChangePassword />}></Route>
      <Route path="/serverkey" element={<ServerKey />}></Route>
    </Routes>
  );
}
export default AppRoutes;
