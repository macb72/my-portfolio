import React from 'react';
import './AboutStyle.css';

function About() {
  return (
    <div className="about-page">
      <div className="photo-container">
        <img className="profile-photo" src='/ArfatDP_2_no_bg.png' alt='profile' />
      </div>
      <div className="about-details">
        <h1>About Me</h1>
        <p> I am an experienced Software Development Engineer with 4+ years specializing in frontend web
          development using ReactJS, JavaScript, and CSS. I'm passionate about building intuitive,
          user-friendly interfaces and dedicated to delivering high-quality, efficient code.  </p>
        <p>
          My goal is to build user-friendly interfaces and solve complex problems through technology. Feel free to explore my work and get in touch if you have any questions.
        </p>
      </div>
    </div>
  );
}

export default About;
