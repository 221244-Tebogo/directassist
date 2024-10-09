import React from "react";

const Services = () => {
  return (
    <div className="services-page">
      <h1 className="custom-services-heading">Our Key Services</h1>

      <div className="service-box">
        <span className="service-icon">
          <span className="icon icon-calendar-management"></span>
        </span>
        <span className="service-label">
          Administrative Support: Calendar management, email management, data
          entry.
        </span>
      </div>

      <div className="service-box">
        <span className="service-icon">
          <span className="icon icon-customer-service"></span>
        </span>
        <span className="service-label">
          Customer Service Support: Handling inquiries via phone, email, or
          chat.
        </span>
      </div>

      <div className="service-box">
        <span className="service-icon">
          <span className="icon icon-social-media"></span>
        </span>
        <span className="service-label">
          Social Media Management: Content scheduling, engagement, growth
          strategies.
        </span>
      </div>

      <div className="service-box">
        <span className="service-icon">
          <span className="icon icon-project-management"></span>
        </span>
        <span className="service-label">
          Project Management: Overseeing tasks, deadlines, and team
          coordination.
        </span>
      </div>
    </div>
  );
};

export default Services;
