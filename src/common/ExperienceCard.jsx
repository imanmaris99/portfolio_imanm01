import React from 'react'

function ExperienceCard({ src, link, h3, h4, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <h4>{h4}</h4>
      <p>{p}</p>
    </a>
  )
}

export default ExperienceCard