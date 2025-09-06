import './styles/navbar.css';
import { Container } from 'react-bootstrap';
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isLight = savedTheme === 'light';
      setIsLightMode(isLight);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Default to dark mode
      setIsLightMode(false);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isLightMode ? 'dark' : 'light';
    setIsLightMode(!isLightMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="theme-switch-container">
      <input 
        type="checkbox" 
        id="theme-toggle" 
        className="theme-toggle-checkbox"
        checked={isLightMode}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="theme-toggle-label">
        <span className="theme-toggle-slider"></span>
      </label>
    </div>
  );
}

function Header({ currentTab, setCurrentTab }) {
  return (
    <div className="homepage-container-header"> 
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <button 
          className={`homepage-button ${currentTab === 'About' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('About')}
        >
          About
        </button>
        <button 
          className={`homepage-button ${currentTab === 'Portfolio' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('Portfolio')}
        >
          Portfolio
        </button>
        <button 
          className={`homepage-button ${currentTab === 'Experience' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('Experience')}
        >
          Experience
        </button>
        <button 
          className={`homepage-button ${currentTab === 'Gallery' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('Gallery')}
        >
          Gallery
        </button>
        <div className="icon-group">
          <a className="header-icon" href="mailto:cjulgarza@gmail.com" title="Email">
            <HiMail />
          </a>
          <a className="header-icon" href="https://www.linkedin.com/in/carlosj-garza/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a className="header-icon" href="https://github.com/JulJulien?tab=repositories" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
        </div>
    </div>
  )
}

function Navbar({ currentTab, setCurrentTab }) {
  return (
    <Container>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </Container>
  )
}

export default Navbar;