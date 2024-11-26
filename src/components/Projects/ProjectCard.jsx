import React from "react";
import styles from "./ProjectCard.module.css";
import removeMiddleSpaces from "../../utils";

const ProjectCard = ({ project }) => {
  const { title, description, skills, demo, source } = project;

  return (
    <div className={styles.container}>
      <img
        src={`./assets/projects/${removeMiddleSpaces(title)}.png`}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <span key={id} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Live Site
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
