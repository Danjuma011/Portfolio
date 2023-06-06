import React from 'react';
import "./portfolio.css";
import {Link} from 'react-router-dom';
import vividioz from '../../Projects/portfolio_img/vivioz.PNG';
import astrohome from '../../assets/Astrohome.png';
import university from '../../Projects/portfolio_img/alicia.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={vividioz} alt="" />
          </div>
          <h3>Vividioz</h3>
          <div className='portfolio__item-cta flex justify-around'>
          <a href="https://github.com/rash1234567/NEWVIVIDIO" className='btn' target='_blank'>Github</a>
          <a href="https://vividioz.onrender.com/" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={astrohome} alt="" />
          </div>
          <h3>A'pple</h3>
          <div className='portfolio__item-cta flex justify-around'>
            <a href="https://github.com/Danjuma011/AstroHome" className='btn' target='_blank'>Github</a>
            <a href="https://astrohome.netlify.app" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={university} alt="" />
          </div>
          <h3>Alicia University</h3>
          <div className='portfolio__item-cta flex justify-around'>
          <a href="https://github.com/Lawdshev/Alicia-University" className='btn' target='_blank'>Github</a>
          <a href="https://aliciauniversity.netlify.app" className='btn btn-primary' target='_blank'>Live
           Demo</a>
          </div>
        </article>
      </div>
      <div className="w-full flex mt-2"> <Link to='/projects' className='mx-auto text-xl md:text-2xl'>See more frontend projects <i class="fa-solid fa-right-long"></i></Link></div>
      <div className='container portfolio__container'>
        {/* <div className="w-full flex mt-2"> <Link to='/backend-projects' className='mx-auto text-xl md:text-2xl'>See more backend projects <i class="fa-solid fa-right-long"></i></Link></div> */}
      </div>
    </section>
  )
}
export default portfolio
