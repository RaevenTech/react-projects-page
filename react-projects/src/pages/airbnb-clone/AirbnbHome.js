import React from "react";
import styles from "./airbnbHome.module.css";
import AirbnbNavbar from "./components/navbar/AirbnbNavbar";

const AirbnbHome = () => {
    return (
        <div className={styles.container}>
            <AirbnbNavbar />
        </div>
    );
};

export default AirbnbHome;
