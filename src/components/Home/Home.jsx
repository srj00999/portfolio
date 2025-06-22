import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suraj</h1>
        <p className={styles.description}>
         "Full-stack developer specializing in React & Node.js with 2+ years of experience building scalable web applications. Passionate about crafting efficient solutions through clean code and modern architectures. Let's connect to discuss how I can contribute to your next project!"
        </p>
        <a href="mailto:srj00999@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Home;
