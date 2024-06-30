import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import html from '../../assets/html.png';
import react from '../../assets/react.png';
import flask from '../../assets/flask.svg';
import js from '../../assets/js.png';
import python from '../../assets/python.png';
import poetry from '../../assets/poetry.svg';
import css from '../../assets/css.svg';
import railway from '../../assets/railway.png';
import vercel from '../../assets/vercel.png';
import mysql from '../../assets/mysql.svg';
import postgresql from '../../assets/postgres.svg';
import git from '../../assets/git.png';
import postman from '../../assets/postman.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/themeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList 
          h3="Programming Languages"
          skills={[
            { src: js, skill: 'JAVASCRIPT' },
            { src: python, skill: 'PYTHON' },
          ]}
          link="https://example.com/programming-languages"
        />
        <SkillList 
          h3="Front End Frameworks"
          skills={[
            { src: html, skill: 'HTML' },
            { src: css, skill: 'CSS' },
            { src: react, skill: 'REACT' },
          ]}
          link="https://example.com/programming-languages"
        />
        <SkillList 
          h3="Back End Frameworks"
          skills={[
            { src: flask, skill: 'FLASK' },
          ]}
          link="https://example.com/programming-languages"
        />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList 
          h3="Dependency Management"
          skills={[
            { src: poetry, skill: 'POETRY' },
          ]}
          link="https://example.com/programming-languages"
        />
        <SkillList 
          h3="Database Management"
          skills={[
            { src: mysql, skill: 'MYSQL' },
            { src: postgresql, skill: 'POSTGRESQL' },
          ]}
          link="https://example.com/programming-languages"
        />
        <SkillList 
          h3="VersionControl System"
          skills={[
            { src: git, skill: 'GIT' },
          ]}
          link="https://example.com/programming-languages"
        />
      </div>
      <hr /> 
      <div className={styles.skillList}>
        <SkillList 
          h3="Software DevelopmentTool"
          skills={[
            { src: postman, skill: 'POSTMAN' },
          ]}
          link="https://example.com/programming-languages"
        />
        <SkillList 
          h3="Cloud Services"
          skills={[
            { src: railway, skill: 'RAILWAY' },
            { src: vercel, skill: 'VERCEL' },
          ]}
          link="https://example.com/programming-languages"
        />
      </div>
      <hr /> 

    </section>
  );
}

export default Skills;