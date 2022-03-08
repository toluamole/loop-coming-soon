import React from 'react';

import loopIcon from './Vector.svg';
import loopIconText from './Loop.svg'
import vector from './Images/Vector.svg';
import facebook from './Images/facebook.svg';
import instagram from './Images/instagram.svg';
import linkedin from './Images/linkedin.svg';
import tiktok from './Images/tik-tok.svg';
import playstore from './Images/playstore.svg';
import applestore from './Images/applestore.svg';
import share from './Images/share.svg'

import 'animate.css';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-header-nav '>
         <div className="logo-box">
          <img src={loopIcon} className="App-logo" alt="logo" />
          <img src={loopIconText} className="App-logo-text animate__animated animate__fadeInLeft animate__delay-2s " alt="" />
         </div>
        </nav>
        <section className='App-header-hero-main'>
          <img src={vector} className='App-header-image animate__animated animate__fadeInUp animate__fast animate__delay-3s' alt=''/>
          <p className='App-header-paragraph animate__animated animate__fadeInUp animate__fast animate__delay-3s'>
            Changing the way you communicate and make things better with the brands you love. At Loop we are trying to create a more sustainable world in which products and services can be improved by the power of your feedback and you get rewarded for providing it.
          </p>
          <h2 className='App-header-primary-heading animate__animated animate__fadeInUp animate__fast animate__delay-3s'>COMING SOON</h2>
          <h5 className='App-header-primary-heading-sub animate__animated animate__fadeInUp animate__fast animate__delay-3s' >Q2.2022</h5>
        </section>
        <section className='footer animate__animated animate__fadeInUp animate__fast animate__delay-4s'>
          <div className='footer-left'>
            <p className='footer-left-text'>Connect with us:</p>
            <div className='footer-left-icons'>
              <a href='#'><img src={facebook} alt='facebook logo'/></a>
              <a href='#'><img src={instagram} alt='instagram logo'/></a>
              <a href='#'><img src={linkedin} alt='linkedin logo'/></a>
              <a href='#'><img src={tiktok} alt=' tiktok logo'/></a>
              <a href='#' className='footer-share-mobile-btn'><img src={share} alt=' tiktok logo'/></a>
              <a href='#' className='footer-share-btn'><span>Share</span></a>
            </div>
          </div>
          <div className='footer-right'>
            <p className='footer-right-text'>Lauching soon on:</p>
            <div className='footer-right-icons'>
              <a href='#'><img src={playstore} alt='playstore logo'/></a> 
              <a href='#'><img src={applestore} alt='applestore logo'/></a>
            </div>
          </div>
        </section>
      </header>
   </div>
  );
}

export default App;
