import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <span className={styles.logo_name}>Raeven</span>.
                <span className={styles.react_blue}>React</span>
                (React-router-DOM)
            </div>

            <button className={styles.back_to_profile}>
                <a href="/">Back</a>
            </button>
        </div>
    );
};

export default Navbar;
