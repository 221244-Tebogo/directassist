import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16767229318";
    script.async = true;
    document.head.appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16767229318');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Helmet>
          <title>Contact Us - Direct Assist Virtual Assistants</title>
          <meta
            name="description"
            content="Get in touch with Direct Assist for professional virtual assistant services. We're here to help streamline your business operations."
          />
          <meta
            name="keywords"
            content="Contact, Virtual Assistant, Support, Direct Assist, Inquiries"
          />
          <meta property="og:title" content="Contact Us - Direct Assist" />
          <meta
            property="og:description"
            content="Contact us today to learn how our virtual assistant services can help you grow your business."
          />
          <meta
            property="og:image"
            content="URL to an image representing contact"
          />
          <meta
            property="og:url"
            content="https://directassist.co.za/contact"
          />
          <link rel="canonical" href="https://directassist.co.za/contact" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
