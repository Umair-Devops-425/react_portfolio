/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from "./navbar.module.css";
import { getImageUrl } from "../utlis";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            {/* <img className={styles.menuBtn} src={getImageUrl("././nav/icon.png")}/> */}
            <ul className={styles.menuitems}>
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
