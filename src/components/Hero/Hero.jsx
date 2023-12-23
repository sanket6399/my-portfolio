import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sanket</h1>
        <p className={styles.description}>
        Hello! I'm a software developer with 3+ years of experience, specializing in Python, AWS, and backend technologies. Currently pursuing my Masters in Computer Science, I have a keen interest in full-stack development and bring expertise in both cloud computing and machine learning. Throughout my professional journey, I've navigated the intricacies of software development, honing my skills in Python and leveraging AWS for robust backend solutions. My enthusiasm extends to exploring innovative applications in machine learning. Let's connect to discuss tech trends, potential collaborations, or insights in the ever-evolving world of software development!
        </p>
        <a href="https://drive.google.com/file/d/1R7MvMi9ce5JwWwRSrGvLmQtHakLzNcvF/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
