import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Direct Assist</h1>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to help businesses and entrepreneurs streamline their
          operations by providing reliable, flexible, and efficient virtual
          assistant services.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Professional and skilled VAs ready to assist you.</li>
          <li>Flexible service plans based on client needs.</li>
          <li>Transparent pricing with no hidden fees.</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <p>
          Brief bios and photos of the team of virtual assistants, including
          their expertise in various areas such as administration, customer
          service, and marketing.
        </p>
      </section>
    </div>
  );
};

export default About;
