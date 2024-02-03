import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    // <div classname="wconatiner">
    //   <div class="form-box">
    //     <p style={{ fontSize: 25, color: "#226780", fontWeight: 700 }}>
    //       MedSky
    //     </p>
    //     <p class="wpara">Welcome to Login</p>
    //     <input type="email" placeholder="Enter your Email" className="email" />
    //     <br />
    //     <input
    //       type="password"
    //       placeholder="Enter Your Password"
    //       class="password"
    //     />
    //     <br />
    //     <br />
    //     <br />
    //     <button
    //       style={{
    //         fontSize: 15,
    //         width: 220,
    //         backgroundColor: "#226780",
    //         color: "white",
    //         padding: 10,
    //         marginLeft: 40,
    //       }}
    //     >
    //       Login
    //     </button>
    //   </div>
    // </div>
    <div className={styles.backgroundimage}>
      <div className={styles.formbox}>
        <p className={styles.headertext}>
          meds <span className={styles.key}>Key</span>
        </p>
        <p
          style={{
            color: "black",
            fontWeight: "500",
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          Login to your Account
        </p>
        <input
          type="email"
          placeholder="Enter your Email"
          className={styles.email}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your Password"
          className={styles.email}
        />
        <br />
        <br />
        <button
          style={{
            fontSize: 15,
            width: "90%",
            height: "10%",
            backgroundColor: "#226780",
            color: "white",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
