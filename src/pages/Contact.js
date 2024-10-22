import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Direct Assist Virtual Assistants</title>
        <meta
          name="description"
          content="Get in touch with Direct Assist Virtual Assistants for professional business support, administrative assistance, and more. Contact us today for a free consultation."
        />
        <meta
          name="keywords"
          content="Contact Direct Assist, Virtual Assistant Services, Business Support, Administrative Help, Customer Service"
        />
        <meta property="og:title" content="Contact Us - Direct Assist" />
        <meta
          property="og:description"
          content="Need virtual assistant services? Contact Direct Assist for a free 30-minute consultation and find out how we can support your business."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-image.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />
      </Helmet>

      <h1>Contact Us</h1>

      <div className="contact-container">
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

            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </section>

        <section className="lets-chat">
          <FontAwesomeIcon
            icon={faComments}
            size="3x"
            style={{ color: "#3950FF", marginBottom: "15px" }}
          />
          <h2>Let's Chat</h2>
          <p>
            Whether you have a question, want to start a project, or simply want
            to connect.
          </p>
          <p>Feel free to send us a message using the contact form.</p>
        </section>
      </div>

      <section className="consultation-offer">
        <h2>
          Get a free 30-minute consultation to discuss how we can assist you.
        </h2>
        <p>
          Let us know your needs, and we'll set up a time to go over how we can
          help your business.
        </p>
      </section>

      <div className="faq-container">
        <div className="faq-icon">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            size="3x"
            style={{ color: "#3950FF", marginRight: "20px" }}
          />
          <h2>FAQ</h2>
        </div>

        <div className="faq-accordion">
          <details>
            <summary>How do I get started with a virtual assistant?</summary>
            <p className="text">
              Contact us for a consultation, and we will match you with a
              virtual assistant based on your needs.
            </p>
          </details>
          <details>
            <summary>
              What tasks can a virtual assistant handle for my business?
            </summary>
            <p className="text">
              Our virtual assistants can handle administrative tasks, customer
              service, social media management, and more.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Contact;
