import { Col, Row } from 'react-bootstrap';
import './styles/resume.css';


function ResumeImage(){
    return (
        <div className="resume-container1">
            <img src={require('./assets/FullResume.png')} alt="Resume" className="resume-image" />
        </div>
    );
}

function ScrollIndicator(){
    return (
        <div className="scroll-indicator">
            <div className="arrow"></div>
            <p> More Information</p>
        </div>
    );
}

function WorkExperience(){
    return (
        <div className="container-section">
            <Col>
                <div className="title">Work Experience</div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>
                            Data Science & Bioinformatics Research Intern
                            <span className="date">June 2025 - Present</span>
                        </h3>
                        <div className="experience-header-left">
                            <span className="company">UT Medical Branch</span>
                            <span className="location">Galveston, TX</span>
                        </div>
                    </div>
                    <ul className="experience-details">
                        <li>Led development of key features resulting in 30% user growth</li>
                        <li>Collaborated with cross-functional teams to deliver projects on schedule</li>
                        <li>Implemented automated testing reducing bug reports by 40%</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <h3>
                            Teachers' Assistant
                            <span className="date">Jan 2025 - May 2025</span>
                        </h3>
                        <div className="experience-header-left">
                            <span className="company">UTRGV Computer Science Department</span>
                            <span className="location">Edinburg, TX</span>
                        </div>
                    </div>
                    <ul className="experience-details">
                        <li>Developed and maintained web applications using React and Node.js</li>
                        <li>Participated in code reviews and implemented best practices</li>
                        <li>Contributed to team documentation and knowledge sharing</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <h3>
                            Reybotics Instructor Assistant
                            <span className="date">Jan 2023 - June 2023</span>
                        </h3>
                        <div className="experience-header-left">
                            <span className="company">Reybotics</span>
                            <span className="location">Brownsville, TX</span>
                        </div>
                    </div>
                    <ul className="experience-details">
                        <li>Assisted in developing new features for the company's main product</li>
                        <li>Fixed bugs and improved application performance</li>
                        <li>Participated in daily stand-ups and sprint planning</li>
                    </ul>
                </div>
            </Col>
        </div>
    );
}

function Education(){
    return (
        <div className="container-section">
            <Col>
                <div className="title">Education</div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>
                            UTMB Summer Institute in Biostatistics and Data Science
                            <span className="date">June - July 2025</span>
                        </h3>
                        <div className="experience-header-left">
                            <span className="company">University of Texas Medical Branch</span>
                            <span className="location">Galveston, TX</span>
                        </div>
                    </div>
                    <ul className="experience-details">
                        <li>GPA: 3.9/4.0</li>
                        <li>Honors: National Honor Society, Academic Excellence Award</li>
                        <li>Activities: Computer Science Club, Robotics Team</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h3>
                            Bachelor of Science in Computer Science
                            <span className="date">Graduated May 2025</span>
                        </h3>
                        <div className="experience-header-left">
                            <span className="company">University of Texas Rio Grande Valley</span>
                            <span className="location">Edinburg, TX</span>
                        </div>
                    </div>
                    <ul className="experience-details">
                        <li>GPA: 3.7/4.0</li>
                        <li>Cum Laude</li>
                        <li>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web Development</li>
                        <li>Dean's List: Fall 2022 - Present</li>
                    </ul>
                </div>

                <div className="experience-item">
                    <div className="experience-header">
                        <h3>
                            Engineering Student Leadership Academy
                            <span className="date">Jan - May 2025</span>
                        </h3>
                        <div className="experience-header-left">
                            <span className="company">University of Texas Rio Grande Valley</span>
                            <span className="location">Edinburg, TX</span>
                        </div>
                    </div>
                    <ul className="experience-details">
                        <li>GPA: 3.9/4.0</li>
                        <li>Honors: National Honor Society, Academic Excellence Award</li>
                        <li>Activities: Computer Science Club, Robotics Team</li>
                    </ul>
                </div>
            </Col>
        </div>
    );
}

function Skills(){
    return (
        <div className="container-section">
            <Col>
                <div className="title">Skills</div>
                <span className="company">Languages & Frameworks</span>
                <li>Python, C#, R, JavaScript, React, CSS, HTML, Flutter, Dart</li>
                <span className="company">Tools</span>
                <li>Github, Github Desktop, Cursor, Visual Studio, Jira, Linux, Unity Game Engine, Blender, Figma</li>
                <span className="company">Soft Skills</span>
                <li>Teamwork, Communication, Problem Solving, Time Management, Adaptability, Leadership</li>
            </Col>
        </div>
    );
}

export default function Resume(){
    return (
        <div className="resume-full-page">
            <ResumeImage />
            <ScrollIndicator />
            <div className="resume-container2">
                <Col>
                    <Row>
                    {Education()}
            </Row>
            <Row>
                {WorkExperience()}
            </Row>
            <Row>
                    {Skills()}
                </Row>
            </Col>
        </div>
        </div>
    );
}
