import React from 'react';
import './styles/aboutme.css';
import { FaCode } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { FaPaintbrush } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLightbulb, FaPuzzlePiece, FaBookOpen } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';

function BlueContainer({ children }) {
  return (
    <div className="blue-container">
      <h1>Welcome to my website!</h1>
      <p>
        I'm Carlos, a software developer and data scientist with a passion for building web apps and analyzing data.
      </p>
      {children}
    </div>
  );
}

function PersonalStorySection() {
  return (
    <div className="personal-story-section">
      <div className="about-me-card">
        <h2>About Me</h2>
        <div className="top-section">
          <div className="profile-image-container">
            <img src={require("./assets/drawings/LeMajor.jpg")} alt="Profile" />
          </div>
          <div className="social-links-container">
            <a href="mailto:cjulgarza@gmail.com" className="social-link">
              <HiMail className="social-icon" />
              <span>gmail</span>
            </a>
            <a href="https://www.linkedin.com/in/carlosj-garza/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin className="social-icon" />
              <span>linkedin</span>
            </a> 
            <a href="https://github.com/JulJulien?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub className="social-icon" />
              <span>github</span>
            </a>
          </div>
        </div>
        <div className="about-paragraphs">
          <p>
            My path into technology started during my undergraduate studies, where I discovered the perfect intersection 
            of creativity and logic that programming offers. What began as curiosity about how websites work evolved 
            into a deep passion for building solutions that make a difference.
          </p>
          <p>
            Through my experience at UTRGV and hands-on projects, I've learned that the best software comes from 
            understanding both the technical challenges and the human needs behind them. Whether I'm analyzing complex 
            datasets or crafting user interfaces, I'm driven by the opportunity to turn ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

function ThreeSections(){
  return (
    <div className="skills-section-wrapper">
      <div className="ThreeSections">
        <div className="DeveloperSection section">
          <div className="icon"><FaCode /></div>
          <div className="title-aboutme">Software</div>
          <div className="description-aboutme">I create software that is useful, creative and architecturally sound.</div>
          <div className="subtitle-aboutme">Languages:</div>
          <div>Python, C#, HTML, CSS, JavaScript, React, SQL, R</div>
          <div className="subtitle-aboutme">Dev Tools:</div>
          <div>GitHub<br/>VS Code<br/>Cursor <br/>Pytorch</div>
        </div>
        <div className="DataScienceSection section">
          <div className="icon"><ImStatsBars /></div>
          <div className="title-aboutme">Data Science</div>
          <div className="description-aboutme">I have practical experience in data science and bioinformatics by working alongside recognized experts in the field.</div>
          <div className="subtitle-aboutme">Skills:</div>
          <div> Machine Learning, Bioinformatics, Research, Database Design, Data Analysis</div>
          <div className="subtitle-aboutme">Tools:</div>
          <div>Python<br/>R<br/>SQL<br/>Jupyter<br/>Pytorch</div>
        </div>
        <div className="ArtSection section">
          <div className="icon"><FaPaintbrush /></div>
          <div className="title-aboutme">Art</div>
          <div className="description-aboutme">In my free time I enjoy creating art. You can see some of my works in the Gallery!</div>
          <div className="subtitle-aboutme">Mediums:</div>
          <div>3D Digital, Pixel, Ink</div>
          <div className="subtitle-aboutme">Tools:</div>
          <div>Aesprite</div>
          <div>Blender</div>
          <div>Pen Lineart</div>
        </div>
      </div>
    </div>
  )
}

function PhilosophySection(){
  return (
    <div className="philosophy-section-wrapper">
      <div className="PhilosophySections">

        <div className="MultidisciplinarySection section">
          <div className="icon"><FaPuzzlePiece /></div>
          <div className="title-aboutme">Multidisciplinary</div>
          <div className="description-aboutme">In this new AI era, it's important to incorprate programming into various speciatlties. Having multiple skills allows you to communicate and  work with more people!</div>
        </div>

        <div className="CreativitySection section">
          <div className="icon"><FaLightbulb /></div>
          <div className="title-aboutme">Creativity</div>
          <div className="description-aboutme">I believe that innovation comes from thinking outside conventional boundaries and approaching problems with fresh perspectives.</div>
        </div>

        <div className="LearningSection section">
          <div className="icon"><FaBookOpen /></div>
          <div className="title-aboutme">Learning</div>
          <div className="description-aboutme">I'm always pushing myself to learn new things. Whether it is art, data, coding, or biology. Exploring your interests and expanding your knowledge leads to oppurtunity!</div>
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p></p>
        <div className="contact-links">
          <a href="mailto:cjulgarza@gmail.com" className="contact-link">
            <HiMail className="contact-icon" />
            <span>cjulgarza@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/carlosj-garza/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin className="contact-icon" />
            <span>www.linkedin.com/in/carlosj-garza</span>
          </a> 
          <a href="https://github.com/JulJulien?tab=repositories" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub className="contact-icon" />
            <span>github.com/JulJulien</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="full-container-aboutme">
      <BlueContainer>
        <ThreeSections />
        <PersonalStorySection />
        <PhilosophySection />
        <ContactSection />
      </BlueContainer>
    </div>
  );
}

export default AboutMe;