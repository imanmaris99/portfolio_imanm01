import React from 'react';

function ProjectCard({ src, link, h3, p, socialLinks }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <span className='social-links'>
        {socialLinks.map((social, index) => (
            <a key={index} href={social.href} target='_blank'>
              <img src={social.icon} alt={`${social.name} icon`} />
            </a>
            ))}
      </span>
    </a>
  );
}

export default ProjectCard;