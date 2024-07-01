import styles from './ExperiencesStyles.module.css';
import projectOne from '../../assets/kebon-agung.png';
import projectTwo from '../../assets/meiwa-mold.png';
import projectThree from '../../assets/mitsuba.png';
import projectFour from '../../assets/gs-battery.png';


import ExperienceCard from '../../common/ExperienceCard';

function Experiences() {
  return (
    <section id='experiences' className={styles.container}>
        <h1 className='sectionTitle'>Experiences</h1>
        <div className={styles.projectsContainer}>
          <ExperienceCard
            src={projectOne}
            link="http://www.pgtrangkil.com/"
            h3="PT.Kebon Agung-Trangkil Plant"
            h4="Boiler Operator"
            p="April 2023 - May 2023"
          />
          <hr />
          <ExperienceCard
            src={projectTwo}
            link="https://meiwa-m.co.id/"
            h3="PT.Meiwa Mold Indonesia"
            h4="Product Engineering"
            p="January 2019 - January 2023"
          />
          <hr />
          <ExperienceCard
            src={projectThree}
            link="https://github.com/imanmaris99/developprogramdonasi_BE2024"
            h3="PT.Mitsuba Indonesia"
            h4="Product Quality Control"
            p="Agustus 2017 - September 2018"            />
          <hr />
          <ExperienceCard
            src={projectFour}
            link="https://www.gs.astra.co.id/"
            h3="PT.GS Battery-Semarang Plant"
            h4="Assemblly"
            p="January 2016 - May 2016"            />
          <hr />            
        </div>

    </section>
  )
}

export default Experiences