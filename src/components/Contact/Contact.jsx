import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:srj00999@gmail.com" target="_blank">srj00999@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/srj00999/" target="_blank">
            linkedin.com/in/srj00999
          </a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/srj00999" target="_blank">github.com/srj00999</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
