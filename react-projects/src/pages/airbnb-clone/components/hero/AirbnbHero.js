import React from "react";
import styles from "./airbnbHero.module.css";
import collage from "../../assets/airbnb-colage.png";

const AirbnbHero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.hero}>
                <img
                    src={collage}
                    alt="collage"
                    className={styles.hero_collage}
                />
            </div>
            <h1 className={styles.hero_title}>Online Experiences</h1>
            <p className={styles.subtitle}>
                Join unique interactive activities led by one-of-kind hosts-all
                without leaving home.
            </p>
        </section>
    );
};

export default AirbnbHero;
