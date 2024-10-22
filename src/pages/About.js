import React from "react";
import { Helmet } from "react-helmet";
import MissionImage from "../assets/images/team.jpg";
import ChristinaImage from "../assets/images/Christina.jpg";
import RaymondImage from "../assets/images/Raymond.jpg";
import SofiaImage from "../assets/images/Sofia.jpg";

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us - Direct Assist Virtual Assistants</title>
        <meta
          name="description"
          content="Discover how Direct Assist helps businesses grow by providing efficient, flexible virtual assistant services tailored to meet all your business needs."
        />
        <meta
          name="keywords"
          content="About Direct Assist, Virtual Assistant Services, Virtual Business Support, Remote Assistants, Admin Help, Flexible Services"
        />
        <meta property="og:title" content="About Us - Direct Assist" />
        <meta
          property="og:description"
          content="Our mission is to provide businesses and entrepreneurs with top-tier virtual assistant services to streamline operations and enhance productivity."
        />
        <meta property="og:image" content={MissionImage} />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>

      <section className="mission-section">
        <div className="mission-text">
          <h1 className="main-heading">About Direct Assist</h1>
          <h2>Our Mission</h2>
          <p>
            Our mission is to help businesses and entrepreneurs streamline their
            operations by providing reliable, flexible, and efficient virtual
            assistant services.
          </p>
        </div>
        <div className="mission-image">
          <img src={MissionImage} alt="Mission" />
        </div>
      </section>

      <section className="why-choose-us">
        <h2 className="section-heading">Why Choose Us?</h2>
        <div className="why-choose-us-list">
          <div className="why-choose-us-item">
            <h3>Professional Virtual Assistants</h3>
            <p>
              Our experienced VAs are ready to assist you with a wide range of
              business tasks.
            </p>
          </div>
          <div className="why-choose-us-item">
            <h3>Customizable Plans</h3>
            <p>
              We offer flexible service plans that adapt to your unique business
              needs.
            </p>
          </div>
          <div className="why-choose-us-item">
            <h3>Clear and Transparent Pricing</h3>
            <p>
              No hidden fees – enjoy transparent pricing for all our services.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-heading">Meet the Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img
              src={ChristinaImage}
              alt="Christina"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Christina</h3>
              <p>
                Christina is an experienced VA specializing in administrative
                support, scheduling, and email management.
              </p>
            </div>
          </div>

          <div className="team-member">
            <img src={RaymondImage} alt="Raymond" className="team-member-img" />
            <div className="team-member-info">
              <h3>Raymond</h3>
              <p>
                Raymond is a customer service expert with over 8 years of
                experience in customer support.
              </p>
            </div>
          </div>

          <div className="team-member">
            <img src={SofiaImage} alt="Sofia" className="team-member-img" />
            <div className="team-member-info">
              <h3>Sofia</h3>
              <p>
                Sofia leads our social media management services, helping
                clients grow their online presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
