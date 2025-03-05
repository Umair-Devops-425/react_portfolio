/* eslint-disable no-unused-vars */
import React from 'react';
import styles from "./hero.module.css";
import { getImageUrl } from "../../../portfolio/src/utlis";
import MeImage from "../../assets/hero/Me.png";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Mohd Umair</h1>
        <p className={styles.discription}>I am DevOps Engineer</p>
    <a href='mailto:umairmohd425@gmail.com' className={styles.contactBtn}>Contact Me😊</a>
    </div>
    {/* <img src={getImageUrl("hero/Me.png")}></img> */}
    <img  className={styles.heroimg} src={MeImage} alt="Profile" />
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
}
