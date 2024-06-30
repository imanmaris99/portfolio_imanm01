import styles from './ExperiencesStyles.module.css';
import projectOne from '../../assets/number1.png';
import projectTwo from '../../assets/number2.png';
import projectThree from '../../assets/number3.png';

import ExperienceCard from '../../common/ExperienceCard';

function Experiences() {
  return (
    <section id='experiences' className={styles.container}>
        <h1 className='sectionTitle'>Experiences</h1>
        <div className={styles.projectsContainer}>
            <ExperienceCard
            src={projectOne}
            link="https://github.com/imanmaris99/developprogramdonasi_BE2024"
            h3="Program Donasi BE Dev."
            p="About it"
            />
            
            <ExperienceCard
            src={projectTwo}
            link="https://github.com/imanmaris99/developprogramdonasi_BE2024"
            h3="Herbal Shop FE Dev."
            p="About it"
            />

            <ExperienceCard
            src={projectThree}
            link="https://github.com/imanmaris99/surface-treatment-Iman-maris"
            h3="Surface Treatment FE Dev."
            p="About it"
            />
        </div>

    </section>
  )
}

export default Experiences