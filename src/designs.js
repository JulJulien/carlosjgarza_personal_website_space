import React from 'react';
import './styles/designs.css';
import { Col } from 'react-bootstrap';





function Gallery(){
    return(
        <div className="designs-full-container">
            <div className="gallery">
                    <div className="gallery-item"><img src={require("./assets/sample1.png")} alt="design-1" /></div>
                    <div className="gallery-item"><img src={require("./assets/sample2.png")} alt="design-2" /></div>
                    <div className="gallery-item"><video src={require("./assets/videos/saturn.mp4")} autoPlay loop muted playsInline alt="design-2" /></div>
                    <div className="gallery-item"><img src={require("./assets/sample3.png")} alt="design-3" /></div>
                    <div className="gallery-item"><img src={require("./assets/sample4.png")} alt="design-4" /></div>
                    <div className="gallery-item"><img src={require("./assets/sample5.png")} alt="design-5" /></div>
                    <div className="gallery-item"><img src={require("./assets/sample6.png")} alt="design-6" /></div>
  
                    <div className="gallery-item"><img src={require("./assets/sample6.png")} alt="design-7" /></div>
                    <div className="gallery-item"><img src={require("./assets/sample3.png")} alt="design-8" /></div>
                    <div className="gallery-item"><img src={require("./assets/sample1.png")} alt="design-9" /></div>
            </div>
        </div>
    )
}


export default Gallery;
