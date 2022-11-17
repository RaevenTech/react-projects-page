import React from "react";
import styles from "./businessCard.module.css";
import Header from "../businessCard/components/header/Header";
import About from "../businessCard/components/about/About";
import Socials from "../businessCard/components/socials/Socials";

const businessCardHome = () => {
    return (
        <div className={styles.container}>
            <h1>Busines Card</h1>
            <Header />
            <About />
            <Socials />
        </div>
    );
};

export default businessCardHome;
