import React from 'react';
import './Recidencies.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import Data from '../../JsonPackages/Data';
import 'swiper/swiper.min.css';

import { SliderSettings } from '../../Common';


function Recidencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
      </div>

      <Swiper {...SliderSettings}>
        <sliderButtons />
        {Data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="r-card flexColCenter">
              <img src={card.image} alt="home" />

              <span className="secondaryText r-price">
                <span style={{ color: 'orange' }}>$</span>
                <span>{card.price}</span>
              </span>

              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Recidencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button flexCenter">
      <button onClick={()=> swiper.slidePrev()}>kgjashkfjhaskjfhaksj</button>
      <button onClick={()=> swiper.slideNext()}>gSKJBSDJDSJ</button>
    </div>
  );
};
