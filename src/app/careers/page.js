'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function CareersPage() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null
  });

  // Job listings data
  const jobListings = [
    {
      id: 1,
      title: "Intern/Trainee - ELV Technician",
      location: "Battaramulla - Sri Jayawardenepura",
      type: "On-site",
      schedule: "Trainee",
      experience: null,
      vacancies: null
    },
    {
      id: 2,
      title: "ELV Technician",
      location: "Battaramulla - Sri Jayawardenepura",
      type: "On-site",
      schedule: "Full Time",
      experience: "Minimum 1+ year/s of experience",
      vacancies: null
    },
    {
      id: 3,
      title: "Associate Engineer - Network And Enterprise ICT - ELV",
      location: "Battaramulla - Sri Jayawardenepura",
      type: "On-site",
      schedule: "Full Time",
      experience: "Minimum 1 year/s of experience",
      vacancies: "04"
    },
    {
      id: 4,
      title: "Senior - ELV Technician",
      location: "Battaramulla - Sri Jayawardenepura",
      type: "On-site",
      schedule: "Full Time",
      experience: "Minimum 5+ year/s of experience",
      vacancies: null
    },
    {
      id: 5,
      title: "Account Assistant - Intern / Trainee",
      location: "Battaramulla - Sri Jayawardenepura",
      type: "On-site",
      schedule: "Full Time",
      experience: null,
      vacancies: "02"
    },
    {
      id: 6,
      title: "Associate Engineer - IT And System Support",
      location: "Battaramulla - Sri Jayawardenepura",
      type: "On-site",
      schedule: "Full Time",
      experience: "Minimum 1 year/s of experience",
      vacancies: "02"
    }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', formData);
    alert('Your application has been submitted successfully!');
    closeApplicationForm();
  };

  // Inject CSS using useEffect
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
      .careers-page {
        font-family: 'Outfit', sans-serif;
        background: linear-gradient(135deg, #7A4ADF 0%, #5E36B8 25%, #533a7b 50%, #360065 75%, #2d1b4e 100%);
        min-height: 100vh;
        position: relative;
      }

      /* Hero Section */
      .hero-section {
        padding: 80px 0 60px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }

      .hero-section::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(122, 74, 223, 0.1) 0%, transparent 50%);
        animation: rotate 20s linear infinite;
      }

      @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .hero-content {
        position: relative;
        z-index: 2;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .hero-content h1 {
        font-size: 48px;
        font-weight: 700;
        color: white;
        margin-bottom: 20px;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      .hero-content .highlight {
        background: linear-gradient(135deg, #33FF94 0%, #00D4AA 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-content p {
        font-size: 20px;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 40px;
        line-height: 1.6;
      }

      /* Jobs Section */
      .jobs-section {
        padding: 40px 0 80px;
        position: relative;
        z-index: 2;
      }

      .jobs-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 40px;
      }

      .jobs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 30px;
      }

      .job-card {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        overflow: hidden;
      }

      .job-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #7A4ADF 0%, #33FF94 50%, #7A4ADF 100%);
        border-radius: 20px 20px 0 0;
      }

      .job-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 30px 70px rgba(0, 0, 0, 0.3);
      }

      .job-title {
        font-size: 22px;
        font-weight: 700;
        color: #2d3748;
        margin-bottom: 20px;
        line-height: 1.3;
      }

      .job-details {
        margin-bottom: 25px;
      }

      .job-detail {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-size: 14px;
        color: #4a5568;
      }

      .job-detail i {
        width: 20px;
        color: #7A4ADF;
        margin-right: 10px;
        font-size: 16px;
      }

      .apply-btn {
        width: 100%;
        background: linear-gradient(135deg, #7A4ADF 0%, #533a7b 100%);
        color: white;
        border: none;
        border-radius: 50px;
        padding: 15px 30px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(122, 74, 223, 0.3);
      }

      .apply-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 35px rgba(122, 74, 223, 0.4);
        background: linear-gradient(135deg, #533a7b 0%, #7A4ADF 100%);
      }

      /* Application Form Modal */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 20px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .modal-overlay.show {
        opacity: 1;
        visibility: visible;
      }

      .application-form {
        background: white;
        border-radius: 25px;
        padding: 40px;
        max-width: 600px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        position: relative;
        transform: scale(0.9);
        transition: transform 0.3s ease;
      }

      .modal-overlay.show .application-form {
        transform: scale(1);
      }

      .form-header {
        text-align: center;
        margin-bottom: 30px;
        position: relative;
        padding-bottom: 20px;
      }

      .form-header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #7A4ADF, #33FF94);
        border-radius: 2px;
      }

      .form-header h2 {
        font-size: 28px;
        font-weight: 700;
        color: #2d3748;
        margin-bottom: 10px;
      }

      .form-header p {
        font-size: 16px;
        color: #4a5568;
        margin: 0;
      }

      .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        font-size: 24px;
        color: #4a5568;
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        transition: all 0.3s ease;
      }

      .close-btn:hover {
        background: #f7fafc;
        color: #2d3748;
        transform: rotate(90deg);
      }

      .form-group {
        margin-bottom: 25px;
      }

      .form-group label {
        display: block;
        font-size: 14px;
        font-weight: 600;
        color: #2d3748;
        margin-bottom: 8px;
      }

      .required {
        color: #e53e3e;
      }

      .form-group input,
      .form-group select,
      .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 14px;
        transition: all 0.3s ease;
        font-family: 'Outfit', sans-serif;
      }

      .form-group input:focus,
      .form-group select:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #7A4ADF;
        box-shadow: 0 0 0 3px rgba(122, 74, 223, 0.1);
      }

      .form-group textarea {
        resize: vertical;
        min-height: 100px;
      }

      .file-input {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 100%;
      }

      .file-input input[type=file] {
        position: absolute;
        left: -9999px;
      }

      .file-input-label {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 16px;
        border: 2px dashed #cbd5e0;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        color: #4a5568;
        text-align: center;
      }

      .file-input-label:hover {
        border-color: #7A4ADF;
        background: rgba(122, 74, 223, 0.05);
      }

      .file-input-label i {
        margin-right: 8px;
        color: #7A4ADF;
      }

      .submit-btn {
        width: 100%;
        background: linear-gradient(135deg, #7A4ADF 0%, #533a7b 100%);
        color: white;
        border: none;
        border-radius: 50px;
        padding: 15px 30px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 10px;
      }

      .submit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(122, 74, 223, 0.3);
      }

      /* Responsive Design */
      @media (max-width: 1200px) {
        .jobs-grid {
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
      }

      @media (max-width: 768px) {
        .hero-content h1 {
          font-size: 36px;
        }

        .hero-content p {
          font-size: 18px;
        }

        .jobs-container {
          padding: 0 20px;
        }

        .jobs-grid {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .job-card {
          padding: 25px;
        }

        .application-form {
          padding: 30px 25px;
          margin: 10px;
        }

        .form-header h2 {
          font-size: 24px;
        }
      }

      @media (max-width: 480px) {
        .hero-content h1 {
          font-size: 28px;
        }

        .hero-content p {
          font-size: 16px;
        }

        .job-card {
          padding: 20px;
        }

        .application-form {
          padding: 25px 20px;
        }

        .form-header h2 {
          font-size: 22px;
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

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        closeApplicationForm();
      }
    };

    if (showApplicationForm) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showApplicationForm]);

  return (
    <div className="careers-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Job <span className="highlight">Vacancies</span></h1>
          <p>
            Join our innovative team and be part of Sri Lanka's leading technology solutions provider. 
            We offer exciting career opportunities in a dynamic, growth-oriented environment.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobs-section">
        <div className="jobs-container">
          <div className="jobs-grid">
            {jobListings.map((job) => (
              <div key={job.id} className="job-card">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-details">
                  <div className="job-detail">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail">
                    <i className="fas fa-building"></i>
                    <span>{job.type}</span>
                  </div>
                  <div className="job-detail">
                    <i className="fas fa-clock"></i>
                    <span>{job.schedule}</span>
                  </div>
                  {job.experience && (
                    <div className="job-detail">
                      <i className="fas fa-star"></i>
                      <span>{job.experience}</span>
                    </div>
                  )}
                  {job.vacancies && (
                    <div className="job-detail">
                      <i className="fas fa-users"></i>
                      <span>No of vacancies: {job.vacancies}</span>
                    </div>
                  )}
                </div>
                <button 
                  className="apply-btn"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <div className={`modal-overlay ${showApplicationForm ? 'show' : ''}`}>
        <div className="application-form">
          <button className="close-btn" onClick={closeApplicationForm}>
            <i className="fas fa-times"></i>
          </button>
          
          <div className="form-header">
            <h2>Apply for Position</h2>
            <p>{selectedJob?.title}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">
                Years of Experience
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="resume">
                Resume/CV <span className="required">*</span>
              </label>
              <div className="file-input">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                />
                <label htmlFor="resume" className="file-input-label">
                  <i className="fas fa-upload"></i>
                  {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX)'}
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="coverLetter">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you're the perfect fit for this role..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}