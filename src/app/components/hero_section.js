"use client";

export default function HeroSection() {
  return (
    <>
      <style jsx>{`
        .hero-section {
          min-height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 80px 20px 120px 20px;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .hero-section::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          background: white;
          clip-path: ellipse(80% 100% at 50% 100%);
          z-index: 3;
        }

        .hero-content {
          text-align: center;
          color: white;
          max-width: 1200px;
          position: relative;
          z-index: 4;
        }

        .hero-title {
          font-size: 60px;
          font-weight: 700;
          font-family: "Outfit", sans-serif;
          margin: 0 0 0 0;
          line-height: 1.1;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .hero-logo-image {
          width: 100;
          height: 140px;
          object-fit: contain;
          padding: 0px;
          border-radius: 15px;
          margin: 0;
        }

        .hero-subtitle {
          font-size: 40px;
          font-weight: 400;
          font-family: "Outfit", sans-serif;
          margin-bottom: 50px;
          line-height: 1.2;
          opacity: 0.95;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          position: relative;
          z-index: 4;
        }

        .btn-live-help {
          background: transparent;
          color: white;
          border: 4px solid rgb(245, 149, 32);
          border-radius: 50px;
          font-size: 32px;
          font-weight: 500;
          font-family: "Outfit", sans-serif;
          padding: 18px 45px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-live-help:hover {
          background: rgb(245, 149, 32);
          color: #360065;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(51, 255, 148, 0.4);
        }

        .btn-contact-hero {
          background: transparent;
          color: white;
          border: 4px solid rgb(245, 149, 32);
          border-radius: 50px;
          font-size: 32px;
          font-weight: 500;
          font-family: "Outfit", sans-serif;
          padding: 14px 41px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-contact-hero:hover {
          background: rgb(245, 149, 32);
          color: #360065;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(51, 255, 148, 0.3);
        }

        .hero-decoration {
          position: absolute;
          right: 100px;
          top: 50%;
          transform: translateY(-50%);
          width: 194px;
          height: 203px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          color: rgba(255, 255, 255, 0.3);
          z-index: 4;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-decoration {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 600px;
            padding: 60px 20px 100px;
          }
          .hero-logo-image {
            width: 100;
            height: 120px;
            object-fit: contain;
            padding: 0px;
            border-radius: 15px;
            margin: 0;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-logo-box {
            font-size: 28px;
            padding: 10px 15px;
            margin-left: 10px;
          }

          .hero-subtitle {
            font-size: 24px;
            margin-bottom: 40px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            position: relative;
            z-index: 4;
          }

          .btn-live-help,
          .btn-contact-hero {
            font-size: 24px;
            padding: 15px 35px;
            width: 280px;
            height: 66px;
            position: relative;
            z-index: 4;
            box-sizing: border-box;
            margin: 0;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 600px;
            padding: 60px 20px 100px;
          }
          .hero-section::after {
            display: none; /* Remove the white curve on mobile */
          }
          .hero-title {
            font-size: 28px;
            letter-spacing: 1px;
          }

          .hero-logo-image {
            width: 70;
            height: 90px;
            object-fit: contain;
            padding: 0px;
            border-radius: 15px;
            margin: 0;
          }

          .hero-logo-box {
            font-size: 24px;
            padding: 8px 12px;
          }

          .hero-subtitle {
            font-size: 20px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
            position: relative;
            z-index: 4;
          }

          .btn-live-help,
          .btn-contact-hero {
            font-size: 20px;
            padding: 12px 30px;
            width: 250px;
            height: 60px;
            position: relative;
            z-index: 4;
            box-sizing: border-box;
            margin: 0;
            color: white !important;
          }
        }

        @media (max-width: 396px) {
          .hero-title {
            font-size: 26px;
            letter-spacing: 1px;
          }

          .hero-logo-image {
            width: 50;
            height: 70px;
            object-fit: contain;
            padding: 0px;
            border-radius: 15px;
            margin: 0;
          }

          .hero-logo-box {
            font-size: 24px;
            padding: 8px 12px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 12px;
            position: relative;
            z-index: 4;
          }

          .btn-live-help,
          .btn-contact-hero {
            font-size: 18px;
            padding: 10px 26px;
            width: 200px;
            height: 50px;
            position: relative;
            z-index: 4;
            box-sizing: border-box;
            margin: 0;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Background Video */}
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/main banner vedio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            SIMPLYFYING <span style={{ color: "#ef8f11" }}>IT</span> WITH
            <img
              src="/images/hero_logo.png"
              alt="IT Plus Logo"
              className="hero-logo-image"
            />
          </h1>

          <p className="hero-subtitle">
            Where Technology, Innovation, and Training Meet
          </p>

          <div className="hero-buttons">
            <button className="btn-live-help">Live Help</button>
            <button className="btn-contact-hero">Contact</button>
          </div>
        </div>
      </section>
    </>
  );
}