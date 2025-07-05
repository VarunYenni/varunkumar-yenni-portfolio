import './App.css';
import './styles/Hero.css';
import React, {useState, useEffect, Suspense} from 'react';
import Header from './components/Header';
import TechGalaxy from './components/TechGalaxy.jsx';
import Connect from './components/Connect.jsx';
import SpaceShipCursor from "./helperComponents/SpaceShipCursor.jsx";
import HeroContent from "./components/HeroContent.jsx";
import { Player } from '@lottiefiles/react-lottie-player';
import developerAnim from './assets/astroTyping.json';
import HeroBackground from "./helperComponents/HeroBackground.jsx";
import useClickOutside from "./customHooks/useClickOutside.js";
import ContactModal from "./helperComponents/ContactModal.jsx";

const App = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const splash = document.getElementById('splash');
        if (splash) {
            splash.classList.add('fade-out');
            setTimeout(() => splash.remove(), 500); // match with CSS fade duration
        }
    }, []);

    const {ref, isOpen, setIsOpen } = useClickOutside(false);
    const [closing, setClosing] = useState(false);

    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setClosing(false);
        }, 400);
    };

    return (
      <div className="app">
          <SpaceShipCursor/>
          <Header/>
          <div>
              <section className="about" id="about">
                  <HeroBackground />
                  <div className="hero-content">
                      <HeroContent setModalOpen={setIsOpen} />
                  </div>
                  {isOpen && (
                     <ContactModal ref={ref} setIsOpen={closeModal} closing={closing}/>
                  )}
                  <Player
                      autoplay
                      loop
                      src={developerAnim}
                      className="astro-typing-animation"
                  />
              </section>
              <Suspense fallback={null}>
                  <section className="skills" id="tech-galaxy">
                      <TechGalaxy />
                  </section>
              </Suspense>
              <Suspense fallback={null}>
                  <section id="connect">
                      <Connect />
                  </section>
              </Suspense>
          </div>
      </div>
  );
}

export default App;