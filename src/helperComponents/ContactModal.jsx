import React from 'react';
import '../styles/ContactModal.css';

const ContactModal = ({ref, setIsOpen, closing}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Message sent!");
        setIsOpen(false);
    }
    return (
        <div  className={`modal ${closing ? "closing" : ""}`}>
            <div className="modal-content" ref={ref}>
                <span className="close" onClick={() => setIsOpen(false)}>X</span>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Your Name" required className="form-input"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Your Email" required className="email-input"/>
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className="submitButton">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;