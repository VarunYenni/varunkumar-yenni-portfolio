import React from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactModal.css';

const ContactModal = ({ref, setIsOpen, closing}) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then(() => {
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Something went wrong. Please try again.");
            });
        setIsOpen(false);
    }
    return (
        <div  className={`modal ${closing ? "closing" : ""}`}>
            <div className="modal-content" ref={ref}>
                <span className="close" onClick={() => setIsOpen(false)}>X</span>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Your Name" required className="form-input" name="name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Your Email" required className="email-input" name="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Your Message" required name="message"></textarea>
                    <button type="submit" className="submitButton">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactModal;