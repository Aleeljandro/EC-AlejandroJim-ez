import React, { useEffect, useState } from "react";
import '../../styles/home.css';

const Herosection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        { src: "/assets/products/image1.jpg", alt: "Slide 1", text: `Bolso Silla Gilda Uzturre 10%   ̶7̶2̶,̶0̶0̶ ̶€̶   64,80 €` },
        { src: "/assets/products/image2.jpg", alt: "Slide 2", text: "Bolso Silla Cocco Piedra Uzturre 10%  ̶9̶4̶,̶0̶0̶ ̶€̶  84,60 €" },
        { src: "/assets/products/image3.jpg", alt: "Slide 3", text: "Talega Neo 10%  ̶7̶2̶,̶0̶0̶ ̶€̶  64,80 €" },
        { src: "/assets/products/image4.jpg", alt: "Slide 4", text: "Talega Dario 30%  ̶7̶4̶,̶0̶0̶ ̶€̶  51,80 €" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [slides.length]);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div id="sideshow-example" data-component="slideshow">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap" />
 v           <div role="list">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === activeIndex ? "active" : ""}`}
                    >
                        <img src={slide.src} alt={slide.alt} />
                        <div className="text-overlay">{slide.text}</div>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Herosection;