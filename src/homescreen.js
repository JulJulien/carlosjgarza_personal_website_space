import './homescreen.css';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import React, { useRef, useState, useEffect } from 'react';

function Header(){
  return (
    <div className="homepage-container-header"> 
      <div className="homepage-header">
        <button className="homepage-button">About</button>
        <button className="homepage-button">Resume</button>
        <button className="homepage-button">Projects</button>
        <button className="homepage-button">Designs</button>
      </div>
    </div>
  )
}

function Title(){
  return (
    <div className="homepage-name">
      <h1>Carlos Julien Garza</h1>
      <h2>Software Engineer | Data Science | Design</h2>
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

function AboutMe(){
  return (
    <div className="about-me-container">
      <img 
        src="/images/profile.jpg" 
        alt="Profile" 
        className="about-me-profile-image"
      />
      <div className="about-me-container-description">
        <p>Hello! I'm Carlos Julien Garza, a software engineer with a passion for building products that help people live better lives. I love working on data science, design, and innovative technology projects.</p>
      </div>
    </div>
  )
}

function Homescreen() {
  const videoRef = useRef(null);
  const [buttonDiameter, setButtonDiameter] = useState(0);

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


  return (
    <>
      <div className="homepage-container">
        <Header />
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
          >
            <source src="/videos/saturn.mp4" type="video/mp4" />
          </video>         
        </div>
      </div>
      <AboutMe />

    </>
  )
};

export default Homescreen;
