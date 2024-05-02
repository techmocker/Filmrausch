import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm, faTv, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import styles from "./Navbar2.module.css";
import { useAuth } from '../../../auth/AuthContext'; 

const Navbar2 = () => {
  const { user, isLoggedIn } = useAuth(); 
  const userId = user ? user.id : null;  

  
  const baseData = [
    {
      icon: faHome,
      name: "Startseite",
      link: "/Filmrausch/",
    },
    {
      icon: faFilm,
      name: "Filme",
      link: "Filmrausch/filme",
    },
    {
      icon: faTv,
      name: "Serien",
      link: "Filmrausch/serien",
    },
    {
      icon: faSearch,
      name: "Suche",
      link: "Filmrausch/suche",
    },
  ];

  // "Favoriten" navigation für logged-in users
  const favoritesData = isLoggedIn ? [{
    icon: faStar,
    name: "Favoriten",
    link: `Filmrausch/favoriten/${userId}`,
  }] : [];

  
  const data = [...baseData, ...favoritesData];

  return (
    <div className={styles.navbar}>
      {data.map((item, index) => (
        <Link key={index} to={item.link} className={styles.linkTo}>
          <button className={styles.button}>
            <FontAwesomeIcon icon={item.icon} className={styles.customIcon} />
            <span className={styles.iconText}>{item.name}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar2;
