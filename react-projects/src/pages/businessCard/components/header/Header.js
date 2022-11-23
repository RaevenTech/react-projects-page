import React from "react";
import styles from "./header.module.css";
import profileImg from "./assets/linkedin-profile-pic2.jpg";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={profileImg} alt="profile" />
            <h1 className={styles.name}>Raeven Goncalves</h1>
            <h3 className={styles.job_title}>Front-End Developer</h3>
            <a href="https://raeven-portfolio.vercel.app">
                <p className={styles.website}>raeven.website</p>
            </a>
            <div className={styles.btns_el}>
                <a href="mailto:raevengoncalves@gmail.com">
                    <button className={styles.btn}>
                        <div className={styles.btn_icon}>
                            <MdEmail />
                        </div>
                        <div className={styles.btn_txt}>Email</div>
                    </button>
                </a>
                <a href="www.linkedin.com">
                    <button className={styles.btn1}>
                        <div className={styles.btn_icon1}>
                            <BsLinkedin />
                        </div>
                        <div className={styles.btn_txt}>Linkedin</div>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Header;
