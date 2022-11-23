import React from "react";
import styles from "./socials.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Socials = () => {
    return (
        <div className={styles.container}>
            <a href="www.facebook.com">
                <FaFacebookSquare className={styles.socials} />
            </a>
            <a href="www.twitter.com">
                <FaTwitterSquare className={styles.socials} />
            </a>
            <a href="www.instagram.com">
                <FaInstagramSquare className={styles.socials} />
            </a>
            <a href="www.github.com">
                <FaGithubSquare className={styles.socials} />
            </a>
        </div>
    );
};

export default Socials;
