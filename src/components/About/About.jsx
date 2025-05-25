import React from "react";
import styles from "./About.module.css";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with a strong focus on building responsive, user-friendly,
                 and performance-optimized web applications. I have hands-on experience with modern frontend
                  technologies including React.js, Redux Toolkit, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I also have experience developing efficient and scalable backend systems and RESTful APIs.
               I'm proficient with the MERN stack (MongoDB, Express.js, React.js, Node.js) and have worked 
               on end-to-end application development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
