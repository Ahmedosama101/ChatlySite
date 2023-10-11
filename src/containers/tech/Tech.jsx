import React from 'react';
import './tech.css';
import Feature from '../../components/feature/Feature';
import reg from '../../assets/reg.png'
import set from '../../assets/set.png'
import publish from '../../assets/publish.png'

const Tech = () => {
  return (
    <div className='tech__whatgpt3 section__margin' id='wgpt3'>
      <div className='tech__whatgpt3-feature'>
        <Feature  title="What is CHATLY" text="Welcome to Chatly, where innovative technology meets exceptional customer support. Our journey began with a vision to transform the way businesses interact with their customers. We believe that AI has the power to revolutionize customer support, making it more efficient, personalized, and convenient than ever before."/>
      </div>
      <div className='tech__whatgpt3-heading'>
      <h1 className="gradient__text">integrate the AI support with 1 line of code</h1>
      {/*<p>Explore the Library</p>*/}
      </div>
      <div className="tech__whatgpt3-container">
      <div className=''> 
      <img src={reg} alt='Regerstration'/>
      <Feature title="Regerstration" text="Create you company accout to start using all features" />
      </div>
      <div> 
      <img src={set} alt='Set'/>
      <Feature title="Set up the AI" text="Choose your branding colors, tone of voice and more" />
      </div>
      <div>
      <img src={publish} alt='Publish'/>
      <Feature title="Publish the AI bot" text="Start using the bot on your website with line of code" />
      </div>
    </div>
    </div>
  )
}

export default Tech
