import React from "react";
import styles from "./card.module.css";
import star from "../../assets/Star1.png";

const Card = (props) => {
    let badgeText;
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.card.location === "Online") {
        badgeText = "Online";
    }

    return (
        <section className={styles.cards}>
            <div className={styles.image}>
                {badgeText && <div className={styles.badge}>{badgeText}</div>}
                <img
                    className={styles.img}
                    src={props.card.coverImg}
                    alt={props.card.title}
                    width={250}
                    height={355}
                />
            </div>
            <div className={styles.rating_info}>
                <img src={star} alt="Star" className={styles.star} />
                <p className={styles.rating}>{props.card.stats.rating}</p>{" "}
                <p className={styles.gray_info}>
                    ({props.card.stats.reviewCount})-{props.card.location}
                </p>
            </div>
            <p className={styles.title}>{props.card.title}</p>
            <p className={styles.price_person}>
                <span className={styles.price}>From ${props.price} </span> /
                person
            </p>
        </section>
    );
};

export default Card;
