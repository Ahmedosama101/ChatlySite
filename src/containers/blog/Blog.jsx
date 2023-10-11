import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js';

const Blog = () => {
  return (
    <div className="tech__blog section__padding" id="blog">
    <div className="tech__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="tech__blog-container">
      <div className="tech__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Scaling Success: Leveraging AI to Accommodate Growing Customer Demands"/>
      </div>
      <div className="tech__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Separating Fact from Fiction in AI-Driven Customer Support" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Unleashing AI: Transforming Customer Support in the Digital Age" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="How Chatbots Revolutionize Support Interactions" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="A Comprehensive Guide to Integrating AI in Customer Service" />
      </div>
    </div>
  </div>
  )
}

export default Blog
