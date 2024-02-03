import React from "react";
import "./Dashboard.css";
import { FaClipboardList } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Graph from "../../Components/Graph/Graph";
import AppHeader from "../../Components/AppHeader/AppHeader";
import SideMenu from "../../Components/SideMenu/SideMenu";
import Piechart from "../../Components/Piechart/Piechart";
import PieChartWithLabel from "../../Components/PieChartWithLabel/PieChartWithLabel";

const Dashboard = () => {
  const data = [
    {
      SLNO: 1,
      PATIENTNAME: "Rohit",
      HOSPITALNAME: "EYE HOSPITAL",
      DOCTORNAME: " DR RAMAN ",
      BOOKINGDATE: " 2024-01-25",
      APPOINTMENTDATE: " 2024-01-25",
      FROMTIME: "19:10",
      TOTIME: "19:30",
      STATUS: "OK",
    },
    {
      SLNO: 1,
      PATIENTNAME: "Rohit sharma",
      HOSPITALNAME: "EYE HOSPITAL",
      DOCTORNAME: " DR RAMAN ",
      BOOKINGDATE: " 2024-01-25",
      APPOINTMENTDATE: " 2024-01-25",
      FROMTIME: "19:10",
      TOTIME: "19:30",
      STATUS: "OK",
    },
  ];
  return (
    <div className="dashboardpage">
      <AppHeader />
      <div className="sidemenuanddashboard">
        <SideMenu />
        <div className="dashboard">
          <div className="dashboardone">Dashboard</div>
          <div className="dashboardsecond">
            <div className="secondone">
              <div className="secondonelist">
                <div className="icon">
                  <FaClipboardList />
                </div>
                <div>
                  <p>Total Facility</p>
                  <p style={{ fontWeight: "bold", fontSize: 20 }}>4</p>
                </div>
              </div>
              <div className="secondonelist">
                <div className="icon">
                  <FaUserDoctor />
                </div>
                <div>
                  <p>Total Doctor</p>
                  <p style={{ fontWeight: "bold", fontSize: 20 }}>2</p>
                </div>
              </div>
              <div className="secondonelist">
                <div className="icon">
                  <FaCalendarAlt />
                </div>
                <div>
                  <p>Total Appointment</p>
                  <p style={{ fontWeight: "bold", fontSize: 20 }}>3</p>
                </div>
              </div>

              <div className="secondonelist">
                <div className="icon">
                  <FaClipboardList />
                </div>
                <div>
                  <p>Linked With ECHS</p>
                  <p style={{ fontWeight: "bold", fontSize: 20 }}>2</p>
                </div>
              </div>
            </div>
            <div className="secondtwo">
              <h1>Total Facility Action</h1>
              <Piechart />
            </div>
            <div className="secondthree">
              <h1>Patient visit by gender</h1>
              <Graph />
            </div>
          </div>
          <div className="dashboardthird">
            <div className="dashboardthirdone">
              <p style={{ fontWeight: "bold", paddingBottom: 20 }}>
                Upcoming Appointments
              </p>
              <div style={{ display: "flex", paddingBottom: 10 }}>
                <p style={{ width: "5%", fontWeight: "bold" }}>SL NO </p>
                <p style={{ width: "12%", fontWeight: "bold" }}>PATIENT NAME</p>
                <p style={{ width: "12%", fontWeight: "bold" }}>
                  HOSPITAL NAME
                </p>
                <p style={{ width: "12%", fontWeight: "bold" }}>DOCTOR NAME</p>
                <p style={{ width: "12%", fontWeight: "bold" }}>BOOKING DATE</p>
                <p style={{ width: "15%", fontWeight: "bold" }}>
                  APPOINTMENT DATE
                </p>
                <p style={{ width: "10%", fontWeight: "bold" }}>FROM TIME </p>
                <p style={{ width: "10%", fontWeight: "bold" }}>TO TIME </p>
                <p style={{ width: "10%", fontWeight: "bold" }}>STATUS </p>
              </div>
              {data.map((val, key) => (
                <div key={key} style={{ display: "flex", paddingBottom: 10 }}>
                  <p style={{ width: "5%" }}>{val.SLNO} </p>
                  <p style={{ width: "12%" }}>{val.PATIENTNAME}</p>
                  <p style={{ width: "12%" }}>{val.HOSPITALNAME}</p>
                  <p style={{ width: "12%" }}>{val.DOCTORNAME}</p>
                  <p style={{ width: "12%" }}>{val.BOOKINGDATE}</p>
                  <p style={{ width: "15%" }}>{val.APPOINTMENTDATE}</p>
                  <p style={{ width: "10%" }}>{val.FROMTIME} </p>
                  <p style={{ width: "10%" }}>{val.TOTIME} </p>
                  <p style={{ width: "10%" }}>{val.STATUS}</p>
                </div>
              ))}
            </div>
            <div className="dashboardthirdtwo">
              <h1>Total Appointment</h1>
              <PieChartWithLabel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
