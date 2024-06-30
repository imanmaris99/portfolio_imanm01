import React from 'react'
import styles from '../sections/Aboutme/AboutmeStyles.module.css';

function SkillCard({ src, skills, p, link, h3, checkMarkIcon }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.skillLink}>
          <h3>{h3}</h3>
          <ul className={styles.skillList}>
            {skills.map((skill, index) => (
              <li key={index} className={styles.skillItem}>
                {/* <img src={checkMarkIcon} alt="Checkmark" className={styles.checkMark} /> */}
                <img src={skill.src} alt={skill.skill} className={styles.skillIcon} />
                {skill.skill}
              </li>
            ))}
          </ul>
        </a>
    );
}

export default SkillCard

