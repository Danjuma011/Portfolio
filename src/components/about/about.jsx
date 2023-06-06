import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

      <div className="about__content">
        {/* <div className='about__cards'>
          <article className='about__card'>
            <BsAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>worldwide countries</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>over 50 completed</small>
          </article>
        </div> */}

        <p>
            I've been working in the industry for 2 years and have experience working on a range of projects, from small business websites to large e-commerce platforms. My technical skills include HTML, CSS, JavaScript, and I'm proficient in React, which I've used extensively in previous projects.

            I also have a background in design, which helps me create user-friendly and visually appealing interfaces. When it comes to problem-solving, I'm a methodical thinker and enjoy working through complex issues to find a solution. I've also worked in team environments and enjoy collaborating with other developers, designers, and stakeholders.

            I'm passionate about learning and staying up to date with industry trends, which has helped me stay ahead of the curve in terms of new technologies and techniques. Finally, I'm a strong communicator and enjoy working with non-technical stakeholders to ensure that their needs are met and their expectations are exceeded."
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}
export default about
