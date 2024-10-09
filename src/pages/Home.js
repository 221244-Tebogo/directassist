import React from "react";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <img
          src="https://plus.unsplash.com/premium_photo-1718198500311-9bfa99062299?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image"
          className="hero-image"
        />
        <h1>Simplify Your Work, Maximize Your Time</h1>
        <p>
          Professional virtual assistant services tailored to meet your business
          needs.
        </p>
      </section>

      <section className="key-services">
        <h1>Our Key Services</h1>
        <ul>
          <li>
            Administrative Support: Calendar management, email management, data
            entry.
          </li>
          <li>
            Customer Service Support: Handling inquiries via phone, email, or
            chat.
          </li>
          <li>
            Social Media Management: Content scheduling, engagement, growth
            strategies.
          </li>
          <li>
            Project Management: Overseeing tasks, deadlines, and team
            coordination.
          </li>
        </ul>
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
        <button className="cta-button">Request a Free Consultation</button>
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
