import React from "react";
import styles from "./home.module.css";
import reactLogo from "../assets/logo512.png";
//import BusinessCardHome from "./businessCard/BusinessCardHome"; //<BusinessCardHome />

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title1}>
                React.<span className={styles.projectsTxt}>projects</span>
            </h1>
            <img
                className={styles.react_logo}
                src={reactLogo}
                alt="react logo"
            />
            <h1 className={styles.title2}>
                React-<span className={styles.routerTxt}>Router</span>-
                <span className={styles.domTxt}>DOM</span>
            </h1>
        </div>
    );
};

export default Home;
