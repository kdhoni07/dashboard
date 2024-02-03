import React from "react";
import "./ServerKey.css";

import AppHeader from "../../Components/AppHeader/AppHeader";
import SideMenu from "../../Components/SideMenu/SideMenu";

const ServerKey = () => {
  return (
    <div className="facilitypage">
      <AppHeader />
      <div className="sidemenuanddashboard">
        <SideMenu />
        <div className="facility">
          <div className="facilityone">Server Key</div>
          <div className="serverkeysecond">
            <p className="passwordsecondone"> Update Server Key </p>

            {/* FACILITY SERVER KEY */}
            <div className="serverkey">
              <p>Facility Server Key</p>
              <input
                type="text"
                style={{
                  width: "80.5vw",
                  height: 30,
                  outline: "none",
                  paddingLeft: 10,
                }}
              />
              <button
                style={{
                  marginBottom: 10,
                  width: 60,
                  height: 30,
                  color: "white",
                  backgroundColor: "#204e79",
                  outline: "none",
                  border: "none",
                }}
              >
                Update
              </button>
            </div>
            {/* DOCTOR SERVER KEY */}
            <div className="serverkey">
              <p>Doctor Server Key</p>
              <input
                type="text"
                style={{
                  width: "80.5vw",
                  height: 30,
                  outline: "none",
                  paddingLeft: 10,
                }}
              />
              <button
                style={{
                  marginBottom: 10,
                  width: 60,
                  height: 30,
                  color: "white",
                  backgroundColor: "#204e79",
                  outline: "none",
                  border: "none",
                }}
              >
                Update
              </button>
            </div>
            {/* PATIENTSERVER KEY */}
            <div className="serverkey">
              <p>Doctor Server Key</p>
              <input
                type="text"
                style={{
                  width: "80.5vw",
                  height: 30,
                  outline: "none",
                  paddingLeft: 10,
                }}
              />
              <button
                style={{
                  marginBottom: 10,
                  width: 60,
                  height: 30,
                  color: "white",
                  backgroundColor: "#204e79",
                  outline: "none",
                  border: "none",
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerKey;
