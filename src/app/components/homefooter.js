import React from "react";

const HomeFooter = () => {
  const faqs = [
    "What services does ITPlus offer?",
    "Do you provide after-sales support?",
    "What is the purpose of ITPlus",
    "Can you customize solutions based on our business needs?",
    "How do I get a quote for my project?",
    "Is your team certified and experienced?",
    "Do you serve areas outside Colombo or major cities?",
  ];

  return (
    <footer className="footer-wrapper">
      {/* Background SVG */}
      <div className="footer-svg">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1445 1620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <rect
            x="4"
            width="1441"
            height="669"
            fill="url(#paint0_linear_547_378)"
          />
          <path
            d="M1442.5 571.5V604.5L1301.5 571.5L1182 544.5L1027 527H893L799.5 536L740 544.5C740 544.5 713 546 777 531.5C841 517 882.193 505.897 945.5 501C1004.1 496.468 1040.29 494.754 1099 497.5C1150.3 499.899 1176.37 503.873 1227 512.5C1266.36 519.208 1287.93 525.671 1326.5 536C1372.26 548.256 1442.5 571.5 1442.5 571.5Z"
            fill="#F28E23"
          />
          <path
            d="M0.5 563.5V604C0.5 604 74.276 618.593 122 625C164.788 630.745 188.867 634.162 232 636C264.189 637.372 282.735 641.388 314.5 636C331.216 633.164 413 617.5 413 617.5C413 617.5 330.874 625.959 314.5 625C286.267 623.347 251.32 622.59 223.5 617.5C187.373 610.89 157.954 602.994 122 595.5C63.2929 583.264 0.5 563.5 0.5 563.5Z"
            fill="#F28E23"
          />
          <path
            d="M1444 1620H3V603.751C171.5 631 126.806 631 274 631C421.194 631 755.817 509.034 982.96 515.229C1167.35 520.258 1444 603.751 1444 603.751V1620Z"
            fill="#360065"
          />
          <defs>
            <linearGradient
              id="paint0_linear_547_378"
              x1="1445"
              y1="-6.3887e-05"
              x2="122.593"
              y2="796.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#360065" />
              <stop offset="1" stopColor="#6D00CB" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_547_378"
              x1="723.5"
              y1="486.003"
              x2="723.5"
              y2="1620"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7A4ADF" />
              <stop offset="1" stopColor="#15145F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="container">
          {/* Contact Form Section */}
          <div className="contact-section">
            <div className="contact-left">
              <h2 className="contact-title">
                Connect With Your Next
                <br />
                Great Hire Today!
              </h2>
              <p className="contact-description">
                Please feel free to get in touch with us via any convenient
                means (phone, whatsapp, email, submit a contact form). We will
                be glad to answer your questions as soon as possible.
              </p>
            </div>

            <div className="contact-form-card">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Company</label>
                    <input type="text" placeholder="Company" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Phone</label>
                  <input type="tel" placeholder="Phone" />
                </div>

                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea rows="3" placeholder="Message"></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Let's Talk <span className="arrow">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <span className="faq-text">{faq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-columns">
              {/* IT PLUS Column */}
              <div className="footer-column brand-column">
                <img
                  src="images/it_plus_logo.png"
                  alt="IT PLUS Logo"
                  className="brand-logo"
                />

                <p className="brand-description">
                  Global destination for specialized IT solutions, ideal for
                  startups and businesses seeking to enhance their digital
                  presence.
                </p>

                <div className="social-icons">
                  <div className="social-icon facebook">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <div className="social-icon twitter">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="social-icon instagram">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="social-icon linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                </div>
              </div>

              {/* Company Column */}
              <div className="footer-column">
                <h4 className="column-title">COMPANY</h4>
                <ul className="column-links">
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div className="footer-column">
                <h4 className="column-title">SERVICES</h4>
                <ul className="column-links">
                  <li>
                    <a href="/technology">Technology</a>
                  </li>
                  <li>
                    <a href="/cloud">Cloud Solutions</a>
                  </li>
                  <li>
                    <a href="/software">Software</a>
                  </li>
                  <li>
                    <a href="/support">IT Support</a>
                  </li>
                  <li>
                    <a href="/products">IT Products</a>
                  </li>
                  <li>
                    <a href="/academic">Academic</a>
                  </li>
                </ul>
              </div>

              {/* Contact Us Column */}
              <div className="footer-column">
                <h4 className="column-title">CONTACT US</h4>
                <div className="contact-info">
                  <p className="contact-item">
                    <i className="fas fa-envelope"></i>
                    info@itplus.lk
                  </p>
                  <p className="contact-item">
                    <i className="fas fa-phone"></i>
                    +94 11 234 5678
                  </p>
                  <p className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    Colombo, Sri Lanka
                  </p>
                </div>

                <div className="newsletter">
                  <h4 className="newsletter-title">Stay Updated</h4>
                  <div className="newsletter-form">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="email-input"
                    />
                    <button className="subscribe-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
              <div className="footer-copyright-content">
                <p className="copyright">
                  © 2025 IT Plus. All rights reserved.
                </p>
                <div className="footer-bottom-links">
                  <a href="/privacy">Privacy Policy</a>
                  <a href="/terms">Terms of Service</a>
                  <a href="/cookies">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-wrapper {
          position: relative;
          width: 100vw;
          min-height: 1620px;
          overflow: visible;
          color: white;
          font-family: "Outfit", "Segoe UI", sans-serif;
          box-sizing: border-box;
          margin-top: 200px;
        }

        .footer-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .footer-svg svg {
          width: 100%;
          height: 100%;
          display: block;
          min-height: 100%;
        }

        .footer-content {
          position: relative;
          z-index: 1;
          width: 100%;
          padding-top: 80px;
          padding-bottom: 40px;
          box-sizing: border-box;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          box-sizing: border-box;
        }

        /* Contact Section */
        .contact-section {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 80px;
          margin-bottom: 120px;
          align-items: start;
        }

        .contact-left {
          padding-top: 40px;
        }

        .contact-title {
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          color: white;
          margin: 0 0 32px 0;
          letter-spacing: -0.02em;
        }

        .contact-description {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          max-width: 480px;
        }

        .contact-form-card {
          background: rgba(255, 255, 255, 0.98);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          transform: translateY(-43%);
          position: relative;
          z-index: 10;
          top: 20px;
          width: 100%;
          max-width: 420px;
          box-sizing: border-box;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          width: 100%;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #360065;
          margin-bottom: 4px;
          text-transform: none;
        }

        .form-group input,
        .form-group textarea {
          background: white;
          border: 2px solidrgba(152, 150, 153, 0.77);
          border-radius: 12px;
          padding: 14px 16px;
          color:rgb(168, 173, 185);
          font-size: 14px;
          transition: all 0.2s ease;
          font-family: inherit;
          font-weight: 400;
          width: 100%;
          box-sizing: border-box;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #9ca3af;
          font-weight: 400;
          font-size: 14px;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color:rgba(177, 173, 180, 0.54);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
        }

        .form-group textarea {
          resize: none;
          min-height: 100px;
          font-family: inherit;
        }

        .submit-button {
          background:rgb(235, 145, 61);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          font-family: inherit;
          width: 100%;
          box-sizing: border-box;
        }

        .submit-button:hover {
          background: rgb(235, 145, 61);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(76, 29, 149, 0.3);
        }

        .arrow {
          font-size: 18px;
          font-weight: 400;
        }

        /* FAQ Section */
        .faq-section {
          background: transparent;
          text-align: center;
          margin-bottom: 120px;
        }

        .faq-title {
          font-size: 48px;
          font-weight: 700;
          color: white;
          margin: 0 0 80px 0;
          letter-spacing: -0.02em;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .faq-item {
          background: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          padding: 24px 0;
          text-align: left;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .faq-item:hover {
          background: transparent;
        }

        .faq-text {
          font-size: 18px;
          font-weight: 400;
          color: white;
          line-height: 1.4;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 64px;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 60px;
          margin-bottom: 40px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .brand-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          padding-left: 0; /* make sure there's no extra left padding */
          margin-left: 0;
        }
        .brand-logo {
          display: block; /* removes inline spacing */
          width: 200px;
          height: auto;
          margin-bottom: 16px;
          padding: 0; /* ensure no padding is applied */
          margin-left: -24px; /* force zero margin on left */
          
        }

        .brand-title {
          font-size: 28px;
          font-weight: 700;
          color: white;
          margin: 0 0 24px 0;
          letter-spacing: 0.02em;
        }

        .brand-description {
          margin: 0 0 32px 0;
          padding: 0;
        }

        .social-icons {
          display: flex;
          gap: 18px;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 20px;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .facebook:hover {
          background: #1877f2;
          border-color: #1877f2;
        }
        .twitter:hover {
          background: #1da1f2;
          border-color: #1da1f2;
        }
        .instagram:hover {
          background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af);
          border-color: #dd2a7b;
        }
        .linkedin:hover {
          background: #0a66c2;
          border-color: #0a66c2;
        }

        .column-title {
          font-size: 15px;
          font-weight: 700;
          color: white;
          margin: 0 0 30px 0;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .column-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .column-links li {
          margin-bottom: 14px;
        }

        .column-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .column-links a:hover {
          color: rgb(245, 149, 32);
          transform: translateX(8px);
        }

        /* Contact Info */
        .contact-info {
          margin-bottom: 35px;
        }

        .contact-item {
          color: rgba(255, 255, 255, 0.85);
          font-size: 15px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-item i {
          font-size: 14px;
          width: 16px;
          color: rgb(245, 149, 32);
        }

        /* Newsletter */
        .newsletter-title {
          font-size: 18px;
          font-weight: 600;
          color: white;
          margin: 0 0 20px 0;
        }

        .newsletter-form {
          position: relative;
          width: 280px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .newsletter-form:hover {
          border-color: rgba(245, 149, 32, 0.4);
          box-shadow: 0 4px 12px rgba(245, 149, 32, 0.15);
        }

        .newsletter-form:focus-within {
          border-color: rgb(245, 149, 32);
          box-shadow: 0 0 0 2px rgba(245, 149, 32, 0.2);
        }

        .email-input {
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 13px;
          padding: 0 90px 0 16px;
          border-radius: 20px;
          font-weight: 400;
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .subscribe-btn {
          position: absolute;
          right: 2px;
          top: 2px;
          height: 36px;
          padding: 0 18px;
          background: linear-gradient(
            135deg,
            rgb(245, 149, 32),
            rgb(245, 149, 32)
          );
          color: #1a1a2e;
          border: none;
          border-radius: 18px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .subscribe-btn:hover {
          background: linear-gradient(
            135deg,
            rgb(245, 149, 32),
            rgb(245, 149, 32)
          );
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(245, 149, 32, 0.3);
        }

        /* Footer Copyright */
        .footer-copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 30px;
        }

        .footer-copyright-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          margin: 0;
          font-weight: 400;
        }

        .footer-bottom-links {
          display: flex;
          gap: 35px;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: all 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: rgb(245, 149, 32);
        }

        /* Mobile Responsive Design */
        @media (max-width: 1200px) {
          .footer-wrapper {
            min-height: 1500px;
            margin-top: 150px;
          }

          .container {
            padding: 0 20px;
          }

          .contact-section {
            gap: 60px;
          }

          .contact-title {
            font-size: 48px;
          }

          .footer-columns {
            gap: 48px;
          }
        }

        @media (max-width: 991px) {
          .footer-wrapper {
            min-height: 1400px;
            margin-top: 100px;
          }

          .contact-section {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .contact-form-card {
            max-width: 500px;
            margin: 0 auto;
            position: relative;
            top: auto;
            right: auto;
            transform: none;
          }

          .contact-title {
            font-size: 42px;
          }

          .footer-columns {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .brand-column {
            grid-column: 1 / -1;
            max-width: none;
            text-align: center;
            margin-bottom: 20px;
          }

          .social-icons {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .footer-wrapper {
            min-height: 1300px;
            margin-top: 80px;
          }

          .footer-content {
            padding-top: 60px;
            padding-bottom: 30px;
          }

          .container {
            padding: 0 16px;
          }

          .contact-section {
            grid-template-columns: 1fr;
            gap: 48px;
            margin-bottom: 80px;
          }

          .contact-form-card {
            position: relative;
            max-width: 500px;
            margin: 0 auto;
            padding: 40px;
            border-radius: 24px;
            top: auto;
            right: auto;
            transform: none;
          }

          .contact-title {
            font-size: 36px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .faq-section {
            margin-bottom: 80px;
          }

          .faq-title {
            font-size: 36px;
            margin-bottom: 60px;
          }

          .faq-item {
            padding: 20px 0;
          }

          .faq-text {
            font-size: 16px;
          }

          .footer-columns {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
            margin-bottom: 30px;
          }

          .brand-column {
            max-width: none;
          }

          .social-icons {
            justify-content: center;
          }

          .newsletter-form {
            margin: 0 auto;
          }

          .footer-copyright-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 25px;
          }
        }

        @media (max-width: 480px) {
          .footer-wrapper {
            min-height: 1200px;
            margin-top: 60px;
          }

          .contact-title {
            font-size: 28px;
          }

          .contact-description {
            font-size: 15px;
          }

          .contact-form-card {
            padding: 32px;
            border-radius: 24px;
            transform: none;
          }

          .form-group input,
          .form-group textarea {
            padding: 14px 16px;
            font-size: 13px;
          }

          .submit-button {
            padding: 16px 24px;
            font-size: 15px;
          }

          .faq-title {
            font-size: 32px;
            margin-bottom: 50px;
          }

          .faq-item {
            padding: 18px 0;
          }

          .faq-text {
            font-size: 15px;
          }

          .social-icon {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }

          .newsletter-form {
            width: 260px;
          }

          .brand-title {
            font-size: 24px;
          }

          .column-title {
            font-size: 12px;
          }

          .column-links a {
            font-size: 13px;
          }

          .contact-item {
            font-size: 13px;
          }
        }

        @media (max-width: 396px) {
          .footer-wrapper {
            min-height: 1100px;
            margin-top: 40px;
          }

          .container {
            padding: 0 12px;
          }

          .contact-title {
            font-size: 24px;
          }

          .contact-form-card {
            padding: 28px;
            border-radius: 24px;
            transform: none;
          }

          .faq-title {
            font-size: 28px;
            margin-bottom: 40px;
          }

          .faq-item {
            padding: 16px 0;
          }

          .faq-text {
            font-size: 14px;
          }

          .brand-title {
            font-size: 20px;
          }

          .social-icon {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default HomeFooter;
