import React from "react";
import styles from "./header.module.css";
import emailIcon from "./assets/Icon.png";
import profileImg from "./assets/linkedin-profile-pic2.jpg";
import linkedinIcon from "./assets/linkedin.png";
//https://picsum.photos/200/300

const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={profileImg} alt="profile" />
            <h1>Raeven Goncalves</h1>
            <h3>Front-End Developer</h3>
            <p>Raeven.website</p>
            <div>
                <button className={styles.email}>
                    <span>
                        <img src={emailIcon} alt="email icon" />
                    </span>
                    Email
                </button>
                <button>
                    <img
                        className={styles.linkedinIcon}
                        src={linkedinIcon}
                        alt="email icon"
                    />
                    Linkedin
                </button>
            </div>
        </div>
    );
};

export default Header;
