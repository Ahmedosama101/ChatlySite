import React from 'react';
import './header.css';
import blob from '../../assets/blob.svg'

const Header = () => {
  return (
    <div className='tech__header section__padding' id='home'>
      <div className='tech__header-content'>
        <h1 className='gradient__text'> Customer support based on the AI Technology </h1> 
        <p>Powerfull natural language proccessing capabilities, that can undersatnd and respond to customers.</p>
        <div className='tech__header-content__input'>         
          {/*<input type="email" placeholder='Your Email Address' />*/}
          <button type='button' id='get'>Get Started</button>
          <button type='button' id='demo'>Book a Demo</button>
        </div>      
      </div>
      <div className='tech__header-image'>
          <img src={blob} alt='blob'/>
      </div>

    </div>
  )
}

export default Header
