import React from 'react'
// import CV from '../../assets/Okunade Sherif Damilare(web dev).pdf'
import CV from "../../assets/Danjuma kuti resume.pdf"
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'> Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
