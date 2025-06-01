import React, { useState } from 'react';
import './styles/gallery.css';
import { Col, Row } from 'react-bootstrap';
import { IoMdDownload, IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function GalleryItem(props){
    return(
        <div className="gallery-item" onClick={props.onClick}>
            <a
                className="download-btn"
                href={props.src}
                download
                title="Download"
                onClick={e => e.stopPropagation()}
            >
                <div className="download-btn-icon">
                    <IoMdDownload />
                </div>
            </a>
            {props.src.endsWith('.mp4') ? (
                <video src={props.src} autoPlay loop muted playsInline alt={props.alt} />
            ) : (
                <img src={props.src} alt={props.alt} />
            )}
        </div>
    )
}

function SlideshowItem({ images, alt, onClick, initialIndex = 0, inLightbox = false }) {
    const [index, setIndex] = useState(initialIndex);
    const prev = (e) => { e && e.stopPropagation(); setIndex((index - 1 + images.length) % images.length); };
    const next = (e) => { e && e.stopPropagation(); setIndex((index + 1) % images.length); };
    return (
        <div className="gallery-item slideshow-item" onClick={onClick}>
            { (inLightbox || onClick) && (
                <button className="slideshow-btn left" onClick={prev}><IoIosArrowBack /></button>
            )}
            <img src={images[index]} alt={alt} />
            { (inLightbox || onClick) && (
                <button className="slideshow-btn right" onClick={next}><IoIosArrowForward /></button>
            )}
        </div>
    );
}

function Lightbox({ item, onClose }) {
    // item: { type: 'image'|'video'|'slideshow', src, alt, images }
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose}><IoMdClose /></button>
                {item.type === 'video' ? (
                    <video src={item.src} autoPlay loop muted controls playsInline className="lightbox-media" alt={item.alt} />
                ) : item.type === 'slideshow' ? (
                    <SlideshowItem images={item.images} alt={item.alt} inLightbox={true} />
                ) : (
                    <img src={item.src} alt={item.alt} className="lightbox-media" />
                )}
            </div>
        </div>
    );
}

function Gallery(){
    const [lightbox, setLightbox] = useState({ open: false, item: null });
    const openLightbox = (item) => setLightbox({ open: true, item });
    const closeLightbox = () => setLightbox({ open: false, item: null });

    const slideshowImagesEx = [
        // require("./assets/pixel/golem,minotaur-export.png"),
        // require("./assets/pixel/beholder.png"),
        // require("./assets/pixel/golem,minotaur-export.png"),
    ];

    const items = [
        { type: 'video', src: require("./assets/videos/saturn.mp4"), alt: "Saturn Animation" },
        { type: 'image', src: require("./assets/drawings/MouseKnight.jpg"), alt: "Mouse Knight Drawing" },
        { type: 'image', src: require("./assets/pixel/Humans.png"), alt: "Pixel Art Humans" },

        { type: 'image', src: require("./assets/drawings/Cat.jpg"), alt: "Cat Drawing" },
        { type: 'image', src: require("./assets/drawings/Swans.jpg"), alt: "Swans Drawing" },
        { type: 'image', src: require("./assets/pixel/skeletons-export.png"), alt: "Pixel Art Skeletons" },
        { type: 'image', src: require("./assets/drawings/Rango.jpg"), alt: "Rango Character Drawing" },
        // { type: 'slideshow', images: slideshowImagesEx, alt: "slideshow" },
        { type: 'image', src: require("./assets/pixel/golem,minotaur-export.png"), alt: "Pixel Art Golem and Minotaur" },
        
        { type: 'image', src: require("./assets/pixel/beholder.png"), alt: "Pixel Art Beholder" },
        { type: 'image', src: require("./assets/drawings/Sandman.jpg"), alt: "Sandman Drawing" },
        { type: 'image', src: require("./assets/drawings/LeMajor.jpg"), alt: "Le Major Drawing" },
        { type: 'image', src: require("./assets/drawings/Sandmad.jpg"), alt: "Sandmad Drawing" },
    ];

    return(
        <div className="gallery-full-container">
            <div className="gallery">
                {items.map((item, idx) => {
                    if(item.type === 'slideshow') {
                        return <SlideshowItem key={idx} images={item.images} alt={item.alt} onClick={() => openLightbox(item)} />
                    } else {
                        return <GalleryItem key={idx} src={item.src} alt={item.alt} onClick={() => openLightbox(item)} />
                    }
                })}
            </div>
            {lightbox.open && (
                <Lightbox item={lightbox.item} onClose={closeLightbox} />
            )}
        </div>
    )
}

export default Gallery; 