import React from "react";
import styles from "./Header.module.css";
import Loginbar from "../Loginbar/Loginbar";

const Header = () =>  {
    return (
        <>
            <div className={styles["container-fluid"]}>
                <Loginbar />
                <div className={styles["logo"]}>
                    <img src="https://techmocker.github.io/Filmrausch/logo.png" alt="FilmRausch Logo" className={styles["logoSize"]} />
                </div>
            </div>
        </>
    );
};

export default Header;
