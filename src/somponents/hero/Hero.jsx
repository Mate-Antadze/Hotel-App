import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'


function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container">

        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>Discover <br />
              most suitable <br /> property</h1>
          </div>
          <div className="flexColStart hero-dos">
            <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
            <span className='secondaryText'>Forget all difficulites in finding a residence for you</span>
          </div>

          <div className="search-bar flexCenter">
            <img src="./current-location-regular-24.png" alt="locationIcon" sizes='25' />
            <input type="text" />
            <button className='button'>Search</button>
          </div>


          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp className='Htext' start={6999} end={9000} duration={4} />
                <span className='secondaryText orangeC'>+</span>
              </span>
                <span>Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp className='Htext' start={950} end={2000} duration={4} />
                <span className='secondaryText orangeC'>+</span>
              </span>
                <span>Happy Costumers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp className='Htext' end={28} duration={4} />
                <span className='secondaryText orangeC'>+</span>
              </span>
                <span>Award Winning</span>
            </div>
          </div>
        </div>

        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero