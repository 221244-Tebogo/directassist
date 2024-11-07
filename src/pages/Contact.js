import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet"; // Import Helmet here
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending error:", error);
          alert(
            "An error occurred, please check your connection or try again. Error: " +
              error.text
          );
          setIsSent(false);
        }
      );
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Direct Assist Virtual Assistants</title>
        <meta
          name="description"
          content="Get in touch with Direct Assist for professional virtual assistant services. We're here to help streamline your business operations."
        />
        <meta
          name="keywords"
          content="Contact, Virtual Assistant, Support, Direct Assist, Inquiries"
        />
        <meta property="og:title" content="Contact Us - Direct Assist" />
        <meta
          property="og:description"
          content="Contact us today to learn how our virtual assistant services can help you grow your business."
        />
        <meta
          property="og:image"
          content="URL to an image representing contact"
        />
        <meta property="og:url" content="https://directassist.co.za/contact" />
        <link rel="canonical" href="https://directassist.co.za/contact" />
      </Helmet>
      <h1>Contact Us</h1>

      <div className="contact-container">
        <section className="contact-form">
          <form onSubmit={sendEmail}>
            <div className="input_box">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_box">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_box">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input_box">
              <label htmlFor="company">Company Name:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="input_box">
              <label htmlFor="service">Type of Service Needed:</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="administrative">Administrative</option>
                <option value="customer-support">Customer Support</option>
                <option value="social-media">Social Media</option>
                <option value="project-management">Project Management</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input_box">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "#3950FF",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "35px",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
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
          <p>Feel free to send me a message in the contact form.</p>
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
