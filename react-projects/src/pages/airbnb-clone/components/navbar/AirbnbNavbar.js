import React from "react";
import logo from "../../assets/airbnb1.png";
import styles from "./airbnbNavbar.module.css";

const AirbnbNavbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" className={styles.nav_logo} />
        </nav>
    );
};

export default AirbnbNavbar;
