import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHeadset,
  faBullhorn,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import heroImage from "../assets/images/collab.jpg";

const Services = () => {
  return (
    <div className="services-page">
      <Helmet>
        <title>Our Services - Direct Assist Virtual Assistants</title>
        <meta
          name="description"
          content="Direct Assist offers comprehensive virtual assistant services including administrative support, customer service, social media management, and project management. Let us handle the tasks while you grow your business."
        />
        <meta
          name="keywords"
          content="Virtual Assistant Services, Administrative Support, Customer Service, Social Media Management, Project Management, Remote Business Assistance"
        />
        <meta property="og:title" content="Our Services - Direct Assist" />
        <meta
          property="og:description"
          content="Explore the wide range of virtual assistant services we offer to help streamline your business operations."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Helmet>

      <section className="key-services">
        <div className="services-content-container">
          <div className="services-text">
            <h1 className="main-heading">Direct Assist Services</h1>
            <p className="services-description">
              Explore the wide range of virtual assistant services we offer to
              help you focus on growing your business while we handle the rest.
            </p>
          </div>
          <div className="services-image">
            <img
              src={heroImage}
              alt="Our Services"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="service-list-section">
        <div className="service-list">
          <div className="service-item">
            <span className="service-icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </span>
            <div className="service-content">
              <h3>Administrative Support</h3>
              <p>
                Efficient support with calendar management, email organization,
                and data entry.
              </p>
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
              <p>
                Professional handling of customer inquiries through phone,
                email, or chat.
              </p>
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
              <p>
                Grow your brand with content creation, engagement, and social
                media strategies.
              </p>
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
              <p>
                End-to-end project management to ensure your team meets
                deadlines and stays organized.
              </p>
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
