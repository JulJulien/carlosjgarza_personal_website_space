import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/projects.css';

function PortfolioItem({ title, description, image, alt }) {
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
            </div>
        </div>
    );
}

function Projects() {
        
    const portfolioItems = [
        {
            title: "Personal AI Agent",
            description: "Description of the AI Agent project",
            image: require('./assets/spotify_iconPlacement.png'),
            alt: "AI Agent"
        },
        {
            title: "Unity RPG",
            description: "Description of the Game Development project",
            image: require('./assets/spotify_iconPlacement.png'),
            alt: "Game Development"
        },
        {
            title: "Spotify Widget",
            description: "This is a description of the Spotify Widget project",
            image: require('./assets/spotify_iconPlacement.png'),
            alt: "Spotify Widget"
        },
        {
            title: "This Website!",
            description: "Made with React, Bootstrap, and CSS. The website acts as a an extended resume, a portfolio for artwork and programming.",
            image: require('./assets/spotify_iconPlacement.png'),
            alt: "Web Development"
        },
        {
            title: "ASCII Art Converter",
            description: "Description of the ASCII project",
            image: require('./assets/spotify_iconPlacement.png'),
            alt: "ASCII"
        },
        {
            title: "Attendance System",
            description: "This is a description of the Attendance project",
            image: require('./assets/spotify_iconPlacement.png'),
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
                        alt={item.alt}
                    />
                ))}
            </div>
        </Container>
        </div>
    );
}

export default Projects;


