import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHeadset,
  faBullhorn,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero-container">
        <div className="hero-image-container">
          <div className="overlay"></div>
          <div className="mask">
            <div className="hero-text-container">
              <h1 className="main-heading">
                Simplify Your Work, Maximize Your Time
              </h1>
              <p className="mb-3">
                Professional virtual assistant services tailored to meet your
                business needs. Let us help you focus on growing your business
                while we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="key-services">
        <h1>Our Key Services</h1>
        <div className="service-list">
          <div className="service-item">
            <span className="service-icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
            <div className="service-content">
              <h3>Administrative Support</h3>
              <p>Calendar management, email management, data entry.</p>
              <a
                href="/services/administrative-support"
                className="link-with-background"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="service-item">
            <span className="service-icon">
              <FontAwesomeIcon icon={faHeadset} />
            </span>
            <div className="service-content">
              <h3>Customer Service Support</h3>
              <p>Handling inquiries via phone, email, or chat.</p>
              <a
                href="/services/customer-support"
                className="link-with-background"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="service-item">
            <span className="service-icon">
              <FontAwesomeIcon icon={faBullhorn} />
            </span>
            <div className="service-content">
              <h3>Social Media Management</h3>
              <p>Content scheduling, engagement, growth strategies.</p>
              <a href="/services/social-media" className="link-with-background">
                Learn More
              </a>
            </div>
          </div>

          <div className="service-item">
            <span className="service-icon">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </span>
            <div className="service-content">
              <h3>Project Management</h3>
              <p>Overseeing tasks, deadlines, and team coordination.</p>
              <a
                href="/services/project-management"
                className="link-with-background"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Contact us to discuss your requirements.</li>
          <li>We assign a dedicated virtual assistant to handle your tasks.</li>
          <li>
            You focus on growing your business while we take care of the rest.
          </li>
        </ol>
        <a href="/contact">
          <button className="cta-button">Request a Free Consultation</button>
        </a>
      </section>
    </div>
  );
};

export default Home;

//Add this code into every page you have
// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-6QWNB10VW1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-6QWNB10VW1');
// </script>
