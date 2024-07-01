import styles from './ContactStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import html from '../../assets/html.png';
import css from '../../assets/css.svg';
import SkillCard from '../../common/SkillsCard';
import { useTheme } from '../../common/themeContext';


function Contact() {
  return (
    <section id="aboutme" className={styles.container}>
    <h1 className="sectionTitle">Contact me</h1>
    {/* <div className={styles.skillListContainer}>
      <SkillCard 
        h3="Programming Languages"
        skills={[
          { src: html, skill: 'HTML' },
          { src: css, skill: 'CSS' },
        ]}
        checkMarkIcon={checkMarkIcon}
        link="https://example.com/programming-languages"
      />
    </div> */}
  </section>
  )
}

export default Contact