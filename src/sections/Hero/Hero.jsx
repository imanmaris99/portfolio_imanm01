
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/imanpict1.png.jpg'
// import Typed from 'react-typed'; // Impor pustaka react-typed
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Iman Maris CV.pdf';
import { useTheme } from '../../common/themeContext';

function Hero() {

    const {theme} = useTheme();
    const emailIcon = theme === 'light'? emailLight:emailDark;
    const githubIcon = theme === 'light'? githubLight:githubDark;
    const linkedinIcon = theme === 'light'? linkedinLight:linkedinDark;


    return (
        <section id="hero" className={styles.container}>
            
            <div className={styles.colorModeContainer}>
                <img 
                    className={styles.hero}
                    src={heroImg} 
                    alt="profile picture of imanmaris"
                />
            </div>
            <div className={styles.info}>
                <h1>
                    <span className={styles.slider}>
                        <ul className={styles.swipeUp}>
                            <li className="text-blue">Hallo</li>
                            <li className="text-yellow-dark">Wellcome</li>
                            <li className="text-yellow-dark">to</li>
                            <li className="text-green-accent">My Portfolio</li>
                        </ul>
                    </span>
                </h1>
                <h2>I'm Iman Maris</h2>
                <h3>
                    Junior Backend Engineer | Junior Fullstack Developer
                </h3>
                <p className={styles.description}>
                    I have experience in optimizing production processes in manufacturing and 
                    am now learning about software engineering. 
                </p>
                <span>
                    <a href='https://yahoo.com/' target='_blank'>
                        <img src={emailIcon} alt='Email icon'/>
                    </a> 
                    <a href='https://github.com/' target='_blank'>
                        <img src={githubIcon} alt='Github icon'/>
                    </a>  
                    <a href='https://linkedin.com/' target='_blank'>
                        <img src={linkedinIcon} alt='Linkedin icon'/>
                    </a>    
                </span>
                <a href={CV} download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;