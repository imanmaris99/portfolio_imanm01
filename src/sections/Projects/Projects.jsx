import styles from './ProjectStyles.module.css';
import projectOne from '../../assets/number1.png';
import projectTwo from '../../assets/number2.png';
import projectThree from '../../assets/sfs-light.png';
import projectThreee from '../../assets/sfs-dark.png';
import rempah from '../../assets/daun.svg';

import wheelLight from '../../assets/wheel.png';
import wheelDark from '../../assets/wheel2.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import postman from '../../assets/postman.svg';
import ProjectCard from '../../common/ProjectCard';
import { useTheme } from '../../common/themeContext';

function Projects() {
  const {theme} = useTheme();
  const githubIcon = theme === 'light'? githubLight:githubDark;
  const wheelIcon = theme === 'light'? wheelLight:wheelDark;

  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <h2>RevoU-Final Project</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.colorModeContainer}>
          <img 
            className={styles.project}
            src={projectTwo} 
            alt="profile picture of imanmaris"
          />
          <img 
            className={styles.project}
            src={projectOne} 
            alt="profile picture of imanmaris"
          />
        </div>

        <div className={styles.info}>
          <h2>RevoU-Final Project</h2>
          <h3>Backend Developer</h3>
          <p className={styles.description}>
          Program Donasi campaign Backend Developer Program Donasi is 
          a backend application built using Flask to help manage users, 
          contact_us, program donasi, donatur and donasi in support of 
          the DevelopProgramDonasi campaign.          
          </p>
          <p className={styles.description}>
            Fiture : authorization (barier token)
          </p>
          <p className={styles.description}>
            Tools : python, flask, poetry, mysql, vercel, aiven, postman
          </p>
          <span>
            <a href='https://github.com/imanmaris99/developprogramdonasi_BE2024' target='_blank'>
              <img src={githubIcon} alt='Github icon'/>
              <p>Github Repo</p>
            </a>  
            <a href='https://documenter.getpostman.com/view/32137902/2sA3QqgspG#58a3ef3b-320c-4998-919b-2c29ea795557' target='_blank'>
              <img src={postman} alt='Postman icon'/>
              <p>API Document</p>
            </a>    
          </span>
        </div>
      </div>

      <h2>RevoU-Final Project</h2>
      <div className={styles.projectsContainer2}>
        <div className={styles.colorModeContainer}>
          <img 
            className={styles.project}
            src={projectTwo} 
            alt="profile picture of imanmaris"
          />
          <img 
            className={styles.project}
            src={projectOne} 
            alt="profile picture of imanmaris"
          />
        </div>

        <div className={styles.info2}>
          <h2>Self Project</h2>
          <h3>Frontend Developer</h3>
          <p className={styles.description}>
            Empon’s Shop Program Frontend Dev.
            One of my personal projects, Empon’s Shop, is a frontend application that showcases my ability to create intuitive and engaging user interfaces. 
            (still under development, still static and orders still via Tokopedia.)
          </p>
          <p className={styles.description}>
            Fiture : responsive, hamburger menu
          </p>
          <p className={styles.description}>
            Tools : html, css, javascript
          </p>
          <span>
            <a href='https://github.com/marisiman/website-toko-herbal-amimum' target='_blank'>
              <img src={githubIcon} alt='Github icon'/>
              <p>Github Repo</p>
            </a>  
            <a href='https://imanmaris.site/' target='_blank'>
              <img src={rempah} alt='Custom domain icon'/>
              <p>URL Deployment</p>
            </a>    
          </span>
        </div>
      </div>

      <h2>RevoU-Final Project</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.colorModeContainer}>
          <img 
            className={styles.project}
            src={projectThree} 
            alt="project-3 dekstop light"
          />
          <img 
            className={styles.project}
            src={projectThreee} 
            alt="project-3 mobile dark"
          />
        </div>

        <div className={styles.info}>
          <h2>Self Project</h2>
          <h3>Frontend Developer</h3>
          <p className={styles.description}>
          Surface plating solution (S.P.S shop) is 
          the content that discusses material final processing services 
          in various ways, especially special treatment of 
          materials whose main ingredient is iron. 
          The aim that the resulting material will be strong and corrosion resistant.
          </p>
          <p className={styles.description}>
            Fiture : darkmode, responsive, hamburger menu
          </p>
          <p className={styles.description}>
            Tools : html, css, javascript
          </p>
          <span>
            <a href='https://github.com/imanmaris99/surface-treatment-Iman-maris' target='_blank'>
              <img src={githubIcon} alt='Github icon'/>
              <p>Github Repo</p>
            </a>  
            <a href='https://milestone1.imanmaris.tech/' target='_blank'>
            <img src={wheelIcon} alt='Custom domain icon'/>
            <p>URL Deployment</p>
            </a>    
          </span>
        </div>
      </div>

    </section>
  )
}

export default Projects;