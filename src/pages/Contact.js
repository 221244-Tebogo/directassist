import React from "react";
import "../assets/Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <section className="contact-form">
        <form>
          <div className="input_box">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="input_box">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="input_box">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="input_box">
            <label htmlFor="company">Company Name:</label>
            <input type="text" id="company" name="company" />
          </div>

          <div className="input_box">
            <label htmlFor="service">Type of Service Needed:</label>
            <select id="service" name="service">
              <option value="administrative">Administrative</option>
              <option value="customer-support">Customer Support</option>
              <option value="social-media">Social Media</option>
              <option value="project-management">Project Management</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="input_box">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="consultation-offer">
        <h2>
          Get a free 30-minute consultation to discuss how we can assist you.
        </h2>
      </section>

      <section className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <h3>How do I get started with a virtual assistant?</h3>
          <p>
            Contact us for a consultation, and we will match you with a virtual
            assistant based on your needs.
          </p>
        </div>
        <div className="faq-item">
          <h3>What tasks can a virtual assistant handle for my business?</h3>
          <p>
            Our virtual assistants can handle administrative tasks, customer
            service, social media management, and more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
