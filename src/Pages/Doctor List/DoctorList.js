import React from "react";
import "./DoctorList.css";

import AppHeader from "../../Components/AppHeader/AppHeader";
import SideMenu from "../../Components/SideMenu/SideMenu";

const DoctorList = () => {
  const data = [
    {
      SLNO: 1,
      FACILITYNAME: "Rohit",
      MOBILENUMBER: "EYE HOSPITAL",
      EMAILID: "rahul122105@gmail.com",
      RCNAME: " 10",
      HOSPITALNAME: " 2024-01-25",
    },
    {
      SLNO: 2,
      FACILITYNAME: "Rohit",
      MOBILENUMBER: "EYE HOSPITAL",
      EMAILID: "rahul122105@gmail.com",
      RCNAME: " 11",
      HOSPITALNAME: " 2024-01-25",
    },
  ];
  return (
    <div className="facilitypage">
      <AppHeader />
      <div className="sidemenuanddashboard">
        <SideMenu />
        <div className="facility">
          <div className="facilityone">Doctor List</div>
          <div className="facilitysecond">
            <p className="facilitysecondone">Doctor List </p>
            <div className="facilitysecondtwo">
              <input placeholder="Select Doctor List" />
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
                <p style={{ width: "10%", fontWeight: "bold" }}>DOCTOR NAME</p>
                <p style={{ width: "12%", fontWeight: "bold" }}>
                  MOBILE NUMBER
                </p>
                <p style={{ width: "15%", fontWeight: "bold" }}>EMAIL ID</p>
                <p style={{ width: "15%", fontWeight: "bold" }}>
                  NO OF EXPERIANCE
                </p>
                <p style={{ width: "10%", fontWeight: "bold" }}>
                  HOSPITAL NAME
                </p>
              </div>
              {data.map((val, key) => (
                <div key={key} style={{ display: "flex", padding: 20 }}>
                  <p style={{ width: "5%" }}>{val.SLNO} </p>
                  <p style={{ width: "10%" }}>{val.FACILITYNAME}</p>
                  <p style={{ width: "12%" }}>{val.MOBILENUMBER}</p>
                  <p style={{ width: "15%" }}>{val.EMAILID}</p>
                  <p style={{ width: "15%" }}>{val.RCNAME}</p>
                  <p style={{ width: "10%" }}>{val.HOSPITALNAME}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
