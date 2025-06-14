import React, { useEffect } from 'react';
import '../styles/Hero.css'

const HeroBackground = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            document.querySelectorAll(".parallax-slow").forEach((el, index) => {
                const speed = index === 0 ? 0.1 : 0.05; // layer4 and layer5 different speeds
                el.style.transform = `translateY(${scrollY * speed}px)`;
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="background-layer layer1"></div>
            <div className="background-layer layer2 parallax-slow"></div>
            <div className="background-layer layer3"></div>
            <div className="background-layer layer4 parallax-slow"></div>
            <div className="background-layer layer5"></div>
        </>
    )
};

export default HeroBackground;