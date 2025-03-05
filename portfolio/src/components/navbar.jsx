/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from "./navbar.module.css";
import Icon from "../../assets/nav/icon.png"
import Close from  "../../assets/nav/cross.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? Icon : Close } 
        alt="Profile" onClick={() => setMenuOpen(!menuOpen)}
        />
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false) }>
                <li>
                    <a href='#About'>About</a>
                </li>
                <li>
                    <a href='#Experiance'>Experiance</a>
                </li>
                <li>
                    <a href='#Projects'>Projects</a>
                </li>
                <li>
                    <a href='#Contact'>Contact</a>
                </li>
            </ul>
        </div>

    </nav>
  )
}
