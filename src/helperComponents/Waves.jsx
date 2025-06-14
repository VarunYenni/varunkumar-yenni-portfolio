import React, { useEffect, useRef } from "react";
import "../styles/Waves.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Waves() {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);

    useEffect(() => {
        const loadScript = (src) =>
            new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });

        const loadVanta = async () => {
            if (!window.THREE) {
                await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
            }

            await loadScript("https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js");

            if (window.VANTA && window.VANTA.WAVES) {
                effectRef.current = window.VANTA.WAVES({
                    el: vantaRef.current,
                    waveHeight: 20,
                    waveSpeed: 1,
                    shininess: 30,
                    zoom: 1.2,
                });
            }
        };

        loadVanta();

        return () => {
            if (effectRef.current) effectRef.current.destroy();
        };
    }, []);

    return (
        <div className="waves-container">
            <svg
                viewBox="0 0 1440 150"
                preserveAspectRatio="none"
                className="waves-curve"
            >
                <path
                    d="M0,50 C360,0 1080,120 1440,50 L1440,0 L0,0 Z"
                    fill="black"
                />
            </svg>
            <div ref={vantaRef} className="waves">
                <div className="waves-content">
                    <div className="waves-icons">
                        <a href="https://github.com/varunyenni" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/varunkumaryenni" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:varunsagaryenni@gmail.com" title="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                    <div className="waves-glass">
                        © {new Date().getFullYear()} • Crafted with <span>💜</span> by <strong style={{ color: "#00ffff" }}>Varun</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}