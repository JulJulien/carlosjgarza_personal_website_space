import './styles/navbar.css';
import { Container } from 'react-bootstrap';
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header({ currentTab, setCurrentTab }) {
  return (
    <div className="homepage-container-header"> 
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
          className={`homepage-button ${currentTab === 'Resume' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('Resume')}
        >
          Resume
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