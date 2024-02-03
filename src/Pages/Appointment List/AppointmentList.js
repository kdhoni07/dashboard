import React from "react";
import "./AppointmentList.css";

import AppHeader from "../../Components/AppHeader/AppHeader";
import SideMenu from "../../Components/SideMenu/SideMenu";

const AppointmentList = () => {
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
    <div className="facilitypage">
      <AppHeader />
      <div className="sidemenuanddashboard">
        <SideMenu />
        <div className="facility">
          <div className="facilityone">Appointment List</div>
          <div className="facilitysecond">
            <p className="facilitysecondone">Appointment List </p>
            <div className="facilitysecondtwo">
              <input placeholder="Search Appointment List" />
            </div>
            <div className="dashboardthirdone">
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f0f0f0",
                  height: 40,
                  alignItems: "center",
                  padding: 20,
                }}
              >
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
                <div key={key} style={{ display: "flex", padding: 20 }}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
