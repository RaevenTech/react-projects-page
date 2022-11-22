import React from "react";
import styles from "./socials.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Socials = () => {
    return (
        <div className={styles.container}>
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagramSquare />
            <FaGithubSquare />
        </div>
    );
};

export default Socials;
