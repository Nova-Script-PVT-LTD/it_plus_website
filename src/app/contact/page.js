'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    projectDetails: '',
    subject: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      projectDetails: '',
      subject: ''
    });
  };

  // Inject CSS and reveal animation using useEffect
  useEffect(() => {
    // Load Font Awesome if not already loaded
    const fontAwesomeLink = document.querySelector('link[href*="font-awesome"]');
    if (!fontAwesomeLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
    }

    const style = document.createElement('style');
    style.textContent = `
      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(80px);
        transition: opacity 1.2s cubic-bezier(0.23, 1, 0.32, 1), transform 1.2s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: none;
      }
    `;
    document.head.appendChild(style);

    // Reveal on scroll logic
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.4 }
    );
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup function to remove the style and observer when component unmounts
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="contact-page">
      <Header />
      
      <section className="reveal-on-scroll" style={{ position: 'relative', background: 'linear-gradient(180deg, #6a11cb 0%, #360065 100%)', height: '300px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '600', zIndex: 1 }}>Contact Us</h1>
        {/* Curved SVG Bottom */}
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100px',
            display: 'block',
          }}
        >
          <path
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
            style={{ fill: '#fff' }}
          />
        </svg>
      </section>

      <section className="reveal-on-scroll"
        style={{
          padding: '80px 20px',
          backgroundColor: '#fff',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', color: '#7A4ADF', marginBottom: '20px' }}>Get in touch</h2>
          <p style={{ fontSize: '18px', color: '#444', lineHeight: '1.6' }}>
            Choose from over a quarter-million audio sales professionals, audience, technologies, designs,
            and equipment to help grow and build your business. Get in touch with all our processes and
            inquiries for a faster response to your requirements.
          </p>
        </div>
      </section>

      <section className="reveal-on-scroll"
        style={{
          padding: '60px 20px',
          backgroundColor: '#f9f9f9'
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', gap: '40px' }}>
          {/* Map Section */}
          <div style={{ flex: '1 1 40%', minHeight: '300px', background: '#ddd', position: 'relative', borderRadius: '10px' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', textAlign: 'center'
            }}>
              <div style={{
                width: '30px', height: '30px', backgroundColor: '#7A4ADF',
                borderRadius: '50%', margin: '0 auto 10px'
              }}></div>
              <div style={{ fontSize: '16px', color: '#222', fontWeight: 500 }}>
                Interactive Map - ITPlus Location
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div style={{ flex: '1 1 55%' }}>
            <h2 style={{ fontSize: '30px', color: '#7A4ADF', marginBottom: '10px' }}>
              Connect With Your Next Great Hire Today!
            </h2>
            <p style={{ fontSize: '16px', color: '#444', marginBottom: '30px' }}>
              Ready to take your business to the next level? Contact us today to discuss your technology needs 
              and discover how we can help you achieve your goals.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Row 1 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="firstName" style={{ fontWeight: 500 }}>First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="lastName" style={{ fontWeight: 500 }}>Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <label htmlFor="email" style={{ fontWeight: 500 }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label htmlFor="phoneNumber" style={{ fontWeight: 500 }}>Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" style={{ fontWeight: 500 }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                />
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" style={{ fontWeight: 500 }}>Project Details</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements..."
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', minHeight: '120px' }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'orange',
                  color: 'black',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  alignSelf: 'flex-start'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="contact-info reveal-on-scroll">
        ...existing code...
      </section> */}

      {/* <section className="office-hours reveal-on-scroll">
        ...existing code...
      </section> */}

      <Footer />
    </div>
  );
}