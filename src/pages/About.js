import React from "react";

const About = () => {
  return (
    <div className="about-page">
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
            src="https://images.unsplash.com/photo-1666866854783-8943590e37c8?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Jane Doe"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Jane Doe</h3>
              <p>
                Jane is an experienced virtual assistant specializing in
                administrative support, scheduling, and email management.
              </p>
            </div>
          </div>

          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="John Smith"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>John Smith</h3>
              <p>
                John is a customer service expert with over 8 years of
                experience handling customer inquiries and support requests.
              </p>
            </div>
          </div>

          <div className="team-member">
            <img
              src="https://randomuser.me/api/portraits/women/47.jpg"
              alt="Sarah Johnson"
              className="team-member-img"
            />
            <div className="team-member-info">
              <h3>Sarah Johnson</h3>
              <p>
                Sarah leads our social media management services, helping
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
