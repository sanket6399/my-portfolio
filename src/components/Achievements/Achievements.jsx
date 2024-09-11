import React from "react";
import styles from "./Achievements.module.css";
import education from "../../data/achievements.json";

export const Achievements = () => {
  return <section className={styles.container} id = "achievements">
    <h2 className={styles.title}>Achievements</h2>
      <div className={styles.content}>
      <ul className={styles.education}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.educationItem}>
                <div className={styles.educationItemDetails}>
                  <p>{`${educationItem.role}`}</p>
                  <p>{`${educationItem.Date}`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

  </section>;
};