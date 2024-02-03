import React from "react";
import "./ChangePassword.css";

import AppHeader from "../../Components/AppHeader/AppHeader";
import SideMenu from "../../Components/SideMenu/SideMenu";

const ChangePassword = () => {
  return (
    <div className="facilitypage">
      <AppHeader />
      <div className="sidemenuanddashboard">
        <SideMenu />
        <div className="facility">
          <div className="facilityone">Change Password</div>
          <div className="passwordsecond">
            <p className="passwordsecondone">Please Update Password </p>
            {/* OLD PASSWWORD AND NEW PASSWORD  */}
            <div style={{ display: "flex", gap: 10 }}>
              <div className="oldpassword">
                <p style={{ marginBottom: 10 }}>Old Password</p>
                <input
                  type="text"
                  style={{
                    width: "40vw",
                    height: 30,
                    outline: "none",
                    paddingLeft: 10,
                  }}
                />
              </div>
              <div className="newpassword">
                <p style={{ marginBottom: 10 }}>New Password</p>
                <input
                  type="text"
                  style={{
                    width: "40vw",
                    height: 30,
                    outline: "none",
                    paddingLeft: 10,
                  }}
                />
              </div>
            </div>
            {/* confirm password */}
            <div className="confirmpassword">
              <p style={{ marginTop: 20, marginBottom: 10 }}>
                Confirm Password
              </p>
              <input
                type="text"
                style={{
                  width: "80.5vw",
                  height: 30,
                  outline: "none",
                  paddingLeft: 10,
                }}
              />
            </div>
            <button
              style={{
                marginTop: 30,
                width: 60,
                height: 30,
                color: "white",
                backgroundColor: "#204e79",
                outline: "none",
                border: "none",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
