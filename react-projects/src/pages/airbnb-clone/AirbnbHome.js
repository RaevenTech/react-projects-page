import React from "react";
import styles from "./airbnbHome.module.css";
import AirbnbHero from "./components/hero/AirbnbHero";
import AirbnbNavbar from "./components/navbar/AirbnbNavbar";

const AirbnbHome = () => {
    return (
        <div className={styles.container}>
            <AirbnbNavbar />
            <AirbnbHero />
        </div>
    );
};

export default AirbnbHome;
