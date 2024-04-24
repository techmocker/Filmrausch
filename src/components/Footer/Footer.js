import { Link } from "react-router-dom";
import React from "react";
import "./Footer.module.css"; // Stile hier importieren
import styles from "./Footer.module.css"

function Footer() {
  const fechaActual = new Date().getFullYear();

  return (
      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>
              <Link to="/filmrausch/">StartSeite</Link>
            </li>
            <li>
              <Link to="/filmrausch/Filme">Filme</Link>
            </li>
            <li>
              <p>&copy; {fechaActual} Filmrausch</p>
            </li>
            <li>
              <Link to="/filmrausch/Serien">Serien</Link>
            </li>
            <li>
              <Link to="/filmrausch/Impressum">Impressum</Link>
            </li>
          </ul>
        </nav>
      </footer>
  );
}

export default Footer;
