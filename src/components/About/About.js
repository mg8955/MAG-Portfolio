import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, description2, description3, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>
      <p className='about__desc2'>{description2 && description2}</p>
      <p className='about__desc3'>{description3 && description3}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
