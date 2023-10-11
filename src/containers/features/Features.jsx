import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Minimize the costs and support your clients better',
    text: 'Smart Support, Smarter Savings: Unleash the power of AI to streamline customer interactions. Experience fewer overheads and greater satisfaction – the best of both worlds.',
  },
  {
    title: 'Win more clients in the long term business',
    text: 'Client Loyalty Redefined: From first contact to lasting partnership, Chatly drives customer loyalty. Win over clients today for sustained business success tomorrow.',
  },
  {
    title: 'Grow your customer base easier than before',
    text: "Expand Beyond Limits: Watch your customer base soar with Chatly's AI-driven customer support. Effortlessly connect, engage, and convert prospects into delighted clients.",
  },  
];
const Features = () => {
  return (
    <div className="tech__features section__padding" id="features">
    <div className="tech__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/*<p>Request Early Access to Get Started</p>*/}
    </div>
    <div className="tech__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features
