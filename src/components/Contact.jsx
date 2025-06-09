import React from 'react';

const Contact = () => {
    return (
        <section className="contact">
            <h2>Contact Me</h2>
            <p>If you want to discuss a project or just want to say hi, feel free to reach out!</p>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;