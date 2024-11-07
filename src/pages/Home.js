import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHeadset,
  faBullhorn,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import HomeImage from "../assets/images/Home.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Home - Direct Assist Virtual Assistants</title>
        <meta
          name="description"
          content="Streamline your business operations with expert virtual assistant services. Maximize productivity with professional support for administrative, customer service, and social media management."
        />
        <meta
          name="keywords"
          content="Virtual Assistant, Administrative Support, Remote Assistants, Business Support, Social Media Management, Project Management"
        />
        <meta
          property="og:title"
          content="Home - Direct Assist Virtual Assistants"
        />
        <meta
          property="og:description"
          content="Professional virtual assistant services tailored to your business needs. Maximize productivity and focus on what matters most."
        />
        <meta property="og:image" content={HomeImage} />
        <meta property="og:url" content="https://directassist.co.za" />
        <link rel="canonical" href="https://directassist.co.za" />
      </Helmet>
      <header className="hero-container">
        <div
          className="hero-image-container"
          style={{ backgroundImage: `url(${HomeImage})` }}
        >
          <div className="overlay"></div>
          <div className="mask">
            <div className="hero-text-container">
              <h1 className="main-heading">
                Simplify Your Work, Maximize Your Time
              </h1>
              <p className="mb-3">
                Let us handle the details while you focus on growing your
                business.
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
              <p>
                Expert support with scheduling, email management, and data
                entry.
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
                Professional assistance with handling customer inquiries and
                support.
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
                Grow your brand with effective content scheduling and engagement
                strategies.
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
              <h3>Project Management </h3>
              <p>
                Comprehensive project management services, from start to finish.
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

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="process-main">
          <div className="col-3">
            <div className="process-step-cont">
              <div className="process-step">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <span className="process-label">Step 1: Contact Us</span>
            </div>
          </div>

          <div className="col-3">
            <div className="process-step-cont">
              <div className="process-step">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <span className="process-label">Step 2: Assign Assistant</span>
            </div>
          </div>

          <div className="col-3">
            <div className="process-step-cont">
              <div className="process-step">
                <FontAwesomeIcon icon={faBullhorn} />
              </div>
              <span className="process-label">Step 3: Execution</span>
            </div>
          </div>

          <div className="col-3">
            <div className="process-step-cont">
              <div className="process-step">
                <FontAwesomeIcon icon={faProjectDiagram} />
              </div>
              <span className="process-label">Step 4: Focus on Business</span>
            </div>
          </div>
        </div>
      </section>

      <a href="/contact">
        <button
          className="cta-button"
          style={{
            width: "300px",
            padding: "15px 30px",
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "40px",
            borderRadius: "35px",
          }}
        >
          Request a Free Consultation
        </button>
      </a>
    </div>
  );
};

export default Home;
