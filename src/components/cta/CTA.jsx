import React from 'react';
import './cta.css';
import qoute from '../../assets/quoute.svg';
import { AiFillStar } from 'react-icons/ai';  
import sharkaz from '../../assets/sharkaz.png';


const CTA = () => {
  return (
    <div className="tech__cta">
    <div className="tech__cta-content">
    <div className="tech__cta-image">
      <img src={qoute} alt="qoute" />
    </div>
    <div className='tech__cta-hr'> 
      <hr/>
    </div>
    <div className='tech_cta-star'> <AiFillStar color={"#ffc107"} size={25}/>
    <AiFillStar color={"#ffc107"} size={25}/>
    <AiFillStar color={"#ffc107"} size={25}/>
    <AiFillStar color={"#ffc107"} size={25}/>
    <AiFillStar color={"#ffc107"} size={25}/>
    <p>5.0</p>
    </div>
      <h3>"CHATLY came at the right time when started to scale our agency.
        This tool is saving us a lot of time and we are more efficient than ever. No more back and forth and now we can scale our operations easier than ever."</h3>

    <div className="tech__cta-image-sharkaz">
      <h4>Martínez Suarez</h4>
      <img src={sharkaz} alt="sharkaz" />
    </div>
    </div>
    {/*<div className="tech__cta-btn">
      <button type="button">Get Started</button>
  </div>*/}
  </div>
  )
}

export default CTA
