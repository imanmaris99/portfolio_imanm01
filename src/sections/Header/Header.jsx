import styles from './HeaderStyles.module.css';
import heroImg from '../../assets/imanmaris.png'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Iman Maris CV.pdf';
import { useTheme } from '../../common/themeContext';


function Header() {

    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light'? sun:moon;

    return (
        <section id='header' className={styles.container}>
            <nav>
                <img 
                    className={styles.colorMode}
                    src={themeIcon} 
                    alt="dark-mode icon"
                    onClick={toggleTheme}
                />
            </nav>
        </section>

    )
}

export default Header