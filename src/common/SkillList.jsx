function SkillList({ src, skills, p, link, h3 }) {
    return (
        <span href={link} target="_blank">
            <h3>{h3}</h3>
            <ul>
                {skills.map((skill, index) => (
                <p key={index}>
                    <img src={skill.src} alt={skill.skill}/>
                    {skill.skill}
                </p>
                ))}
            </ul>
        </span>
    );
  }
  
  export default SkillList;