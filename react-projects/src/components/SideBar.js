import React from "react";
import styles from "./sidebar.module.css";

const projectsList = [
    {
        id: 1,
        title: "Business Card",
        url: "pathway1",
    },
    {
        id: 2,
        title: "AirBnB Page",
        url: "pathway2",
    },
    {
        id: 3,
        title: "Notes App",
        url: "pathway3",
    },
];

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Projects.list</div>
            <div className={styles.project}>
                {projectsList.map((project, i) => {
                    return (
                        <div key={i} className={styles.project_item}>
                            <a
                                href={project.url}
                                className={styles.project_title}
                            >
                                {project.title}
                            </a>
                        </div>
                    );
                })}
            </div>
            <p className={styles.coming_soon}>...more on the way!</p>
        </div>
    );
};

export default SideBar;
