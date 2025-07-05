import React from 'react';
import Waves from "../helperComponents/Waves.jsx";
import ChatBot from "../helperComponents/ChatBot.jsx";
import '../styles/Contact.css';

const Connect = () => {
   return (
       <div className="contact">
          <div className="star-background"/>
          <div className="contact-content">
              <div className="space-message">
                  <div className="main-text">Thanks for orbiting through my universe!</div>
                  <div className="sub-text">Ready to explore new possibilities together?</div>
              </div>
              <div className="chat-bot-wrapper">
                  <ChatBot />
              </div>
          </div>
          <div className="footer">
             <Waves/>
          </div>
       </div>
   )
};

export default Connect;