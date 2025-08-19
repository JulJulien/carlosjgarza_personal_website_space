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
        I'm Carlos, a data scientist with a background in Computer Science and analytical research.
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
          <div className="description-aboutme">I use my expierience in CS to create games, websites, and other fun projects!</div>
          <div className="subtitle-aboutme">Languages:</div>
          <div>Python, C#, HTML, CSS, JavaScript, React</div>
          <div className="subtitle-aboutme">Dev Tools:</div>
          <div>GitHub<br/>VS Code<br/>PyTorch <br/>RStudio<br/>Unity</div>
        </div>
        <div className="DataScienceSection section">
          <div className="icon"><ImStatsBars /></div>
          <div className="title-aboutme">Data Science</div>
          <div className="description-aboutme">I have practical experience in data science and genomic research by working alongside experts in the field!</div>
          <div className="subtitle-aboutme">Skills:</div>
          <div> Data Cleaning, Data Analysis, Data Visualization, Communication</div>
          <div className="subtitle-aboutme">Tools:</div>
          <div>Python<br/>R<br/>SQL<br/>RStudio<br/>Tableau</div>
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
          <div className="description-aboutme">I'm always pushing myself to learn and read about new things. Whether it is art, statistics, coding, biology, or psychology. Exploring your interests and expanding your knowledge leads to oppurtunity!</div>
        </div>
      </div>
    </div>
  )
}

  function BooksSection(){
    return (
      <div className="books-section-wrapper">
        <h2>Books I Recommend</h2>
        <div className="books-section">
          <div className="book-image">
            <img src={require("./assets/books/onasunbeam_image.jpg")} alt="On a Sunbeam" />
            <div className="book-description">
              You can actually read this one for free online. It's about a highschool grad that feels lost, joins a space maintence crew, and refelcts on her past love life. It has great, loose art and beautiful color palettes.
            </div>
          </div>
          <div className="book-image">
            <img src={require("./assets/books/practicalstatsforDS_image.jpg")} alt="Practical Statistics for Data Scientists" />
            <div className="book-description">
              After my internship I wanted to develop the mathmateical foundations for Data Science. This book covers EDA, Data Distributions, Significance Testing, Regression, Classifications, ML, and Unsupervised ML. I learned a lot from it! 
            </div>
          </div>
          <div className="book-image">
            <img src={require("./assets/books/thetunnel_image.jpg")} alt="The Tunnel" />
            <div className="book-description">
              An obsessive artist explains what led to him killing his lover. It's haunting, funny, sometimes relatable, but mostly tragic. 
            </div>
          </div>
          <div className="book-image">
            <img src={require("./assets/books/theworldofedena_image.jpg")} alt="The World of Edena" />
            <div className="book-description">
              Moebius wrote and drew this sci-fi epic. It follows 2 space travelers as they get seperated on a lost paradise planet. By the end of the book, the plot devolves into total dreamlike surrealism. The art is incredible, as is Moebius standard.  
            </div>
          </div>
                 </div>
       </div>
     )
   }


function AboutMe() {
  return (
    <div className="full-container-aboutme">
      <BlueContainer>
        <ThreeSections />
        <PersonalStorySection />
        <PhilosophySection />
        <BooksSection />
      </BlueContainer>
    </div>
  );
}

export default AboutMe;