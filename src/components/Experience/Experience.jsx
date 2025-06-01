import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import experience from "../../data/experience.json";
import OrgImage1 from "../../assets/experience/webixy.png";
import OrgImage2 from "../../assets/experience/Lisco.png";

import removeMiddleSpaces from "../../utils";

const OrgImages = [OrgImage1, OrgImage2 ];

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img
                  src={`./assets/skills/${removeMiddleSpaces(skill.title)}.png`}
                  alt={skill.title}
                ></img>
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.experience}>
          {experience.map((experienceItem, id) => (
            <li key={id} className={styles.experienceItem}>
              <img
                src={OrgImages[id]}
                alt={`${experienceItem.organisation} Logo`}
              />
              <div className={styles.experienceItemDetails}>
                <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                <ul>
                  {experienceItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
