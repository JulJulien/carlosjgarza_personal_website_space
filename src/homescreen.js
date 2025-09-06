import './styles/homescreen.css';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import React, { useRef, useState, useEffect } from 'react';
import { HiMail } from "react-icons/hi";


function Title(){
  return (
    <div className="homepage-name">
      <h1>Carlos Julien Garza</h1>
      <h2>Data Science | Software | Art</h2>
      <div className="icon-group">
        <button className="header-icon-2">
          <HiMail />
        </button>
      </div>
    </div>
  )
}

function ScrollIndicator() {
  return (
    <div className="scroll-indicator">
      <div className="arrow"></div>
    </div>
  )
}



function Homescreen() {
  const videoRef = useRef(null);
  const [buttonDiameter, setButtonDiameter] = useState(0);
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    function updateButtonSize() {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const minDim = Math.min(rect.width, rect.height);
        setButtonDiameter(minDim * 0.55); // 55% of the smaller dimension
      }
    }
    updateButtonSize();
    window.addEventListener('resize', updateButtonSize);
    return () => window.removeEventListener('resize', updateButtonSize);
  }, []);

  useEffect(() => {
    // Check for theme changes
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      setCurrentTheme(theme);
    };

    // Check initial theme
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div className="homepage-container">
        <Title />
        <ScrollIndicator />
        <div style={{position: 'relative', width: '100%', height: '100vh'}}>
          <video 
            className="homepage-video"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
            ref={videoRef}
            key={currentTheme} // Force re-render when theme changes
          >
            <source 
              src={currentTheme === 'light' 
                ? require("./assets/videos/saturnLightmode.mp4") 
                : require("./assets/videos/saturn.mp4")
              } 
              type="video/mp4" 
            />
          </video>         
        </div>
      </div>
    </>
  )
};

export default Homescreen;
