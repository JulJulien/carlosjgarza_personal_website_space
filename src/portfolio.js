import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/portfolio.css';

import { FaSpotify } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiRstudioide } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { SiR } from "react-icons/si";  // "si" = simple-icons set

function PortfolioItem({ title, description, description2, image, icons,alt, onClick }) {
    return (
        <div className="portfolio-item" onClick={onClick}>
            <div className="portfolio-thumbnail">
                <img src={image} alt={alt} />
        </div>
        <div className="portfolio-bottom-container">
            <div className="portfolio-title">
                <h2>{title}</h2>
            </div>
            <div className="portfolio-description">
                <p>{description}</p>
            </div>
            {description2 && (
                <div className="portfolio-description2">
                    <p>{description2}</p>
                </div>
            )}
            <div className="portfolio-bottom-container-icons">
                {icons.map((icon, index) => (
                    <a key={index} href="mailto:your.email@example.com" aria-label="Send email">
                        {icon}
                    </a>
                ))}
            </div>
            </div>
        </div>
    );
}

function CSharpIcon() {
    return (
    <>
        <i
            className="devicon-csharp-plain-wordmark"
            style={{
            display: 'inline-block',
            }}
        ></i>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
    </>
    );
}

function Portfolio() {
        
    const portfolioItems = [
        {
            title: "Chagas Disease Blood Based Biomarker Research",
            description: "University of Texas Medical Branch",
            description2: "Department of Data Science & Biostatistics",
            image: require('./assets/shapes1.png'),
            icons:[
                <SiR color="#ff7e7e"/>,
                <SiRstudioide color="#ff7e7e"/>
            ],
            alt: "Data Sciecne",
            reportSrc: "/SIBDS_Chagas_Disease_Biomarkers.html"
        },
        {
            title: "",
            description: "in progress",
            description2: "",
            image: require('./assets/shapes5.png'),
            icons:[
                //<FaPython color="#ff7e7e"/>,
                //<SiRstudioide color="#ff7e7e"/>
            ],
            alt: "Data Sciecne",
            reportSrc: null
        },
        {
            title: "",
            description: "in progress",
            description2: "",
            image: require('./assets/shapes7.png'),
            icons:[
                //<SiR color="#ff7e7e"/>,
                //<SiRstudioide color="#ff7e7e"/>
            ],
            alt: "Data Sciecne",
            reportSrc: null
        },
        {
            title: "Dungeon Crawler RPG",
            description: "Description of the Game Development project",
            image: require('./assets/shapes4.png'),
            icons: [
                <CSharpIcon />,
                <FaUnity />,
                <VscVscode/>
            ],            
            alt: "Game Development",
            reportSrc: null
        },
        {
            title: "This Website!",
            description: "Made with React, Bootstrap, and CSS. The website acts as a an extended resume, a portfolio for artwork and programming.",
            image: require('./assets/shapes3.png'),
            icons: [
                <FaReact />,
                <RiJavascriptFill />,
                <VscVscode/>
            ],
            alt: "Web Development",
            reportSrc: null
        }
    ];

    return (
        <div className="portfolio-full-page">
            <Container fluid className="portfolio-container">
                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            description2={item.description2}
                            image={item.image}
                            icons={item.icons}
                            alt={item.alt}
                            onClick={() => {
                                if (item.reportSrc) {
                                    window.open(item.reportSrc, '_blank');
                                }
                            }}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Portfolio; 