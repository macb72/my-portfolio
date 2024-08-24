import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is loaded
import ScrollProgressBar from '../Components/ScrollProgressBar';

const Navbar = ({ isVisible }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down from the top
      if (window.scrollY > 50) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}
      initial={{ y: -100 }}
      animate={{ y: isNavbarVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <a className="navbar-brand" href={isVisible ? "#home" : "#"}>Mohd Arfat</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#technology">Technologies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <ScrollProgressBar />
    </motion.nav>
  );
};

export default Navbar;
