import React from "react";
import styles from "./about.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.p_txt}>
                <h2 className={styles.p_title}>About</h2>
                <p className={styles.text}>
                    I am a front-end developer with a particular interest in
                    making things simple and automating daily tasks. I try to
                    keep up with security and best practices, and am always
                    looking to learn new things.
                </p>
            </div>
            <div className={styles.p_txt}>
                <h2 className={styles.p_title}>Interests</h2>
                <p className={styles.text}>
                    Food Love. Music scholar. Internet fanatic. Bacon buff.
                    Travel geek. Undercover science nerd. Loyal football
                    supporter. Self-proclaimed coffee connoisseur{" "}
                </p>
            </div>
        </div>
    );
};

export default About;
