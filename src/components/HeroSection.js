import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button1 } from './Button1';
import { Button2 } from './Button2';
import './HeroSection.css';

function HeroSection() {
  function shoot(){
      alert("Coming Soon!");
  }
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>The Ninja Hub</h1>
      <p>Embrace yourself. Strive for the BEST.</p>
      <p>Let's support our talented Asians and Mixed Asians artists.</p>
      <div className='hero-btns'>
        <Button2
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Sign Up
        </Button2>
        <Button1
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={shoot}
          to="/"
        >
          Vids <i className='far fa-play-circle' />
        </Button1>
      </div>
    </div>
  );
}

export default HeroSection;
