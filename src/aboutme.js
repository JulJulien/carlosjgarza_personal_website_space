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