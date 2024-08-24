import React, { useEffect, useState } from 'react';
import '../Styles/ScrollProgressBar.css'; // Create this CSS file for styling

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTotal = scrollHeight - clientHeight;
      const scrolled = (scrollTop / scrollTotal) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial value
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div
        className="scroll-progress-bar-fill"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
