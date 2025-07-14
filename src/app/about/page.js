"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

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

      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(80px);
        transition: opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1), transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
      }

      .reveal-on-scroll.visible {
        opacity: 1;
        transform: none;
      }

      /* Main Content Section */
      .main-content {
        background: white;
        min-height: 100vh;
        position: relative;
      }

      /* Hero Section */
      .hero-section-about {
        background-color: #360065;
        color: white;
        padding: 0 0 80px 0;
        text-align: center;
        margin-bottom: 80px;
      }

      .hero-container-about {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 60px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      .hero-image-content {
        margin-bottom: 40px;
        width: 100%;
      }

      .hero-image-content img {
        width: 100%;
        height: auto;
        display: block;
        border: none;
        border-radius: 0;
        padding: 0;
        margin: 0;
        background: #360065;
        object-fit: cover;
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
        font-size: 25px;
        line-height: 1.8;
        max-width: 900px;
        margin: 0 auto 10px;
        color: #e0e0e0;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
        margin-top: 40px;
        margin-bottom: 0; /* Ensure no extra bottom margin */
      }

      .stat-item {
        background: rgb(245, 149, 32);
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
        font-weight: 600;
        color: black;
        margin-bottom: 8px;
        position: relative;
        z-index: 1;
      }

      .stat-item p {
        font-size: 20px;
        font-weight: 700;
        color: white;
        margin: 0;
        position: relative;
        z-index: 1;
      }

      /* Locations Section */
      .locations-section {
        width: 100%;
        min-height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0; /* Ensure no top margin */
        padding: 20px 0;
      }

      .locations-container {
        width: 100%;
        max-width: 1200px;
        text-align: center;
        margin: 0; /* Reset any default margins */
      }

      .locations-heading {
        position: relative;
        display: inline-block;
        padding-bottom: 10px;
      }

      .our-locations-text {
        margin-right: 10px;
        color: #360065;
      }

      .locations-container h2 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 28px;
        line-height: 1.2;
        position: relative;
        text-align: center;
      }

      .locations-container h2 .our-locations-text {
        color: #360065;
      }

      .locations-container h2 .locations-text {
        color: rgb(245, 149, 32);
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
        height: auto;
        max-width: 1200px;
      }

      .world-map {
        width: 100%;
        height: auto; /* Changed to auto for natural scaling */
        max-height: 600px; /* Cap height to prevent excessive space */
        object-fit: contain;
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

      .mission-card h3 .our-prefix-text,
      .vision-card h3 .our-prefix-text {
        color: #31086C;
      }

      .mission-card h3 .mission-vision-main-text,
      .vision-card h3 .mission-vision-main-text {
        color: rgb(245, 149, 32);
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

      .working-header h2 .working-with-text {
        color: #31086C;
      }

      .working-header h2 .itplus-text {
        color: rgb(245, 149, 32);
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
      
      /* Empower Future Section */
      .empower-future-section {
        padding: 80px 0;
        background: white;
        text-align: center;
      }

      .empower-future-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 60px;
      }

      .empower-future-container h2 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 40px;
      }

      .empower-text {
        color: #31086C;
      }

      .itplus-empower-text {
        color: rgb(245, 149, 32);
      }

      .apply-now-button {
        display: inline-block;
        background-color: rgb(245, 149, 32);
        color: white;
        padding: 15px 40px;
        font-size: 18px;
        font-weight: 600;
        border-radius: 30px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
      }

      .apply-now-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 25px rgba(245, 149, 32, 0.4);
        background-color: #e08e1a; /* A slightly darker orange for hover */
      }

      /* Responsive Design */
      @media (max-width: 1200px) {
        .hero-container-about,
        .locations-container,
        .mission-vision-container,
        .working-container {
          padding: 0 40px;
        }

        .mission-vision-container {
          gap: 60px;
        }
      }

      @media (max-width: 992px) {
        .mission-vision-container {
          grid-template-columns: 1fr;
          gap: 50px;
        }

        .working-cards {
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .hero-content-about h1,
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
        .empower-future-container h2 {
          font-size: 38px;
        }
      }

      @media (max-width: 768px) {
        .hero-container-about,
        .locations-container,
        .mission-vision-container,
        .working-container {
          padding: 0 30px;
        }

        .hero-section-about {
          padding: 0 0 20px 0; /* Reduced bottom padding */
          margin-bottom: 10px; /* Minimized margin-bottom */
        }

        .hero-image-content {
          margin-bottom: 10px; /* Reduced from 40px */
        }

        .hero-container-about {
          gap: 20px; /* Reduced gap between hero elements */
        }

        .stats-grid {
          grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); /* Further reduced min-width */
          gap: 6px; /* Tighter gap for compactness */
          margin-top: 10px; /* Reduced margin */
          margin-bottom: 0;
        }

        .stat-item {
    padding: 10px 8px !important; /* Reduced padding, override with !important */
    border-radius: 6px !important; /* Smaller border radius */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important; /* Lighter shadow */
    min-height: 80px; /* Constrain height for smaller cards */
  }

  .stat-item h3 {
    font-size: 20px !important; /* Smaller counter font */
    margin-bottom: 4px !important;
  }

  .stat-item p {
    font-size: 12px !important; /* Smaller label font */
  }

        .locations-section {
          margin: 0; /* Reset margins */
          padding: 20px 0; /* Reduced padding */
          height: auto; /* Flexible height */
          min-height: 300px; /* Minimum height for content */
        }

        .world-map-container {
          height: auto; /* Natural height */
        }

        .world-map {
          height: auto; /* Natural scaling */
          max-height: 300px; /* Cap image height */
        }

        .mission-vision-section {
          padding: 40px 0;
        }

        .working-section {
          padding: 0 0 80px;
        }

        .hero-content-about h1,
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

        .empower-future-container h2 {
          font-size: 32px;
        }

        .apply-now-button {
          padding: 12px 35px;
          font-size: 16px;
        }
      }

      @media (max-width: 480px) {
        .hero-container-about,
        .locations-container,
        .mission-vision-container,
        .working-container {
          padding: 0 20px;
        }

        .hero-section-about {
          padding: 0 0 15px 0; /* Further reduced bottom padding */
          margin-bottom: 5px; /* Minimized margin-bottom */
        }

        .hero-image-content {
          margin-bottom: 5px; /* Further reduced */
        }

        .hero-container-about {
          gap: 15px; /* Further reduced gap */
        }

        .stats-grid {
          grid-template-columns: 1fr; /* Single column for smallest screens */
          gap: 7px; /* Minimal gap */
          margin-top: 15px; /* Further reduced */
          margin-bottom: 0; /* Ensure no extra bottom margin */
        }

        .stat-item {
    padding: 8px 6px !important; /* Even smaller padding */
    border-radius: 7px !important; /* Minimal border radius */
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) !important; /* Minimal shadow */
    min-height: 70px; /* Further constrain height */
    min-width: 50px;
  }

        .stat-item h3 {
    font-size: 28px !important; /* Further reduced counter font */
    margin-bottom: 3px !important;
  }

  .stat-item p {
    font-size: 28px !important; /* Further reduced label font */
  }

        .locations-section {
          margin: 0; /* Reset margins */
          padding: 15px 0; /* Further reduced padding */
          height: auto; /* Flexible height */
          min-height: 250px; /* Adjusted for smaller screens */
        }

        .world-map-container {
          height: auto; /* Natural height */
        }

        .world-map {
          height: auto; /* Natural scaling */
          max-height: 250px; /* Cap image height for smaller screens */
        }

        .hero-content-about h1,
        .locations-container h2,
        .mission-card h3,
        .vision-card h3,
        .working-header h2 {
          font-size: 28px;
        }

        .hero-content-about p,
        .mission-card p,
        .vision-card p,
        .working-header p {
          font-size: 14px;
        }

        .stats-grid {
          grid-template-columns: 1fr;
        }

        .stat-item h3 {
          font-size: 28px;
        }

        .stat-item p {
          font-size: 28px;
        }

        .working-card {
          padding: 25px 20px;
        }

        .footer-brand {
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 20px;
          padding-top: 80px;
        }

        .empower-future-container h2 {
          font-size: 28px;
        }
      }
    `;

    document.head.appendChild(style);

    // Reveal on scroll logic
    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Only reveal once, no blinking
          }
        });
      },
      { threshold: 0.2 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about-us-page">
      <Header />

      <div className="main-content">
        {/* Hero Section - Our Story & Stats */}
        <section className="hero-section-about">
          <div className="hero-image-content">
            <img src="images/about_image.png" alt="About Us" />
          </div>
          <div className="hero-container-about">
            <div className="hero-content-about">
              <div className="hero-header">
                <h1>
                  <span className="our-text">Our</span> 
                  <span className="story-text">Story</span>
                </h1>
              </div>
              <div className="hero-text-content">
                <p>
                  Established in 2015, ITPlus is a leading technology company in
                  Sri Lanka, dedicated to empowering businesses and individuals
                  through innovative and expert-driven IT solutions. We
                  specialize in services including Enterprise IT Solutions,
                  Cloud Services, System and Hardware Development,
                  Contract-based IT Support, and a wide range of IT Products.
                  Our specialized IT Training Academy is recognized for
                  developing industry-focused human skills, enabling a digitally
                  advanced IT community across the nation.
                </p>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <p>YEARS</p>
                <AnimatedCounter end="10" suffix="+" />
              </div>
              <div className="stat-item">
                <p>CLIENTS</p>
                <AnimatedCounter end="800" suffix="+" />
              </div>
              <div className="stat-item">
                <p>PROJECTS</p>
                <AnimatedCounter end="300" suffix="+" />
              </div>
              <div className="stat-item">
                <p>STAFF</p>
                <AnimatedCounter end="40" suffix="+" />
              </div>
              <div className="stat-item">
                <p>BRANDS</p>
                <AnimatedCounter end="100" suffix="+" />
              </div>
              <div className="stat-item">
                <p>TRAINING</p>
                <AnimatedCounter end="200" suffix="+" />
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="locations-section reveal-on-scroll">
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
        <section className="mission-vision-section reveal-on-scroll">
          <div className="mission-vision-container">
            <div className="mission-card">
              <h3>
                <span className="our-prefix-text">Our</span> 
                <span className="mission-vision-main-text">Mission</span>
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
                <span className="our-prefix-text">Our</span> 
                <span className="mission-vision-main-text">Vision</span>
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
        <section className="working-section reveal-on-scroll">
          <div className="working-container">
            <div className="working-header">
              <h2>
                <span className="working-with-text">Working With</span> 
                <span className="itplus-text">ItPlus</span>
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

        {/* Empower Your Future Section */}
        <section className="empower-future-section reveal-on-scroll">
          <div className="empower-future-container">
            <h2>
              <span className="empower-text">Empower Your Future with</span>{" "}
              <span className="itplus-empower-text">ITPlus!</span>
            </h2>
            <Link href="/careers" passHref>
              <div className="apply-now-button">Apply Now</div>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}