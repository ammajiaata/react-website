import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import vid from '../videos/vid1.mp4'
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src = {vid} autoPlay loop muted />
            <h1>AMMA JI AATA  </h1>
            <p>   DELICIOUS AND NUTRITIOUS  </p>
            <p>For You And Your Family</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle ='btn--outline'
                buttonSize='btn--large'>
                   <a href="tel:9810058125"   >Call Us Now</a> 
                </Button>
                <Button className='btns' buttonStyle ='btn--primary'
                buttonSize='btn--large'>
                    Try us at these Outlets
                </Button>
                <img src = '../images/x'
                alt=''></img>
                
                
                
            </div>
        </div>
    );
}

export default HeroSection
