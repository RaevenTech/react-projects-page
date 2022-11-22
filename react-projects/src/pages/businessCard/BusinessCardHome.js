import React from "react";
import styles from "./businessCard.module.css";
import Header from "../businessCard/components/header/Header";
import About from "../businessCard/components/about/About";
import Socials from "./components/socials/Socials";

const businessCardHome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <Header />
                <About />
                <Socials />
            </div>
        </div>
    );
};

export default businessCardHome;
