import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Technology.css'; //

const technologies = [
  { src: '/mongodb.png', alt: 'MongoDB', url: 'https://www.mongodb.com', name: 'MongoDB' },
  { src: '/express.png', alt: 'Express.js', url: 'https://expressjs.com', name: 'Express.js' },
  { src: '/react12.svg', alt: 'React.JS', url: 'https://reactjs.org', name: 'React.JS' },
  { src: '/nodejs2.svg', alt: 'Node.js', url: 'https://nodejs.org', name: 'Node.js' }
];

export default function Technology() {
  return (
    <div className='container mt-5'>
      <h3 className='text-center mb-4'>Technologies</h3>
      <div className='row'>
        {technologies.map((tech, index) => (
          <div className='col-md-3 col-sm-6 mb-4' key={index}>
            <div className='card-container'>
              <a href={tech.url} target='_blank' rel='noopener noreferrer' className='technology-card'>
                <div className='card'>
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className='card-img-top technology-image'
                  />
                </div>
              </a>
              <div className='card-name'>
                {tech.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
