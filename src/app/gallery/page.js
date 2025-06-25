'use client';

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop', 
      alt: 'Modern office space', 
      category: 'office',
      title: 'Modern Office Design'
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop', 
      alt: 'Team collaboration', 
      category: 'team',
      title: 'Team Collaboration'
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop', 
      alt: 'Technology workspace', 
      category: 'technology',
      title: 'Technology Workspace'
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop', 
      alt: 'Business meeting', 
      category: 'business',
      title: 'Business Strategy Meeting'
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop', 
      alt: 'Creative brainstorming', 
      category: 'team',
      title: 'Creative Brainstorming'
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?w=800&h=600&fit=crop', 
      alt: 'Data analytics', 
      category: 'technology',
      title: 'Data Analytics Dashboard'
    },
    { 
      id: 7, 
      src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop', 
      alt: 'Modern workspace', 
      category: 'office',
      title: 'Contemporary Workspace'
    },
    { 
      id: 8, 
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop', 
      alt: 'Project planning', 
      category: 'business',
      title: 'Strategic Project Planning'
    },
    { 
      id: 9, 
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop', 
      alt: 'Cloud computing', 
      category: 'technology',
      title: 'Cloud Computing Solutions'
    },
    { 
      id: 10, 
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', 
      alt: 'Team leadership', 
      category: 'team',
      title: 'Leadership Development'
    },
    { 
      id: 11, 
      src: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop', 
      alt: 'Innovation hub', 
      category: 'office',
      title: 'Innovation Hub Design'
    },
    { 
      id: 12, 
      src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop', 
      alt: 'Digital transformation', 
      category: 'technology',
      title: 'Digital Transformation'
    },
    { 
      id: 13, 
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', 
      alt: 'Business growth', 
      category: 'business',
      title: 'Business Growth Analytics'
    },
    { 
      id: 14, 
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', 
      alt: 'Team success', 
      category: 'team',
      title: 'Team Success Celebration'
    },
    { 
      id: 15, 
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop', 
      alt: 'Executive office', 
      category: 'office',
      title: 'Executive Office Suite'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Images', count: galleryImages.length },
    { id: 'office', name: 'Office Spaces', count: galleryImages.filter(img => img.category === 'office').length },
    { id: 'team', name: 'Team Work', count: galleryImages.filter(img => img.category === 'team').length },
    { id: 'technology', name: 'Technology', count: galleryImages.filter(img => img.category === 'technology').length },
    { id: 'business', name: 'Business', count: galleryImages.filter(img => img.category === 'business').length },
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="gallery-page-container">
      <Header/>
      {/* Gallery Hero Section */}
      <section className="gallery-hero-section">
        <div className="gallery-hero-content">
          <h1>Gallery</h1>
          <p>Showcasing our workspace, team, and innovative solutions</p>
        </div>
      </section>

      {/* Gallery Filter Section */}
      <section className="gallery-filter-section">
        <div className="container">
          <div className="section-header-stacked">
            <p className="section-path">\ Our Work \</p>
            <h2>Our Portfolio</h2>
          </div>
          
          {/* <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className="count">({category.count})</span>
              </button>
            ))}
          </div> */}
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="image-grid">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="image-item"
                onClick={() => openLightbox(image)}
              >
                <div className="image-overlay">
                  <img src={image.src} alt={image.alt} />
                  <div className="image-info">
                    <h3>{image.title}</h3>
                    <div className="zoom-icon">🔍</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <button className="lightbox-next" onClick={nextImage}>›</button>
            
            <div className="lightbox-image-container">
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
            
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p className="lightbox-category">Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer/>

      <style jsx>{`
        .gallery-page-container {
          font-family: 'Inter', sans-serif;
          color: #333;
          line-height: 1.6;
          background-color: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Gallery Hero Section */
        .gallery-hero-section {
          background: linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%);
          color: white;
          padding: 100px 20px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 100px 100px;
        }

        .gallery-hero-content h1 {
          font-size: 3.5em;
          margin-bottom: 20px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .gallery-hero-content p {
          font-size: 1.2em;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Filter Section */
        .gallery-filter-section {
          padding: 40px 0 20px;
          background-color: #f8f9fa;
        }

        .section-header-stacked {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 40px;
          margin-top: 80px;
        }

        .section-header-stacked .section-path {
          color: #4a00e0;
          font-size: 0.9em;
          margin-bottom: 10px;
          font-weight: 500;
        }

        .section-header-stacked h2 {
          font-size: 2.5em;
          color: #333;
          font-weight: 700;
          margin: 0;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .filter-tab {
          background: white;
          border: 2px solid #e0e0e0;
          color: #666;
          padding: 12px 24px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .filter-tab:hover {
          border-color: #4a00e0;
          color: #4a00e0;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(74, 0, 224, 0.2);
        }

        .filter-tab.active {
          background: linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%);
          border-color: #4a00e0;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(74, 0, 224, 0.3);
        }

        .count {
          font-size: 0.9em;
          opacity: 0.8;
        }

        /* Gallery Grid Section */
        .gallery-grid-section {
          padding: 40px 0 80px;
          background-color: #f8f9fa;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }

        .image-item {
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
        }

        .image-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .image-overlay {
          position: relative;
          overflow: hidden;
        }

        .image-item img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .image-item:hover img {
          transform: scale(1.05);
        }

        .image-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 30px 20px 20px;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .image-item:hover .image-info {
          transform: translateY(0);
        }

        .image-info h3 {
          font-size: 1.2em;
          font-weight: 600;
          margin: 0 0 10px 0;
        }

        .zoom-icon {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 1.5em;
          opacity: 0.8;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          z-index: 1001;
          transition: background 0.3s ease;
        }

        .lightbox-close:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .lightbox-prev,
        .lightbox-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          z-index: 1001;
          transition: all 0.3s ease;
        }

        .lightbox-prev {
          left: 20px;
        }

        .lightbox-next {
          right: 20px;
        }

        .lightbox-prev:hover,
        .lightbox-next:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-height: 70vh;
        }

        .lightbox-image-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .lightbox-info {
          padding: 20px 30px;
          background: white;
          border-top: 1px solid #eee;
        }

        .lightbox-info h3 {
          font-size: 1.5em;
          color: #4a00e0;
          margin: 0 0 10px 0;
          font-weight: 600;
        }

        .lightbox-category {
          color: #666;
          font-size: 1em;
          margin: 0;
          text-transform: capitalize;
        }

        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }

          .filter-tabs {
            gap: 10px;
          }

          .filter-tab {
            padding: 10px 18px;
            font-size: 0.9em;
          }
        }

        @media (max-width: 768px) {
          .gallery-hero-content h1 {
            font-size: 2.5em;
          }

          .gallery-hero-content p {
            font-size: 1.1em;
          }

          .section-header-stacked h2 {
            font-size: 2em;
          }

          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }

          .image-item img {
            height: 200px;
          }

          .lightbox-prev,
          .lightbox-next {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .lightbox-prev {
            left: 10px;
          }

          .lightbox-next {
            right: 10px;
          }
        }

        @media (max-width: 480px) {
          .gallery-hero-section {
            padding: 80px 20px 60px;
          }

          .filter-tabs {
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }

          .filter-tab {
            width: 200px;
            justify-content: center;
          }

          .image-grid {
            grid-template-columns: 1fr;
          }

          .image-item img {
            height: 220px;
          }

          .lightbox-content {
            max-width: 95vw;
            max-height: 95vh;
          }

          .lightbox-info {
            padding: 15px 20px;
          }
        }
      `}</style>
    </div>
  );
}