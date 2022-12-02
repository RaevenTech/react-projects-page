import React from "react";
import styles from "./airbnbHome.module.css";
import AirbnbHero from "./components/hero/AirbnbHero";
import AirbnbNavbar from "./components/navbar/AirbnbNavbar";
import data from "./appData/appdata";
import Card from "./components/card/Card";

const AirbnbHome = () => {
    const cards = data.map((card, i) => {
        return <Card key={i} card={card} />;
    });
    return (
        <div className={styles.container}>
            <AirbnbNavbar />
            <AirbnbHero />
            <div id="cards">{cards}</div>
        </div>
    );
};

export default AirbnbHome;
