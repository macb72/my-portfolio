import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WorkExp() {
  useEffect(() => {
    // Initialize Bootstrap Carousel manually if needed
    const carousel = document.querySelector('#workExpCarousel');
    new bootstrap.Carousel(carousel, {
      interval: 5000, // Time in milliseconds for auto-sliding
    });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Work Experience</h2>
      <div id="workExpCarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex flex-column align-items-center p-4">
              <h3>Jio Platforms Limited (JPL), Navi Mumbai, Maharashtra, India</h3>
              <h4>Deputy Manager | Senior SDE</h4>
              <p>December 2023 - Present</p>
              <ul>
                <li>Lead UI/UX and feature development initiatives.</li>
                <li>Identify and resolve critical bugs/issues.</li>
                <li>Collaborate with Product Managers and UI/UX teams.</li>
                <li>Conduct PR reviews and assist juniors with work-related issues.</li>
                <li>Manage code merging, build queueing, and deployment to production.</li>
              </ul>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center p-4">
              <h3>Jio Platforms Limited (JPL), Navi Mumbai, Maharashtra, India</h3>
              <h4>Assistant Manager | SDE</h4>
              <p>September 2020 - December 2023</p>
              <ul>
                <li>Developed user interfaces based on Figma design files.</li>
                <li>Collaborated with cross-functional teams to integrate new systems.</li>
                <li>Ensured seamless deployment of applications and maintained high code quality.</li>
              </ul>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column align-items-center p-4">
              <h3>Jio Platforms Limited (JPL), Navi Mumbai, Maharashtra, India</h3>
              <h4>Graduate Engineering Trainee</h4>
              <p>August 2019 - August 2020</p>
              <ul>
                <li>Assisted in front-end development projects and gained experience with JavaScript frameworks.</li>
                <li>Participated in a major project as QA, identifying more than 4 blocker and over 20 critical level issues successfully.</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#workExpCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#workExpCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default WorkExp;
