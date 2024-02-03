import React from "react";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <div className={styles.appheader}>
      <p className={styles.headertext}>
        meds <span className={styles.key}>Key</span>
      </p>
    </div>
  );
};

export default AppHeader;
