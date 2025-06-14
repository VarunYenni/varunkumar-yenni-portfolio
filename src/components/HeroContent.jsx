import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { handleDownload } from "../common/utils.js";
import Star from "../assets/star-1.svg";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const HeroContent = ({setModalOpen}) => {
    return (
        <section className="hero-section">
            <div className="star-wrapper">
                <img src={Star} alt="twinkle star" className="twinkle-star"/>
            </div>
            <motion.div
                className="hero-container"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <motion.h1 variants={item} className="hero-hi">
                    Hi, I’m
                </motion.h1>

                <motion.h2 variants={item} className="hero-name">
                    Varun Kumar
                </motion.h2>

                <motion.h3 variants={item} className="hero-role">
                    Frontend Developer
                </motion.h3>

                <motion.p variants={item} className="hero-description">
                    Exploring the world of web development, one pixel at a time. Passionate about crafting seamless user
                    experiences and scalable applications.
                </motion.p>

                <motion.div variants={item} className="hero-buttons">
                    <button className="btn btn-secondary" onClick={handleDownload}>Launch Resume</button>
                    <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Transmit Signal</button>
                </motion.div>

                <motion.div variants={item} className="hero-social-icons">
                    <a href="https://github.com/varunyenni" target="_blank" rel="noopener noreferrer">
                        <FaGithub/>
                    </a>
                    <a href="https://linkedin.com/in/varunkumaryenni" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>
                    </a>
                    <a href="mailto:varunsagaryenni@gmail.com">
                        <FaEnvelope/>
                    </a>
                </motion.div>

                <motion.p variants={item} className="hero-location">
                    Bangalore, India
                </motion.p>
            </motion.div>
        </section>
    );
};

export default HeroContent;