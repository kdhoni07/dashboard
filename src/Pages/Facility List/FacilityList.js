import React from "react";
import "./FacilityList.css";

import AppHeader from "../../Components/AppHeader/AppHeader";
import SideMenu from "../../Components/SideMenu/SideMenu";

const FacilityList = () => {
  const data = [
    {
      SLNO: 1,
      FACILITYNAME: "Rohit",
      MOBILENUMBER: "EYE HOSPITAL",
      EMAILID: "rahul122105@gmail.com",
      RCNAME: " 2024-01-25",
      HOSPITALNAME: " 2024-01-25",
      DATEandTIME: "19:10",
      ACTION: "19:30",
    },
    {
      SLNO: 2,
      FACILITYNAME: "Rohit",
      MOBILENUMBER: "EYE HOSPITAL",
      EMAILID: "rahul122105@gmail.com",
      RCNAME: " 2024-01-25",
      HOSPITALNAME: " 2024-01-25",
      DATEandTIME: "19:10",
      ACTION: "19:30",
    },
  ];
  return (
    <div className="facilitypage">
      <AppHeader />
      <div className="sidemenuanddashboard">
        <SideMenu />
        <div className="facility">
          <div className="facilityone">Facility List</div>
          <div className="facilitysecond">
            <p className="facilitysecondone">Facility List </p>
            <div className="facilitysecondtwo">
              <input placeholder="Search Facility List" />
              <p>Export Facility list</p>
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
                <p style={{ width: "5%", fontWeight: "bold" }}># </p>
                <p style={{ width: "10%", fontWeight: "bold" }}>
                  FACILITY NAME
                </p>
                <p style={{ width: "12%", fontWeight: "bold" }}>
                  MOBILE NUMBER
                </p>
                <p style={{ width: "15%", fontWeight: "bold" }}>EMAIL ID</p>
                <p style={{ width: "10%", fontWeight: "bold" }}>RC NAME</p>
                <p style={{ width: "10%", fontWeight: "bold" }}>
                  HOSPITAL NAME
                </p>
                <p style={{ width: "10%", fontWeight: "bold" }}>DATE & TIME </p>
                <p style={{ width: "10%", fontWeight: "bold" }}>ACTION </p>
              </div>
              {data.map((val, key) => (
                <div key={key} style={{ display: "flex", padding: 20 }}>
                  <p style={{ width: "5%" }}>{val.SLNO} </p>
                  <p style={{ width: "10%" }}>{val.FACILITYNAME}</p>
                  <p style={{ width: "12%" }}>{val.MOBILENUMBER}</p>
                  <p style={{ width: "15%" }}>{val.EMAILID}</p>
                  <p style={{ width: "10%" }}>{val.RCNAME}</p>
                  <p style={{ width: "10%" }}>{val.HOSPITALNAME}</p>
                  <p style={{ width: "10%" }}>{val.DATEandTIME} </p>
                  <p style={{ width: "10%" }}>{val.ACTION} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityList;
