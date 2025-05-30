import React, { useState } from 'react';
import './styles/designs.css';
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
        { type: 'video', src: require("./assets/videos/saturn.mp4"), alt: "design-2" },
        { type: 'image', src: require("./assets/pixel/Humans.png"), alt: "design-2" },
        { type: 'image', src: require("./assets/pixel/skeletons-export.png"), alt: "design-2" },
        // { type: 'slideshow', images: slideshowImagesEx, alt: "slideshow" },
        { type: 'image', src: require("./assets/pixel/golem,minotaur-export.png"), alt: "design-4" },
        { type: 'image', src: require("./assets/pixel/beholder.png"), alt: "design-5" },
    ];

    return(
        <div className="designs-full-container">
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
