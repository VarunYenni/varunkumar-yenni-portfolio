import './App.css';
import './styles/Hero.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SnitchCursor from "./helperComponents/SnitchCursor.jsx";
import HeroContent from "./components/HeroContent.jsx";
import Journey from "./components/Journey.jsx";
import { Player } from '@lottiefiles/react-lottie-player';
import developerAnim from './assets/astroTyping.json';
import HeroBackground from "./helperComponents/HeroBackground.jsx";
import useClickOutside from "./customHooks/useClickOutside.js";
import ContactModal from "./helperComponents/ContactModal.jsx";

const App = () => {

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
          <SnitchCursor/>
          <Header/>
          <div className="content">
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
              <section className="skills" id="skills">
                  <Skills className="skills" id="skills" />
              </section>
             <section className="projects" id="projects">
                 <Projects />
             </section>
          </div>
      </div>
  );
}

export default App;