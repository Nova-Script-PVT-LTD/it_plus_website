"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

// Counter component that animates numbers
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const startCount = 0;
    const endCount = parseInt(end);

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(
        startCount + (endCount - startCount) * easeOutQuart
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isVisible, end, duration]);

  return (
    <h3 ref={counterRef}>
      {count}
      {suffix}
    </h3>
  );
};

export default function AboutUsPage() {
  // Inject CSS using useEffect
  useEffect(() => {
    // Load Font Awesome if not already loaded
    const fontAwesomeLink = document.querySelector(
      'link[href*="font-awesome"]'
    );
    if (!fontAwesomeLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      document.head.appendChild(link);
    }

    const style = document.createElement("style");
    style.textContent = `
      .about-us-page {
      font-family: 'Outfit', sans-serif;
      background: white;
      overflow-x: hidden;
    }

    /* Main Content Section */
    .main-content {
      background: white;
      min-height: 100vh;
      position: relative;
    }

    /* Hero Section */
    .hero-section-about {
      background-color: #31086C;
      color: white;
      padding: 80px 0;
      text-align: center;
    }

    .hero-container-about {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 60px;
      display: flex;
      flex-direction: column;
      gap: 40px; /* Retain the gap from your previous request */
    }

    .hero-image-content {
      margin-bottom: 40px; /* Retain the gap */
    }

    .hero-image-content img {
      width: 100%;
      height: auto;
      display: block;
      border: none;
      border-radius: 0; /* Remove rounded corners */
      padding: 0;
      margin: 0;
      background: #31086C; /* Match the section background */
      object-fit: cover; /* Ensure no edges from scaling */
    }

    .hero-content-about h1 .our-text {
      color: white;
    }

    .hero-content-about h1 .story-text {
      color: rgb(245, 149, 32);
    }

    .hero-content-about h1 {
      margin-bottom: 20px;
    }

    .hero-content-about p {
      font-size: 18px;
      line-height: 1.8;
      max-width: 900px;
      margin: 0 auto 40px;
      color: #e0e0e0;
    }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 20px;
        margin-top: 40px;
      }

      .stat-item {
        background: rgb(245, 149, 32); /* Slightly lighter purple for stat backgrounds */
        padding: 20px 15px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .stat-item::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
        transform: rotate(45deg);
        transition: all 0.6s ease;
        opacity: 0;
      }

      .stat-item:hover {
        transform: translateY(-5px) scale(1.02);
      }

      .stat-item:hover::before {
        animation: shimmer 0.6s ease-in-out;
      }

      @keyframes shimmer {
        0% {
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateX(100%) translateY(100%) rotate(45deg);
          opacity: 0;
        }
      }

      .stat-item h3 {
        font-size: 32px;
        font-weight: 700;
        color: black; /* Gold color for numbers */
        margin-bottom: 8px;
        position: relative;
        z-index: 1;
      }

      .stat-item p {
        font-size: 16px;
        color: black;
        margin: 0;
        position: relative;
        z-index: 1;
      }

      /* About Section (keeping the existing structure for "About Us" heading and main text) */
      .about-section {
        padding: 80px 0;
        background: white;
      }

      .about-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 60px;
        display: flex;
        align-items: center;
        gap: 80px;
      }

      .about-image {
        flex: 0 0 400px;
        height: 280px;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        position: relative;
      }

      .about-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .about-content {
        flex: 1;
        background: white;
        padding: 50px 45px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
      }

      .about-content:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
      }

      .about-content h2 {
        font-size: 42px;
        font-weight: 700;
        /* The color property here is for any text in h2 NOT covered by spans.
        It's good practice to keep it, but the span colors will override it. */
        color: #360065;
        margin-bottom: 28px;
        line-height: 1.2;
        position: relative; /* Essential for positioning the ::after element */
       }

      .about-content h2 .about-text {
       color: #360065;
      }

      .about-content h2 .us-text {
       color: rgb(245, 149, 32); /* This is your orange color */
    }

      

      .about-content p {
        font-size: 16px;
        line-height: 1.7;
        color: #4a5568;
        margin: 0;
        text-align: justify;
      }

      /* Locations Section */
      .locations-section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.locations-container {
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.locations-heading {
  position: relative;
  display: inline-block;
  padding-bottom: 10px; /* Space for the underline */
}



.our-locations-text {
  margin-right: 10px; /* Space between "Our" and "Locations" */
  color:  #360065;
}



      .locations-container h2 {
        font-size: 42px;
        font-weight: 700;
        
        margin-bottom: 28px;
        line-height: 1.2;
        position: relative;
        text-align: center;
      }
        .loactions-container h2 .our-locations-text {
        color: #360065;
      }
      .locations-container h2 .locations-text {
        color: rgb(245, 149, 32); /* This is your orange color */
      }

      .locations-container h2::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: white;
        border-radius: 2px;
      }

      .world-map-container {
  width: 100%;
  height: 100%;
}

.world-map {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container */
  display: block;
}

      

      

      /* Mission Vision Section */
      .mission-vision-section {
        padding: 80px 0;
        background: #f8fafc;
      }

      .mission-vision-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 60px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
      }

      .mission-card,
      .vision-card {
        text-align: center;
        background: white;
        padding: 40px 30px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
      }

      .mission-card:hover,
      .vision-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      }

      .mission-card h3,
      .vision-card h3 {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 20px;
        
        
        position: relative;
      }
      
      /* Style for the "Our" part of "Our Mission" and "Our Vision" */
      .mission-card h3 .our-prefix-text,
      .vision-card h3 .our-prefix-text {
      color: #31086C; /* The specified dark purple color */
      }

     /* Style for the "Mission" and "Vision" part of the headers */
      .mission-card h3 .mission-vision-main-text,
      .vision-card h3 .mission-vision-main-text {
      color: rgb(245, 149, 32); /* Your orange color */
     }

      

      .mission-card p,
      .vision-card p {
        font-size: 16px;
        line-height: 1.7;
        color: #4a5568;
        max-width: 480px;
        margin: 0 auto;
        text-align: justify;
      }

      /* Working With ITPlus Section */
      .working-section {
        padding: 80px 0;
        background: white;
      }

      .working-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 60px;
      }

      .working-header {
        text-align: center;
        margin-bottom: 60px;
      }

      .working-header h2 {
        font-size: 42px;
        font-weight: 700;
        
        line-height: 1.2;
        margin-bottom: 20px;
        position: relative;
        text-align: center;
      }

      /* Style for the "Working With" part of the header */
      .working-header h2 .working-with-text {
        color: #31086C; /* The specified dark purple color */
      }

      /* Style for the "ItPlus" part of the header */
      .working-header h2 .itplus-text {
        color: rgb(245, 149, 32); /* Your orange color */
     }

      

      .working-header p {
        font-size: 16px;
        color: #4a5568;
        max-width: 750px;
        margin: 0 auto;
        line-height: 1.6;
      }

      .working-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
      }

      .working-card {
        background: white;
        border-radius: 15px;
        padding: 40px 30px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;
      }

      .working-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
      }

      .working-icon {
        width: 80px;
        height: 80px;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 25px;
        transition: all 0.3s ease;
      }

      .working-card:nth-child(1) .working-icon {
        background: #7A4ADF;
      }

      .working-card:nth-child(2) .working-icon {
        background: #7A4ADF;
      }

      .working-card:hover .working-icon {
        transform: scale(1.05);
      }

      .working-icon i {
        font-size: 32px;
        color: white;
      }

      .working-card h3 {
        font-size: 24px;
        font-weight: 600;
        color: #2d3748;
        margin-bottom: 15px;
      }

      .working-card p {
        font-size: 15px;
        line-height: 1.6;
        color: #4a5568;
        margin: 0;
      }

      /* Responsive Design */
      @media (max-width: 1200px) {
        .hero-container-about,
        .about-container,
        .locations-container,
        .mission-vision-container,
        .working-container {
          padding: 0 40px;
        }

        .about-container {
          gap: 50px;
        }

        .about-image {
          flex: 0 0 350px;
          height: 250px;
        }

        .mission-vision-container {
          gap: 60px;
        }
      }

      @media (max-width: 992px) {
        .about-container {
          flex-direction: column;
          text-align: center;
          gap: 40px;
        }

        .about-image {
          flex: none;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        .mission-vision-container {
          grid-template-columns: 1fr;
          gap: 50px;
        }

        .working-cards {
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .hero-content-about h1,
        .about-content h2,
        .locations-container h2,
        .mission-card h3,
        .vision-card h3,
        .working-header h2 {
          font-size: 38px;
        }

        .hero-content-about p {
          font-size: 17px;
        }

        .stats-grid {
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }

        .stat-item h3 {
          font-size: 28px;
        }

        .stat-item p {
          font-size: 15px;
        }
      }

      @media (max-width: 768px) {
        .hero-container-about,
        .about-container,
        .locations-container,
        .mission-vision-container,
        .working-container {
          padding: 0 30px;
        }

        .hero-section-about {
          padding: 60px 0 50px;
        }

        .about-section {
          padding: 60px 0 50px;
        }

        .locations-section {
          padding: 60px 0;
        }

        .mission-vision-section {
          padding: 40px 0;
        }

        .working-section {
          padding: 0 0 80px;
        }

        .about-content {
          padding: 30px 25px;
        }

        .hero-content-about h1,
        .about-content h2,
        .locations-container h2,
        .mission-card h3,
        .vision-card h3,
        .working-header h2 {
          font-size: 32px;
        }
        
        .hero-content-about p {
          font-size: 16px;
        }

        .working-card {
          padding: 30px 25px;
        }

        .working-icon {
          width: 60px;
          height: 60px;
        }

        .working-icon i {
          font-size: 24px;
        }
      }

      @media (max-width: 480px) {
        .hero-container-about,
        .about-container,
        .locations-container,
        .mission-vision-container,
        .working-container {
          padding: 0 20px;
        }

        .hero-content-about h1,
        .about-content h2,
        .locations-container h2,
        .mission-card h3,
        .vision-card h3,
        .working-header h2 {
          font-size: 28px;
        }

        .hero-content-about p,
        .about-content p,
        .mission-card p,
        .vision-card p,
        .working-header p {
          font-size: 14px;
        }

        .stats-grid {
          grid-template-columns: 1fr; /* Stack stats on very small screens */
        }

        .stat-item h3 {
          font-size: 24px;
        }

        .stat-item p {
          font-size: 14px;
        }

        .working-card {
          padding: 25px 20px;
        }
        
        .footer-brand {
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 20px;
          padding-top:80px
        }
      }
    `;

    document.head.appendChild(style);

    // Cleanup function to remove the style when component unmounts
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="about-us-page">
      <Header />

      <div className="main-content">
        {/* Hero Section - Our Story & Stats */}
        <section className="hero-section-about">
           {/* Main Image */}
              <div className="hero-image-content">
                <img src="images\about_image.png" alt="About Us" />
              </div>
          <div className="hero-container-about">
            <div className="hero-content-about">
             
              {/* Header */}
              <div className="hero-header">
                <h1>
                  <span className="our-text">Our</span>&nbsp;
                  <span className="story-text">Story</span>
                </h1>
              </div>
              
              
              
              {/* Text Content */}
              <div className="hero-text-content">
                <p>
                  Established in 2015, ITPlus is a leading technology company in
                  Sri Lanka, dedicated to empowering businesses and individuals
                  through innovative and expert-driven IT solutions. We specialize
                  in services including Enterprise IT Solutions, Cloud Services,
                  System and Hardware Development, Contract-based IT Support, and
                  a wide range of IT Products. Our specialized IT Training Academy
                  is recognized for developing industry-focused human skills,
                  enabling a digitally advanced IT community across the nation.
                </p>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-item">
                <AnimatedCounter end="10" suffix="+" />
                <p>Years</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="800" suffix="+" />
                <p>Clients</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="300" suffix="+" />
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="50" suffix="+" />
                <p>Staff</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="100" suffix="+" />
                <p>Brands</p>
              </div>
              <div className="stat-item">
                <AnimatedCounter end="200" suffix="+" />
                <p>Training</p>
              </div>
            </div>
          </div>
        </section>


        {/* About Section - Existing "About Us" content */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop"
                alt="IT Team Meeting"
              />
            </div>
            <div className="about-content">
              <h2>
                <span class="about-text">About</span>&nbsp;
                <span class="us-text">Us</span>
              </h2>
              <p>
                OneAccess Technologies is a trusted team of experts specializing
                in Network Solutions, Wi-Fi Systems, VoIP, CCTV, and IT Support
                Services in Sri Lanka. Established in 2015 by K.M. Erandi
                Rodrigo, we bring over 10 years of expertise in system
                architecture, network engineering, telecommunications, and
                project management to deliver cutting-edge solutions. Whether
                you need enterprise networking, wireless connectivity, or all
                the IT related support and solutions, we're here to meet all
                your technology needs with reliability and professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="locations-section">
          <div className="locations-container">
            <h2 className="locations-heading">
              <span className="our-locations-text">Our</span>
              <span className="locations-text">Locations</span>
            </h2>
            <div className="world-map-container">
              <img
                src="images/about/map2.png"
                alt="World Map"
                className="world-map"
              />
            </div>
          </div>
        </section>

        {/* Mission Vision Section */}
        <section className="mission-vision-section">
          <div className="mission-vision-container">
            <div className="mission-card">
              <h3>
                <span class="our-prefix-text">Our</span>&nbsp;
                <span class="mission-vision-main-text">Mission</span>
              </h3>
              <p>
                To empower businesses across Sri Lanka with reliable,
                innovative, and secure IT solutions—including networking, Wi-Fi,
                VoIP, CCTV, and IT support—tailored to drive growth,
                connectivity, and long-term success.
              </p>
            </div>
            <div className="vision-card">
              <h3>
                <span class="our-prefix-text">Our</span>&nbsp;
                <span class="mission-vision-main-text">Vision</span>
              </h3>
              <p>
                To become Sri Lanka's most trusted and innovative technology
                partner—empowering businesses through smart digital
                infrastructure, seamless connectivity, and secure IT
                environments. We aim to set the benchmark for service
                excellence, reliability, and long-term technological growth
                across the nation.
              </p>
            </div>
          </div>
        </section>

        {/* Working With ITPlus Section */}
        <section className="working-section">
          <div className="working-container">
            <div className="working-header">
              <h2>
                <span class="working-with-text">Working With</span>&nbsp;
                <span class="itplus-text">ItPlus</span>
              </h2>
              <p>
                For your Network and leave over 30 projects, OneAccess will find
                an unified construction to listen to your needs and accelerate
                your business challenges. We will then design solutions, begin
                providing and team based on your resources.
              </p>
            </div>
            <div className="working-cards">
              <div className="working-card">
                <div className="working-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Expert Team</h3>
                <p>
                  Our expert team gives you the right solution. Based on your
                  needs and budget.
                </p>
              </div>
              <div className="working-card">
                <div className="working-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Secure</h3>
                <p>
                  We Deliver Exceptional Security with Outstanding Data Services
                  Support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
