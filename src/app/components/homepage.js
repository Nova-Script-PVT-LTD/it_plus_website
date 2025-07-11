"use client";

import { useEffect } from "react";
import Footer from "./homefooter";
import Header from "./header";
import HeroSection from "./hero_section";
import WhoSection from "./who";

export default function Home() {
  useEffect(() => {
    // Load external CSS
    const bootstrapLink = document.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css";
    document.head.appendChild(bootstrapLink);

    const fontAwesomeLink = document.createElement("link");
    fontAwesomeLink.rel = "stylesheet";
    fontAwesomeLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fontAwesomeLink);

    const googleFontsLink = document.createElement("link");
    googleFontsLink.rel = "stylesheet";
    googleFontsLink.href =
      "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(googleFontsLink);

    // Load Bootstrap JS
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js";
    document.body.appendChild(bootstrapScript);

    // Reveal on scroll logic
  const revealElements = document.querySelectorAll('.reveal-on-scroll'); // <-- ADD THIS LINE
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.4 }
  );
  revealElements.forEach((el) => observer.observe(el));

    return () => {
      // Cleanup
      document.head.removeChild(bootstrapLink);
      document.head.removeChild(fontAwesomeLink);
      document.head.removeChild(googleFontsLink);
      document.body.removeChild(bootstrapScript);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const styles = {
    ":root": {
      "--primary-purple": "#360065",
      "--secondary-purple": "#7A4ADF",
      "--accent-green": "rgb(245, 149, 32) ",
      "--dark-blue": "#15145F",
      "--dark-purple": "#440B44",
    },
    body: {
      fontFamily: "'Outfit', sans-serif",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
    },
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <style>{`
        :root {
          --primary-purple: #360065;
          --secondary-purple: #7A4ADF;
          --accent-green: rgb(245, 149, 32) ;
          --dark-blue: #15145F;
          --dark-purple: #440B44;
        }
        
        body {
          font-family: 'Outfit', sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        .reveal-on-scroll {
  opacity: 0;
  transform: translateY(80px);
  transition: opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}
.reveal-on-scroll.visible {
  opacity: 1;
  transform: none;
}
        
        
        
        .hero-section {
          background: linear-gradient(180deg, #7A4ADF 0%, #360065 100%);
          height: 624px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid white;
        }
        
        .hero-content {
          text-align: center;
          color: white;
        }
        
        .hero-content h1 {
          font-size: 60px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .hero-content p {
          font-size: 40px;
          font-weight: 400;
          margin-bottom: 40px;
        }
        
        .hero-image {
          position: absolute;
          right: 100px;
          top: 50%;
          transform: translateY(-50%);
          width: 194px;
          height: 203px;
          background: #ddd;
          border-radius: 10px;
        }
        
        .btn-live-help {
          background: var(--accent-green);
          color: var(--dark-blue);
          border: none;
          border-radius: 50px;
          font-size: 32px;
          font-weight: 500;
          padding: 18px 45px;
          margin-right: 20px;
        }
        
        .btn-contact-hero {
          background: transparent;
          color: white;
          border: 4px solid var(--accent-green);
          border-radius: 50px;
          font-size: 32px;
          font-weight: 500;
          padding: 18px 45px;
        }
        
        .section-title {
          color: #360065;
          font-size: 60px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 20px;
          margin-top:17px !important;
          white-space: nowrap;
        }
        
        .section-subtitle {
          color: black;
          font-size: 36px;
          font-weight: 300;
          text-align: center;
          margin-top: 8px;
          margin-bottom: 0px;
        }
        
        .decorative-line {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: -16px;
          margin-top: 50px;
        }
        
        .line {
          width: 376px;
          height: 3px;
          background: #9F91B2;
          margin: 0 30px;

        }
        
        .dot {
          width: 8px;
          height: 8px;
          background: #9F91B2;
          border-radius: 50%;
          margin: 0 20px;
        }
        
        .service-card {
          position: relative;
          border-radius: 40px;
          overflow: hidden;
          height: 252px;
          margin-bottom: 30px;
        }
        
        .service-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 7px 7px 5px 4px #7A4ADF;
          border-radius: 20px;
        }
        
        .service-title {
          color: white;
          font-size: 48px;
          font-weight: 600;
          text-align: center;
        }
        
        .service-icon {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 60px;
          height: 60px;
          background: var(--dark-purple);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .service-icon i {
          color: white;
          font-size: 24px;
        }
        
      
        .btn-our-story {
          background: var(--accent-green);
          color: var(--dark-blue);
          border: none;
          border-radius: 30px;
          font-size: 20px;
          font-weight: 700;
          padding: 15px 30px;
        }
        
        .why-choose-section {
  padding: 80px 0;
}

.feature-card {
  background: linear-gradient(180deg, #7A4ADF 0%, #360065 100%);
  border-radius: 50px;
  box-shadow: 4px 4px 10px #7A4ADF;
  color: white;
  text-align: center;
  padding: 40px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  /* ADDITIONS FOR HOVER ANIMATION */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; 
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02); 
  box-shadow: 8px 8px 20px rgba(122, 74, 223, 0.7); 
}

.feature-icon {
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin-bottom: 30px;
  
  transition: transform 0.3s ease-in-out; 
  
}

/* We'll make the icon animate when its parent card is hovered */
.feature-card:hover .feature-icon {
  transform: rotate(5deg) scale(1.1); 
}
.feature-icon img {
  width: 130px;
  height: 130px;
  object-fit: contain;
}
.feature-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
}

.tall-card {
  height: 607px;
}

.short-card {
  height: 363px;
}
        
  .clients-container {
  padding: 80px; /* increase from 60px */
}
        
        .clients-container {
  background: #F1F1F1;
  border-radius: 30px;
  padding: 80px;
  width: 100%; /* or set a larger fixed width like 1200px */
  max-width: 1400px; /* optional: expand limit */
  margin: 0 auto;

  margin-bottom: 110px; /* Add bottom margin for spacing */
}
        
        .client-logo {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  margin: 20px;
  background:transparent !important;
  display: flex;
  align-items: center;
  justify-content: center;
 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
  
}

.client-logo:hover {
  transform: scale(1.1) translateY(-5px);
  
}

.client-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: absolute;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.client-logo .default-img {
  opacity: 1;
}

.client-logo .hover-img {
  opacity: 0;
}

.client-logo:hover .default-img {
  opacity: 0;
}

.client-logo:hover .hover-img {
  opacity: 1;
  transform: scale(1.05);
}

        
       /* News Section Styles - With Images */
.news-image {
  width: 100%;
  height: 316px;
  background: #ddd;
  overflow: hidden;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

/* Enhanced News Card Styling */
.news-card {
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid #8A8A8A;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.news-content {
  background: white;
  padding: 25px;
  border: 1px solid #C0C0C0;
  border-top: none;
}

.news-title {

  color: black;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  line-height: 1.4;
  min-height: 60px;
  display: flex;
  align-items: center;
}

.btn-read-article {
  background: var(--accent-green);
  color: var(--dark-blue);
  border: none;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 25px;
  transition: all 0.3s ease;
}

.btn-read-article:hover {
  background: rgb(245, 149, 32) ;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgb(245, 149, 32) ;
}

/* Responsive Design */
@media (max-width: 768px) {
  .news-image {
    height: 250px;
  }
  
  .news-title {
    font-size: 16px;
    min-height: auto;
  }
  
  .news-content {
    padding: 20px;
  }
  
  .feature-card {
    margin-bottom: 20px; /* Add vertical space between cards */
    border-radius: 20px;  /* Optional: reduce border-radius for small screens */
    padding: 24px 10px;   /* Optional: adjust padding for smaller screens */
  }
}
.btn-read-article {
    background: var(--accent-green);
    color: var(--dark-blue);
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 500;
    padding: 8px 20px;
}
        
.btn-show-more {
  background: linear-gradient(45deg, rgb(245, 149, 32), rgb(245, 149, 32));
  color: #2D1B69;
  border: none;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 50px;
}

/* Apply .btn-inquiry hover animation here */
.btn-show-more:hover {
  background: linear-gradient(45deg, rgb(245, 149, 32), rgb(245, 149, 32)); /* fallback to solid for consistency */
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgb(245, 149, 32);
}

/* Optional: Click Animation */
.btn-show-more:active {
  transform: scale(0.98);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

        
       /* Testimonials Section */
.testimonials-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.testimonial-card {
  background: white;
  padding: 35px 25px;
  margin-bottom: 30px;
  border-radius: 15px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}



/* Star Rating */
.star-rating {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
  justify-content: flex-start;
}

.star-rating i {
  color: #FFB800;
  font-size: 18px;
}

/* Testimonial Text */
.testimonial-text {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 25px;
  font-style: italic;
}

/* Client Name */
.testimonial-name {
  color: #2c3e50;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Client Title */
.testimonial-title {
  color: #7f8c8d;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
}

/* CTA Section */
.cta-text {
  color: var(--primary-purple);
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-inquiry {
  background: var(--accent-green);
  color: var(--dark-blue);
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 40px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-inquiry:hover {
  background: rgb(245, 149, 32) ;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgb(245, 149, 32) ;
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 25px 20px;
    margin-bottom: 20px;
  }
  
  .testimonial-text {
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  .star-rating {
    margin-bottom: 15px;
  }
  
  .star-rating i {
    font-size: 16px;
  }
  
  .cta-text {
    font-size: 16px;
    padding: 0 20px;
  }
  
  .btn-inquiry {
    padding: 12px 30px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .testimonials-section {
    padding: 60px 0;
  }
  
  .testimonial-text {
    font-size: 13px;
  }
  
  .testimonial-name {
    font-size: 14px;
  }
  
  .testimonial-title {
    font-size: 12px;
  }
}
        
        .faq-section {
          background: linear-gradient(180deg, #7A4ADF 0%, #15145F 100%);
          padding: 80px 0;
          color: white;
        }
        
        .faq-title {
          font-size: 70px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 50px;
        }
        
        .faq-item {
          border-bottom: 1px solid #D1D1D1;
          padding: 25px 0;
        }
        
        .faq-question {
          font-size: 20px;
          font-weight: 400;
        }
        
        .footer {
          background: linear-gradient(180deg, #7A4ADF 0%, #15145F 100%);
          padding: 60px 0;
          color: white;
        }
        
        .footer-brand {
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        
        .footer-description {
          color: rgba(255, 255, 255, 0.5);
          font-size: 10px;
          font-weight: 400;
          line-height: 2.5;
          margin-bottom: 30px;
        }
        
        .social-icons {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .facebook { background: #1778F2; }
        .twitter { background: #1DA1F2; }
        .instagram { background: #F00075; }
        .linkedin { background: #0D66C2; }
        
        .footer-heading {
          color: rgba(255, 255, 255, 0.9);
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .footer-link {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          display: block;
          margin-bottom: 8px;
        }
        
        .email-input {
          background: #151414;
          border: none;
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 7px;
          padding: 10px 15px;
          width: 100%;
          margin-bottom: 15px;
        }
        
        .btn-contact-footer {
          background: var(--accent-green);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 7px;
          font-weight: 500;
          padding: 15px 25px;
        }

       /* Services Grid Layout - 3 per row */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
}

/* Service Card with Background Image */
.service-card-image {
  position: relative;
  height: 220px;
  border-radius: 25px;
  overflow: hidden;
  text-decoration: none;
  color: white;
  display: block;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
}

.service-card-image:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.25));
  text-decoration: none;
  color: white;
}

/* Background Image */
.service-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s ease;
}

.service-card-image:hover .service-bg {
  transform: scale(1.1);
}

/* Dark Overlay */
.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(54, 0, 101, 0.8), rgba(122, 74, 223, 0.6));
  transition: all 0.4s ease;
}

.service-card-image:hover .service-overlay {
  background: linear-gradient(135deg, rgba(54, 0, 101, 0.95), rgba(122, 74, 223, 0.85));
}

/* Service Content */
.service-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  transition: all 0.4s ease;
}

.service-card-image:hover .service-content {
  transform: translate(-50%, -70%);
}
.service-card-image:hover .service-content .service-title {
  color: #ef8f11; /* This is the orange color from your snippet */
  transition: color 0.3s ease; /* Optional: Adds a smooth transition effect */
}
.service-title {
  font-size: 32px;
  font-weight: 600;
  font-family: 'Outfit', sans-serif;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Arrow Icon - Hide on hover */
.service-arrow-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: var(--accent-green);
  border-radius: 50%;
  transition: all 0.4s ease;
  opacity: 1;
}

.service-card-image:hover .service-arrow-icon {
  opacity: 0;
  transform: scale(0.8);
}

.service-arrow-icon svg {
  color: var(--primary-purple);
  transition: all 0.3s ease;
}

/* Service Description (Hidden by default, shown on hover) */
.service-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  transform: translateY(100%);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
  z-index: 3;
}

.service-card-image:hover .service-description {
  transform: translateY(0);
  opacity: 1;
}

.service-description p {
  font-size: 17px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  text-align: center;
  font-weight: 400;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .service-card-image {
    height: 200px;
  }
  
  .service-title {
    font-size: 28px;
  }
  
  .service-description {
    padding: 20px;
  }
}

@media (max-width: 479px) {
  .col-lg-2 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .feature-card {
    flex-direction: row;
    align-items: center;
    padding: 4px;
    border-radius: 20px;
    height: 65px !important;
  }

  .tall-card,
  .short-card {
    height: 65px !important;
  }

  .feature-icon {
    width: 58px;
    height: 58px;
    margin-bottom: 0;
    margin-right: 7px;
  }

  .feature-icon img {
    width: 58px !important;
    height: 58px !important;
  }

  .feature-title {
    font-size: 17px;
    text-align: left;
  }
}



/* Extra Small Mobile Responsive CSS for screens with max-width: 380px */
@media (max-width: 380px) {
  
  /* Global Styles */
  body {
    font-size: 13px;
  }
  
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }

  /* Hero Section */
  .hero-section {
    height: 350px;
    padding: 15px;
  }
  
  .hero-content h1 {
    font-size: 26px;
    margin-bottom: 12px;
    line-height: 1.1;
  }
  
  .hero-content p {
    font-size: 16px;
    margin-bottom: 20px;
  }
    
  
  .btn-live-help {
    font-size: 14px;
    padding: 10px 20px;
    margin-bottom: 12px;
  }
  
  .btn-contact-hero {
    font-size: 14px;
    padding: 10px 20px;
    color: black !important;
  }

  /* Section Titles */
  .section-title {
    font-size: 26px;
    margin-bottom: 12px;
    margin-top:30px !important;
    padding: 0 5px;
  }
  
  .section-subtitle {
    font-size: 16px;
    margin-bottom: 25px;
    padding: 0 5px;
  }

  /* Decorative Line */
  .line {
    width: 376px;
    height: 3px;
    background: #9F91B2;
    margin: 0 30px;
  }
  
  .dot {
    width: 5px;
    height: 5px;
  }

  /* Services Grid */
  .services-grid {
    gap: 12px;
    margin-top: 25px;
  }
  
  .service-card-image {
    height: 160px;
    border-radius: 20px;
  }
  
  .service-title {
    font-size: 20px;
    margin-bottom: 8px;
  }
  
  .service-arrow-icon {
    width: 30px;
    height: 30px;
  }
  
  .service-description {
    padding: 12px;
  }
  
  .service-description p {
    font-size: 13px;
    line-height: 1.4;
  }

  /* Who Section */
  .who-section {
    padding: 50px 0;
  }
  
  .curve-top {
    height: 80px;
    right: -5px;
  }
  
  .curve-bottom {
    height: 60px;
    left: -15px;
  }
  
  .who-main-title {
    font-size: 24px;
    gap: 8px;
  }
  
  .title-logo {
    width: 35px;
    height: 37px;
  }
  
  .who-description-centered {
    font-size: 1513px;
    padding: 0 5px;
    margin-bottom: 25px;
    line-height: 1.5;
  }
  
  .btn-our-story-centered {
    padding: 10px 20px;
    font-size: 13px;
  }

  /* Why Choose Us Section */
  .why-choose-section {
    padding: 35px 0;
  }

  .col-lg-2 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .feature-card {
    flex-direction: row;
    align-items: center;
    padding: 4px;
    border-radius: 20px;
    height: 60px !important;
  }

  .tall-card,
  .short-card {
    height: 60px !important;
  }

  .feature-icon {
    width: 54px;
    height: 54px;
    margin-bottom: 0;
    margin-right: 6px;
  }

  .feature-icon img {
    width: 54px !important;
    height: 54px !important;
  }

  .feature-title {
    font-size: 16px;
    text-align: left;
  }
  /* Clients Section */
  .clients-section {
    padding: 35px 0;
  }
  
  .clients-container {
    padding: 25px 10px;
    border-radius: 18px;
  }
  
  .client-logo {
    width: 70px;
    height: 70px;
    margin: 8px;
  }

  /* News Section */
  .news-section {
    padding: 35px 0;
  }
  
  .news-image {
    height: 180px;
    border-radius: 20px;
  }
  
  .news-card {
    border-radius: 20px;
    margin-bottom: 15px;
  }
  
  .news-title {
    font-size: 15px;
    margin-bottom: 12px;
    line-height: 1.3;
  }
  
  .news-content {
    padding: 12px;
  }
  
  .btn-read-article {
    font-size: 13px;
    padding: 7px 12px;
    border-radius: 12px;
  }
  
  .btn-show-more {
    font-size: 13px;
    padding: 8px 20px;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  /* Testimonials Section */
  .testimonials-section {
    padding: 35px 0;
  }
  
  .testimonial-card {
    padding: 18px 12px;
    margin-bottom: 12px;
    border-radius: 12px;
  }
  
  .testimonial-text {
    font-size: 13px;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  
  .testimonial-name {
    font-size: 13px;
  }
  
  .testimonial-title {
    font-size: 11px;
  }
  
  .star-rating {
    margin-bottom: 12px;
  }
  
  .star-rating i {
    font-size: 13px;
  }
  
  .cta-text {
    font-size: 15px;
    padding: 0 10px;
    margin-bottom: 18px;
    line-height: 1.4;
  }
  
  .btn-inquiry {
    padding: 10px 20px;
    font-size: 13px;
  }

  /* FAQ Section */
  .faq-section {
    padding: 35px 0;
  }
  
  .faq-title {
    font-size: 28px;
    margin-bottom: 25px;
  }
  
  .faq-item {
    padding: 18px 0;
  }
  
  .faq-question {
    font-size: 15px;
    line-height: 1.4;
  }

  /* Footer */
  .footer {
    padding: 35px 0;
  }
  
  .footer-brand {
    font-size: 22px;
    margin-bottom: 12px;
  }
  
  .footer-description {
    font-size: 11px;
    line-height: 1.6;
    margin-bottom: 18px;
  }
  
  .social-icons {
    margin-bottom: 18px;
    gap: 10px;
  }
  
  .social-icon {
    width: 28px;
    height: 28px;
  }
  
  .social-icon i {
    font-size: 12px;
  }
  
  .footer-heading {
    font-size: 13px;
    margin-bottom: 8px;
    margin-top: 18px;
  }
  
  .footer-link {
    font-size: 11px;
    margin-bottom: 5px;
  }
  
  .email-input {
    font-size: 11px;
    padding: 10px 12px;
    margin-bottom: 8px;
    border-radius: 8px;
  }
  
  .btn-contact-footer {
    font-size: 11px;
    padding: 10px 18px;
    border-radius: 8px;
  }

  /* Typography Adjustments */
  h1 { font-size: 20px !important; }
  h2 { font-size: 20px; }
  h3 { font-size: 18px; }
  h4 { font-size: 16px; }
  h5 { font-size: 14px; }
  h6 { font-size: 13px; }
  
  p {
    font-size: 13px;
    line-height: 1.4;
  }

  /* Grid System Adjustments */
  .row {
    margin-left: -5px;
    margin-right: -5px;
  }
  
  .col-md-4,
  .col-lg-2,
  .col-lg-3,
  .col-auto {
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 12px;
  }

  /* Button Adjustments */
  .btn {
    font-size: 13px;
    padding: 8px 16px;
    border-radius: 20px;
  }
  
  .btn-lg {
    font-size: 14px;
    padding: 10px 20px;
  }

  /* Form Elements */
  input[type="email"],
  input[type="text"],
  textarea {
    font-size: 13px;
    padding: 8px 12px;
  }

  /* Spacing Adjustments */
  .py-5 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
  
  .my-5 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  /* Container Adjustments */
  .container-fluid {
    padding-left: 5px;
    padding-right: 5px;
  }

  /* Specific Component Adjustments */
  .navbar-brand {
    font-size: 16px;
  }
  
  .navbar-nav .nav-link {
    font-size: 13px;
    padding: 6px 10px;
  }
  
  .card-body {
    padding: 12px;
  }

  /* Additional Mobile Optimizations */
  .section-title span {
    display: inline;
  }
  
  /* Ensure touch targets are adequate */
  a, button, .btn {
    min-height: 44px;
    min-width: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Optimize text readability */
  .text-small-mobile {
    font-size: 12px !important;
  }
  
  /* Reduce excessive whitespace */
  .mb-mobile-1 {
    margin-bottom: 0.25rem !important;
  }
  
  .p-mobile-1 {
    padding: 0.25rem !important;
  }
}
  /* Mobile Responsive CSS for screens with max-width: 480px */
@media (max-width: 480px) {
  
  /* Global Styles */
  body {
    font-size: 14px;
    overflow-x: hidden;
  }
  
  .container {
    padding-left: 15px;
    padding-right: 15px;
  }

  /* Hero Section */
  .hero-section {
    height: 400px;
    padding: 20px;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.2;
  }
  
  .hero-content p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  
  .hero-image {
    display: none; /* Hide hero image on very small screens */
  }
  
  .btn-live-help {
    font-size: 16px;
    padding: 12px 25px;
    margin-right: 10px;
    margin-bottom: 15px;
    display: block;
    width: 100%;
    margin-right: 0;
  }
  
  .btn-contact-hero {
    font-size: 16px;
    color: black !important;
    padding: 12px 25px;
    display: block;
    width: 100%;
  }

  /* Section Titles */
  .section-title {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 15px;
    line-height: 1.2;
    white-space: normal;
    text-align: center;
  }
  
  .section-subtitle {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 30px;
    padding: 0 10px;
  }

  /* Decorative Line */
  .decorative-line {
    flex-direction: column;
    align-items: center;
    margin-bottom: -10px;
  }
  
  .line {
    width: 376px;
    height: 3px;
    background: #9F91B2;
    margin: 0 30px;
  }
  
  .dot {
    width: 6px;
    height: 6px;
    margin: 5px 0;
  }

  /* Services Grid */
  .services-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 30px;
  }
  
  .service-card-image {
    height: 180px;
  }
  
  .service-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .service-arrow-icon {
    width: 35px;
    height: 35px;
  }
  
  .service-description {
    padding: 15px;
  }
  
  .service-description p {
    font-size: 14px;
  }

  /* Who Section */
  .who-section {
    padding: 60px 0;
  }
  
  .curve-top {
    width: 100%;
    height: 100px;
    right: -10px;
  }
  
  .curve-bottom {
    width: 100%;
    height: 80px;
    left: -20px;
  }
  
  .who-main-title {
    font-size: 28px;
    flex-direction: column;
    gap: 10px;
  }
  
  .title-logo {
    width: 40px;
    height: 42px;
  }
  
  .who-description-centered {
    font-size: 14px;
    padding: 0 10px;
    margin-bottom: 30px;
  }
  
  .btn-our-story-centered {
    padding: 12px 25px;
    font-size: 14px;
  }

  /* Why Choose Us Section */
  .why-choose-section {
    padding: 40px 0;
  }
  
  .feature-card {
    margin-bottom: 15px;
    border-radius: 20px;
    padding: 20px 10px;
    min-height: 250px;
  }
  
  .tall-card,
  .short-card {
    height: auto;
    min-height: 250px;
  }
  
  .feature-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
  
  .feature-icon img {
    width: 80px !important;
    height: 80px !important;
  }
  
  .feature-title {
    font-size: 18px;
    font-weight: 600;
  }
  
  /* Remove margin-top for feature cards on mobile */
  .col-lg-2[style*="margin-top"] {
    margin-top: 0 !important;
  }

  /* Clients Section */
  .clients-section {
    padding: 40px 0;
  }
  
  .clients-container {
    padding: 30px 15px;
    border-radius: 20px;
  }
  
  .client-logo {
    width: 80px;
    height: 80px;
    margin: 10px;
  }

  /* News Section */
  .news-section {
    padding: 40px 0;
  }
  
  .news-image {
    height: 200px;
  }
  
  .news-title {
    font-size: 16px;
    min-height: auto;
    margin-bottom: 15px;
  }
  
  .news-content {
    padding: 15px;
  }
  
  .btn-read-article {
    font-size: 14px;
    padding: 8px 15px;
  }
  
  .btn-show-more {
    padding: 16px 35px;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  /* Testimonials Section */
  .testimonials-section {
    padding: 40px 0;
  }
  
  .testimonial-card {
    padding: 20px 15px;
    margin-bottom: 15px;
  }
  
  .testimonial-text {
    font-size: 14px;
    margin-bottom: 15px;
  }
  
  .testimonial-name {
    font-size: 14px;
  }
  
  .testimonial-title {
    font-size: 12px;
  }
  
  .star-rating {
    margin-bottom: 15px;
  }
  
  .star-rating i {
    font-size: 14px;
  }
  
  .cta-text {
    font-size: 16px;
    padding: 0 15px;
    margin-bottom: 20px;
  }
  
  .btn-inquiry {
    padding: 12px 25px;
    font-size: 14px;
  }

  /* FAQ Section */
  .faq-section {
    padding: 40px 0;
  }
  
  .faq-title {
    font-size: 32px;
    margin-bottom: 30px;
  }
  
  .faq-item {
    padding: 20px 0;
  }
  
  .faq-question {
    font-size: 16px;
  }

  /* Footer */
  .footer {
    padding: 40px 0;
  }
  
  .footer-brand {
    font-size: 24px;
    margin-bottom: 15px;
    padding-top: 0;
  }
  
  .footer-description {
    font-size: 12px;
    line-height: 1.8;
    margin-bottom: 20px;
  }
  
  .social-icons {
    margin-bottom: 20px;
    justify-content: center;
  }
  
  .social-icon {
    width: 32px;
    height: 32px;
  }
  
  .footer-heading {
    font-size: 14px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  
  .footer-link {
    font-size: 12px;
    margin-bottom: 6px;
  }
  
  .email-input {
    font-size: 12px;
    padding: 12px 15px;
    margin-bottom: 10px;
  }
  
  .btn-contact-footer {
    font-size: 12px;
    padding: 12px 20px;
    width: 100%;
  }

  /* Header Responsive (if you have a header component) */
  .navbar-brand {
    font-size: 18px;
  }
  
  .navbar-nav .nav-link {
    font-size: 14px;
    padding: 8px 12px;
  }
  
  .navbar-toggler {
    padding: 4px 8px;
    font-size: 14px;
  }

  /* Utility Classes for Mobile */
  .text-center-mobile {
    text-align: center !important;
  }
  
  .mb-mobile-3 {
    margin-bottom: 1rem !important;
  }
  
  .p-mobile-2 {
    padding: 0.5rem !important;
  }

  /* Grid System Adjustments */
  .row {
    margin-left: -10px;
    margin-right: -10px;
  }
  
  .col-md-4,
  .col-lg-2,
  .col-lg-3,
  .col-auto {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
  }

  /* Button Adjustments */
  .btn {
    font-size: 14px;
    padding: 10px 20px;
    border-radius: 25px;
  }
  
  .btn-lg {
    font-size: 16px;
    padding: 12px 25px;
  }

  /* Form Elements */
  input[type="email"],
  input[type="text"],
  textarea {
    font-size: 14px;
    padding: 10px 15px;
  }

  /* Spacing Adjustments */
  .py-5 {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
  }
  
  .my-5 {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }

  /* Image Responsiveness */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Card Adjustments */
  .card {
    margin-bottom: 15px;
  }
  
  .card-body {
    padding: 15px;
  }

  /* Text Adjustments */
  h1 { font-size: 28px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4 { font-size: 18px; }
  h5 { font-size: 16px; }
  h6 { font-size: 14px; }
  
  p {
    font-size: 14px;
    line-height: 1.5;
  }

  /* Hide unnecessary elements on very small screens */
  .hide-mobile {
    display: none !important;
  }
  
  /* Show only on mobile */
  .show-mobile {
    display: block !important;
  }

  /* Flexbox adjustments */
  .d-flex {
    flex-direction: column;
  }
  
  .justify-content-between {
    justify-content: center;
  }
  
  .align-items-center {
    align-items: stretch;
  }

  /* Override any conflicting styles */
  .container-fluid {
    padding-left: 10px;
    padding-right: 10px;
  }
  
  /* Fix any overflow issues */
  * {
    box-sizing: border-box;
  }
  
  body, html {
    overflow-x: hidden;
  }
}

@media (max-width: 480px) {
  .service-title {
    font-size: 24px;
  }
  
  .service-arrow-icon {
    width: 40px;
    height: 40px;
  }
  
  .footer-brand {
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 20px;
          padding-top:80px
        }
}


/* Who Section */
.who-section {
  position: relative;
  background: linear-gradient(135deg, #6B46C1 0%, #9333EA 50%, #7C3AED 100%);
  padding: 120px 0;
  overflow: hidden;
  color: white;
}

/* Vector Curve Images - Much Larger and More Prominent */
.curve-top {
  position: absolute;
  top: -20px;
  right: -50px;
  width: 70%;
  height: 300px;
  max-width: none;
  z-index: 1;
  opacity: 1;
  object-fit: cover;
}

.curve-bottom {
  position: absolute;
  bottom: -30px;
  left: -80px;
  width: 80%;
  height: 250px;
  max-width: none;
  z-index: 1;
  opacity: 1;
  object-fit: cover;
}

/* Content Container */
.who-content-centered {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 50px;
}

/* Title Container */
.who-title-container {
  margin-bottom: 40px;
  text-align: center;
}

.who-main-title {
  font-size: 64px;
  font-weight: 300;
  color: white;
  margin: 0;
  line-height: 1.2;
  font-family: 'Outfit', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

/* Logo integrated in title */
.logo-in-title {
  display: inline-flex;
  align-items: center;
}

.title-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
 
  border-radius: 10px;
  padding: 8px;
  
  transition: transform 0.3s ease;
}

.title-logo:hover {
  transform: scale(1.05);
}

/* Description - Centered */
.who-description-centered {
  font-size: 18px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 40px;
  font-weight: 300;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

/* Button Container - Centered */
.who-button-container {
  display: flex;
  justify-content: center;
}

/* Our Story Button */
.btn-our-story-centered {
  background: linear-gradient(45deg, rgb(245, 149, 32) , rgb(245, 149, 32) );
  color: #2D1B69;
  border: none;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgb(245, 149, 32) ;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-our-story-centered:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgb(245, 149, 32) ;
  background: linear-gradient(45deg, rgb(245, 149, 32) , rgb(240, 136, 9) );
}

/* Responsive Design */
@media (max-width: 1200px) {
  .curve-top {
    width: 60%;
    height: 250px;
    right: -30px;
  }
  
  .curve-bottom {
    width: 70%;
    height: 200px;
    left: -60px;
  }
  
  .who-content-centered {
    padding: 0 30px;
  }

  .col-lg-2 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-2[style*="margin-top"] {
    margin-top: 40px !important;
  }

  .feature-card {
    flex-direction: row;
    align-items: center;
    padding: 8px;
    border-radius: 30px;
    height: 100px !important;
  }

  .tall-card,
  .short-card {
    height: 100px !important;
  }

  .feature-icon {
    width: 90px;
    height: 90px;
    margin-bottom: 0;
    margin-right: 12px;
  }

  .feature-icon img {
    width: 90px !important;
    height: 90px !important;
  }

  .feature-title {
    font-size: 28px;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .who-section {
    padding: 80px 0;
  }

  .curve-top {
    width: 80%;
    height: 180px;
    right: -20px;
  }
  
  .curve-bottom {
    width: 90%;
    height: 150px;
    left: -40px;
  }

  .who-main-title {
    font-size: 48px;
    flex-direction: column;
    gap: 15px;
  }

  .title-logo {
    width: 60px;
    height: 63px;
  }

  .who-description-centered {
    font-size: 16px;
    padding: 0 20px;
  }

  .btn-our-story-centered {
    padding: 14px 30px;
    font-size: 14px;
  }

  .col-lg-2 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-lg-2[style*="margin-top"] {
    margin-top: 0 !important;
  }

  .feature-card {
    flex-direction: row;
    align-items: center;
    padding: 6px;
    border-radius: 25px;
    height: 80px !important;
  }

  .tall-card,
  .short-card {
    height: 80px !important;
  }

  .feature-icon {
    width: 72px;
    height: 72px;
    margin-bottom: 0;
    margin-right: 10px;
  }

  .feature-icon img {
    width: 72px !important;
    height: 72px !important;
  }


  .feature-title {
    font-size: 22px;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .curve-top {
    width: 100%;
    height: 120px;
    right: -10px;
  }
  
  .curve-bottom {
    width: 100%;
    height: 100px;
    left: -20px;
  }

  .who-main-title {
    font-size: 36px;
  }

  .title-logo {
    width: 50px;
    height: 52px;
  }

  .who-description-centered {
    font-size: 14px;
    padding: 0 15px;
  }

  .col-lg-2 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .feature-card {
    flex-direction: row;
    align-items: center;
    padding: 5px;
    border-radius: 20px;
    height: 70px !important;
  }

  .tall-card,
  .short-card {
    height: 70px !important;
  }

  .feature-icon {
    width: 63px;
    height: 63px;
    margin-bottom: 0;
    margin-right: 8px;
  }

  .feature-icon img {
    width: 63px !important;
    height: 63px !important;
  }

  .feature-title {
    font-size: 18px;
    text-align: left;
  }
}

      `}</style>

      <Header />
      <HeroSection />
      <section className="py-5 reveal-on-scroll">
        {/* What We Do Section */}
        <section className="py-5">
          <div className="container">
            <div className="decorative-line">
              <div className="dot"></div>
              <div className="line"></div>
              <h2 className="section-title mx-4">
                What <span style={{ color: "#ef8f11" }}>We</span> Do
              </h2>
              <div className="line"></div>
              <div className="dot"></div>
            </div>
            <p className="section-subtitle">Expert to Make IT Perfect</p>

            <div className="services-grid">
              {/* Technology Service */}
              <a href="/services/technology" className="service-card-image">
                <div
                  className="service-bg"
                  style={{
                    backgroundImage: "url(/images/services/technology-bg.png)",
                  }}
                ></div>
                <div className="service-overlay"></div>
                <div className="service-content">
                  <h3 className="service-title">TECHNOLOGY</h3>
                  <div className="service-arrow-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="service-description">
                  <p>
                    Explore our Technology services for modern IT solutions,
                    from networking to video conferencing, enhancing your
                    digital infrastructure.
                  </p>
                </div>
              </a>

              {/* Cloud Service */}
              <a
                href="/services/cloud-solutions"
                className="service-card-image"
              >
                <div
                  className="service-bg"
                  style={{
                    backgroundImage: "url(/images/services/cloud-bg.png)",
                  }}
                ></div>
                <div className="service-overlay"></div>
                <div className="service-content">
                  <h3 className="service-title">CLOUD</h3>
                  <div className="service-arrow-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="service-description">
                  <p>
                    Experience cloud flexibility with our Cloud Solutions,
                    including servers,
                    <br /> security, and backup, <br />
                    enhancing your business efficiency.
                  </p>
                </div>
              </a>

              {/* Software Service */}
              <a href="/services/software" className="service-card-image">
                <div
                  className="service-bg"
                  style={{
                    backgroundImage: "url(/images/services/software-bg.png)",
                  }}
                ></div>
                <div className="service-overlay"></div>
                <div className="service-content">
                  <h3 className="service-title">SOFTWARE</h3>
                  <div className="service-arrow-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="service-description">
                  <p>
                    Custom software development solutions to streamline your
                    <br />
                    business processes and <br />
                    enhance operational efficiency.
                  </p>
                </div>
              </a>

              {/* IT Support Service */}
              <a href="/services/support" className="service-card-image">
                <div
                  className="service-bg"
                  style={{
                    backgroundImage: "url(/images/services/technology-bg.png)",
                  }}
                ></div>
                <div className="service-overlay"></div>
                <div className="service-content">
                  <h3 className="service-title">IT SUPPORT</h3>
                  <div className="service-arrow-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="service-description">
                  <p>
                    Comprehensive IT support services including helpdesk,
                    maintenance,
                    <br /> and project management <br />
                    for optimized systems.
                  </p>
                </div>
              </a>

              {/* IT Products Service */}
              <a href="/services/products" className="service-card-image">
                <div
                  className="service-bg"
                  style={{
                    backgroundImage: "url(/images/services/technology-bg.png)",
                  }}
                ></div>
                <div className="service-overlay"></div>
                <div className="service-content">
                  <h3 className="service-title">IT PRODUCTS</h3>
                  <div className="service-arrow-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="service-description">
                  <p>
                    Quality IT hardware and products to support your business
                    infrastructure
                    <br /> and
                    <br /> technology requirements.
                  </p>
                </div>
              </a>

              {/* Academic Service */}
              <a href="/services/academic" className="service-card-image">
                <div
                  className="service-bg"
                  style={{
                    backgroundImage: "url(/images/services/technology-bg.png)",
                  }}
                ></div>
                <div className="service-overlay"></div>
                <div className="service-content">
                  <h3 className="service-title"> ACADEMIC</h3>
                  <div className="service-arrow-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="service-description">
                  <p>
                    Educational technology solutions <br />
                    and training programs to enhance
                    <br /> learning and
                    <br /> skill development.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </section>

      <WhoSection className="reveal-on-scroll" />

      <section className="why-choose-section reveal-on-scroll">
        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container px-xxl-5 px-lg-4 px-3">
            <div className="decorative-line">
              <div className="dot"></div>
              <div className="line"></div>
              <h2 className="section-title mx-4">
                Why <span style={{ color: "#ef8f11" }}>Choose</span> Us
              </h2>
              <div className="line"></div>
              <div className="dot"></div>
            </div>
            <p className="section-subtitle" style={{ marginBottom: "100px" }}>
              Your Trusted IT Partner in Sri Lanka
            </p>

            <div className="row justify-content-center">
              <div className="col-lg-2">
                <div className="feature-card tall-card">
                  <div className="feature-icon">
                    <img src="/images/icons/2.svg" alt="Expert Team" />
                  </div>
                  <div className="feature-title">Expert Team</div>
                </div>
              </div>

              <div className="col-lg-2" style={{ marginTop: "114px" }}>
                <div className="feature-card tall-card">
                  <div className="feature-icon">
                    <img src="/images/icons/3.svg" alt="Focus on Quality" />
                  </div>
                  <div className="feature-title">Focus on Quality</div>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="feature-card short-card mb-4">
                  <div className="feature-icon">
                    <img src="/images/icons/4.svg" alt="Innovative Solutions" />
                  </div>
                  <div className="feature-title">Innovative Solutions</div>
                </div>
                <div className="feature-card short-card">
                  <div className="feature-icon">
                    <img src="/images/icons/5.svg" alt="Job Placement" />
                  </div>
                  <div className="feature-title">Job Placement</div>
                </div>
              </div>

              <div className="col-lg-2" style={{ marginTop: "114px" }}>
                <div className="feature-card tall-card">
                  <div className="feature-icon">
                    <img src="/images/icons/6.svg" alt="Certified Trainers" />
                  </div>
                  <div className="feature-title">Certified Trainers</div>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="feature-card tall-card">
                  <div className="feature-icon">
                    <img src="/images/icons/7.svg" alt="24x7 Support" />
                  </div>
                  <div className="feature-title">24x7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="clients-section reveal-on-scroll">
        {/* Our Clients Section */}
        <section className="clients-section">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: "60px" }}>
              Our Clients In <span style={{ color: "#ef8f11" }}>Success</span>
            </h2>
            <div className="clients-container">
              <div className="row justify-content-center mb-4">
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/castle-hover.png"
                      alt="Client 1"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/castle.svg"
                      alt="Client 1 Hover"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/clever-hover.png"
                      alt="Client 2"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/clever.svg"
                      alt="Client 2 Hover"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/doo-hover.png"
                      alt="Client 3"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/doo.svg"
                      alt="Client 3 Hover"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/durd-hover.png"
                      alt="Client 4"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/durd.svg"
                      alt="Client 4 Hover"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/ella-hover.png"
                      alt="Client 5"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/ella.svg"
                      alt="Client 5 Hover"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/fire-hover.png"
                      alt="Client 6"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/fire.svg"
                      alt="Client 6 Hover"
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/swiss-hover.png"
                      alt="Client 7"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/swiss.svg"
                      alt="Client 7 Hover"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/tra-hover.png"
                      alt="Client 8"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/tra.svg"
                      alt="Client 8 Hover"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <div className="client-logo">
                    <img
                      className="default-img"
                      src="/images/clients/vision-hover.png"
                      alt="Client 9"
                    />
                    <img
                      className="hover-img"
                      src="/images/clients/vision.svg"
                      alt="Client 9 Hover"
                    />
                  </div>
                </div>
                {/* <div className="col-auto">
                <div className="client-logo">
                  <img src="/images/clients/10.png" alt="Client 10" />
                </div>
              </div>
              <div className="col-auto">
                <div className="client-logo">
                  <img src="/images/clients/11.png" alt="Client 11" />
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="news-section reveal-on-scroll">
        {/* News Section */}
        <section className="news-section">
          <div className="container">
            <h2 className="section-title" style={{ marginBottom: "60px" }}>
              News and <span style={{ color: "#ef8f11" }}>Updates</span>
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="news-card">
                  <div className="news-image">
                    <img src="/images/news/news.png" alt="IFS Appoints News" />
                  </div>
                  <div className="news-content">
                    <div className="news-title">
                      IFS Appoints Shown Jusiter as President, Energy &
                      Resources
                    </div>
                    <button className="btn btn-read-article">
                      Read article
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="news-card">
                  <div className="news-image">
                    <img
                      src="/images/news/news.png"
                      alt="Technology Innovation News"
                    />
                  </div>
                  <div className="news-content">
                    <div className="news-title">
                      Latest Technology Innovations Transforming Business
                      Operations
                    </div>
                    <button className="btn btn-read-article">
                      Read article
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="news-card">
                  <div className="news-image">
                    <img
                      src="/images/news/news.png"
                      alt="Cloud Solutions News"
                    />
                  </div>
                  <div className="news-content">
                    <div className="news-title">
                      Cloud Solutions Drive Digital Transformation in 2025
                    </div>
                    <button className="btn btn-read-article">
                      Read article
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="news-card">
                  <div className="news-image">
                    <img
                      src="/images/news/news.png"
                      alt="Cloud Solutions News"
                    />
                  </div>
                  <div className="news-content">
                    <div className="news-title">
                      Cloud Solutions Drive Digital Transformation in 2025
                    </div>
                    <button className="btn btn-read-article">
                      Read article
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-show-more">Show More News</button>
            </div>
          </div>
        </section>
      </section>

      <section className="testimonials-section reveal-on-scroll">
        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">
              What Our <span style={{ color: "#ef8f11" }}>Clients</span> Say
            </h2>
            <div className="row">
              <div className="col-md-4">
                <div className="testimonial-card">
                  {/* Star Rating */}
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-text">
                    Yet preference connection unpleasant yet melancholy but end
                    appearance. And excellence partiality estimating terminated
                    day everything.
                  </div>
                  <div className="testimonial-name">Sabo Masties</div>
                  <div className="testimonial-title">Founder @ Rolex</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial-card">
                  {/* Star Rating */}
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-text">
                    Yet preference connection unpleasant yet melancholy but end
                    appearance. And excellence partiality estimating terminated
                    day everything.
                  </div>
                  <div className="testimonial-name">Sam</div>
                  <div className="testimonial-title">Founder @ Migelko</div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial-card featured">
                  {/* Star Rating */}
                  <div className="star-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="testimonial-text">
                    Yet preference connection unpleasant yet melancholy but end
                    appearance. And excellence partiality estimating terminated
                    day everything.
                  </div>
                  <div className="testimonial-name">Mansur</div>
                  <div className="testimonial-title">Founder @ Google</div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="cta-text">
                Get in touch with us. Our experienced team is happily waiting to
                hear from you
              </p>
              <button className="btn btn-inquiry">Send Us an Inquiry</button>
            </div>
          </div>
        </section>
      </section>

      {/* <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {[
                "What services does ItPlus offer?",
                "Do you provide after-sales support?",
                "What is the purpose of ItPlus",
                "Can you customize solutions based on our business needs?",
                "How do I get a quote for my project?",
                "Is your team certified and experienced?",
                "Do you serve areas outside Colombo or major cities?"
              ].map((question, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question">{question}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
      {/* <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-brand">IT PLUS</div>
              <div className="footer-description">
                Global destination for specialized IT solutions, ideal for startups and businesses seeking to enhance their digital presence.
              </div>
              <div className="social-icons">
                <div className="social-icon facebook"><i className="fab fa-facebook-f"></i></div>
                <div className="social-icon twitter"><i className="fab fa-twitter"></i></div>
                <div className="social-icon instagram"><i className="fab fa-instagram"></i></div>
                <div className="social-icon linkedin"><i className="fab fa-linkedin-in"></i></div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-heading">COMPANY</div>
              <a href="#" className="footer-link">About us</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
            <div className="col-lg-2">
              <div className="footer-heading">SERVICES</div>
              <a href="#" className="footer-link">Influencer</a>
              <a href="#" className="footer-link">Courses</a>
              <a href="#" className="footer-link">Services</a>
              <a href="#" className="footer-link">CRM</a>
              <a href="#" className="footer-link">LMS</a>
              <a href="#" className="footer-link">User Testing</a>
              <a href="#" className="footer-link">Web Development</a>
              <a href="#" className="footer-link">Mobile Development</a>
            </div>
            <div className="col-lg-2">
              <div className="footer-heading">CONTACT US</div>
              <div className="footer-link">info@adtech.com</div>
              <div className="footer-link">Colombo Sri Lanka</div>
            </div>
            <div className="col-lg-3">
              <div className="footer-heading">MEET US in</div>
              <input type="email" className="email-input" placeholder="enter your email" />
              <button className="btn btn-contact-footer">Contact</button>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
