import React from 'react'
import "./services.css"
import {BsCheckAll} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article  className='service'>
          <div className='service__head'>
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Using React to create reusable components</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Building user interfaces from scratch</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Updating User interfaces</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Fetching data and APIs.</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Backend Engineering</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Using Expressjs to create server</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Writing reusabe APIs with node and express</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Communication with mongodb using mongoose</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Tutorials</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Teaching the basics of web development</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>Fundamentals of Javascript</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>DOM manipulation</p>
            </li>
            <li>
              <BsCheckAll className='service__list-icon'/>
              <p>ES6 and Reactjs</p>
            </li>
          </ul>
        </article>
        {/*END OF Content Creation*/}
      </div>
    </section>
  )
}
export default services
