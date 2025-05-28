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
          className={`homepage-button ${currentTab === 'Resume' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('Resume')}
        >
          Resume
        </button>
        <button 
          className={`homepage-button ${currentTab === 'Projects' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('Projects')}
        >
          Projects
        </button>
        <button 
          className={`homepage-button ${currentTab === 'Designs' ? 'selected' : ''}`}
          onClick={() => setCurrentTab('Designs')}
        >
          Designs
        </button>
        <div className="icon-group">
          <button className="header-icon">
            <HiMail />
          </button>
          <button className="header-icon">
            <FaLinkedin />
          </button>
          <button className="header-icon">
            <FaGithub />
          </button>
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