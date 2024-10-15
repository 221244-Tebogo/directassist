import React from "react";
import MissionImage from "../assets/images/team.jpg"; // Mission image
import ChristinaImage from "../assets/images/Christina.jpg"; // Image for Jane Doe (now Christina)
import RaymondImage from "../assets/images/Raymond.jpg"; // Image for John Smith (now Raymond)
import SofiaImage from "../assets/images/Sofia.jpg"; // Image for Sarah Johnson (now Sofia)

const About = () => {
  return (
    <div className="about-page">
      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-text">
          <h1 className="main-heading">About Direct Assist</h1>{" "}
          <h2>Our Mission</h2>
          <p>
            Our mission is to help businesses and entrepreneurs streamline their
            operations by providing reliable, flexible, and efficient virtual
            assistant services.
          </p>
        </div>
        <div className="mission-image">
          <img
            src={MissionImage} // Mission image from assets
            alt="Mission"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-heading">Why Choose Us?</h2>
        <div className="why-choose-us-list">
          <div className="why-choose-us-item">
            <h3>Professional and Skilled VAs</h3>
            <p>Ready to assist you with all your business needs.</p>
          </div>
          <div className="why-choose-us-item">
            <h3>Flexible Service Plans</h3>
            <p>Our plans are tailored based on client requirements.</p>
          </div>
          <div className="why-choose-us-item">
            <h3>Transparent Pricing</h3>
            <p>No hidden fees, complete transparency with pricing.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <h2 className="section-heading">Meet the Team</h2>
        <div className="team-list">
          <div className="team-member">
            <img
              src={ChristinaImage} // Christina's image
              alt="Christina"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Christina</h3>
              <p>
                Christina is an experienced virtual assistant specializing in
                administrative support, scheduling, and email management.
              </p>
            </div>
          </div>

          <div className="team-member">
            <img
              src={RaymondImage} // Raymond's image
              alt="Raymond"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Raymond</h3>
              <p>
                Raymond is a customer service expert with over 8 years of
                experience handling customer inquiries and support requests.
              </p>
            </div>
          </div>

          <div className="team-member">
            <img
              src={SofiaImage} // Sofia's image
              alt="Sofia"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Sofia</h3>
              <p>
                Sofia leads our social media management services, helping
                clients grow their online presence through effective content
                strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;