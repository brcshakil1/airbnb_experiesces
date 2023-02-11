import React from 'react';
import './Hero.css';
import hero_img from '../.././images/hero.png'

const Hero = () => {
    return (
        <div className='hero section-padding'>
            <img className='hero_img' src={hero_img} alt="img" />
           <div className="hero-section_content">
                <h3 className='hero_heading'>Online Experiences</h3>
                <p className='hero_content'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
           </div>
        </div>
    );
};

export default Hero;