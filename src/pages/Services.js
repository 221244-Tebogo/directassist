import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHeadset,
  faBullhorn,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

const Services = () => {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1
          className="main-heading"
          style={{ textAlign: "center", fontSize: "2.5rem", color: "#3950FF" }}
        >
          Our Key Services
        </h1>
        <p
          className="mb-3"
          style={{
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#000",
            marginBottom: "20px",
          }}
        >
          Explore the wide range of virtual assistant services we offer to help
          you focus on growing your business while we handle the rest.
        </p>
      </header>

      <section className="key-services">
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
    </div>
  );
};

export default Services;
