import React from 'react';
import './styles/aboutme.css';
import { FaCode } from "react-icons/fa6";
import { ImStatsBars } from "react-icons/im";
import { FaPaintbrush } from "react-icons/fa6";
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

function ThreeSections(){
  return (
    <div className="ThreeSections">
      <div className="DeveloperSection section">
        <div className="icon"><FaCode /></div>
        <div className="title-aboutme">Developer</div>
        <div className="description-aboutme">I love building web apps and tools.</div>
        <div className="subtitle-aboutme">Languages I use:</div>
        <div>JavaScript, Python, HTML, CSS</div>
        <div className="subtitle-aboutme">Dev Tools:</div>
        <div>VS Code, GitHub, Docker</div>
      </div>
      <div className="DataScienceSection section">
        <div className="icon"><ImStatsBars /></div>
        <div className="title-aboutme">Data Science</div>
        <div className="description-aboutme">I analyze data and build models.</div>
        <div className="subtitle-aboutme">Skills:</div>
        <div>Python, R, SQL, Pandas</div>
        <div className="subtitle-aboutme">Tools:</div>
        <div>Jupyter, Tableau, scikit-learn</div>
      </div>
      <div className="ArtSection section">
        <div className="icon"><FaPaintbrush /></div>
        <div className="title-aboutme">Art</div>
        <div className="description-aboutme">I create digital and traditional art.</div>
        <div className="subtitle-aboutme">Mediums:</div>
        <div>Digital, Watercolor, Ink</div>
        <div className="subtitle-aboutme">Tools:</div>
        <div>Procreate, Photoshop, Pen & Paper</div>
      </div>
    </div>
  )
}

function AboutMe() {
  return (
    <div className="full-container-aboutme">
      <BlueContainer>
        <ThreeSections />
      </BlueContainer>
    </div>
  );
}

export default AboutMe;