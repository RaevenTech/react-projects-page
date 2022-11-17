import React from "react";
import styles from "./home.module.css";
import BusinessCardHome from "./businessCard/businessCardHome";

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>Landing page</h1>
            <BusinessCardHome />
        </div>
    );
};

export default Home;
