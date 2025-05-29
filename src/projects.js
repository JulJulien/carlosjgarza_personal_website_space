import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/projects.css';

import { FaSpotify } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";



function PortfolioItem({ title, description, image, icons,alt }) {
    return (
        <div className="portfolio-item">
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

function Projects() {
        
    const portfolioItems = [
        {
            title: "Personal AI Agent",
            description: "Description of the AI Agent project",
            image: require('./assets/spotify_iconPlacement.png'),
            icons: [
                <FaPython />,
                <RiOpenaiFill />,
            ],
            alt: "AI Agent"
        },
        {
            title: "Unity RPG",
            description: "Description of the Game Development project",
            image: require('./assets/spotify_iconPlacement.png'),
            icons: [
                <CSharpIcon />,
                <FaUnity />
            ],            
            alt: "Game Development"
        },
        {
            title: "Spotify Widget",
            description: "This is a description of the Spotify Widget project",
            image: require('./assets/spotify_iconPlacement.png'),
            icons: [
                <FaPython />,
                <FaSpotify />
            ],
            alt: "Spotify Widget"
        },
        {
            title: "This Website!",
            description: "Made with React, Bootstrap, and CSS. The website acts as a an extended resume, a portfolio for artwork and programming.",
            image: require('./assets/spotify_iconPlacement.png'),
            icons: [
                <FaReact />,
                <RiJavascriptFill />
            ],
            alt: "Web Development"
        },
        {
            title: "ASCII Art Converter",
            description: "Description of the ASCII project",
            image: require('./assets/spotify_iconPlacement.png'),
            icons: [
                <FaPython />,
            ],
            alt: "ASCII"
        },
        {
            title: "Attendance System",
            description: "This is a description of the Attendance project",
            image: require('./assets/spotify_iconPlacement.png'),
            icons: [
                <FaPython />,
            ],
            alt: "Attendance"
        },
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
                        image={item.image}
                        icons={item.icons}
                        alt={item.alt}
                    />
                ))}
            </div>
        </Container>
        </div>
    );
}

export default Projects;


