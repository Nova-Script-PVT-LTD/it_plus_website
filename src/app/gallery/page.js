'use client';

import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

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
          
          <div className="filter-tabs">
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
          </div>
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
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        /* Gallery Hero Section */
        .gallery-hero-section {
          background: linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%);
          color: white;
          padding: clamp(60px, 10vw, 100px) 1rem clamp(40px, 8vw, 80px);
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 clamp(30px, 8vw, 100px) clamp(30px, 8vw, 100px);
          width: 100%;
        }

        .gallery-hero-content h1 {
          font-size: clamp(2rem, 6vw, 3.5rem);
          margin-bottom: clamp(10px, 2vw, 20px);
          letter-spacing: 1px;
          font-weight: 700;
        }

        .gallery-hero-content p {
          font-size: clamp(1rem, 3vw, 1.2rem);
          opacity: 0.9;
          max-width: clamp(400px, 50vw, 600px);
          margin: 0 auto;
        }

        /* Filter Section */
        .gallery-filter-section {
          padding: clamp(20px, 5vw, 40px) 0 clamp(10px, 3vw, 20px);
          background-color: #f8f9fa;
        }

        .section-header-stacked {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(20px, 5vw, 40px);
          margin-top: clamp(40px, 8vw, 80px);
        }

        .section-header-stacked .section-path {
          color: #4a00e0;
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          margin-bottom: clamp(5px, 1vw, 10px);
          font-weight: 500;
        }

        .section-header-stacked h2 {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: #333;
          font-weight: 700;
          margin: 0;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: clamp(8px, 2vw, 15px);
          flex-wrap: wrap;
          margin-bottom: clamp(20px, 5vw, 40px);
        }

        .filter-tab {
          background: white;
          border: 2px solid #e0e0e0;
          color: #666;
          padding: clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px);
          border-radius: 30px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: clamp(5px, 1vw, 8px);
          font-size: clamp(0.9rem, 2.5vw, 1rem);
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
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          opacity: 0.8;
        }

        /* Gallery Grid Section */
        .gallery-grid-section {
          padding: clamp(20px, 5vw, 40px) 0 clamp(40px, 8vw, 80px);
          background-color: #f8f9fa;
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(clamp(250px, 30vw, 350px), 1fr));
          gap: clamp(15px, 3vw, 25px);
        }

        .image-item {
          background-color: #ffffff;
          border-radius: clamp(10px, 2vw, 20px);
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
          height: clamp(200px, 25vw, 300px);
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
          padding: clamp(20px, 3vw, 30px) clamp(10px, 2vw, 20px) clamp(10px, 2vw, 20px);
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .image-item:hover .image-info {
          transform: translateY(0);
        }

        .image-info h3 {
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-weight: 600;
          margin: 0 0 clamp(5px, 1vw, 10px) 0;
        }

        .zoom-icon {
          position: absolute;
          top: clamp(10px, 2vw, 15px);
          right: clamp(10px, 2vw, 20px);
          font-size: clamp(1.2rem, 3vw, 1.5rem);
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
          max-width: clamp(90%, 95vw, 95%);
          max-height: clamp(90%, 95vh, 95%);
          background: white;
          border-radius: clamp(10px, 2vw, 20px);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .lightbox-close {
          position: absolute;
          top: clamp(10px, 2vw, 20px);
          right: clamp(10px, 2vw, 20px);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          width: clamp(30px, 5vw, 40px);
          height: clamp(30px, 5vw, 40px);
          border-radius: 50%;
          font-size: clamp(18px, 4vw, 24px);
          cursor: pointer;
          z-index: 1001;
          transition: background 0.3s ease;
        }

        .lightbox Gayle M. Kennedy
System: .lightbox-close:hover {
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
          width: clamp(40px, 6vw, 50px);
          height: clamp(40px, 6vw, 50px);
          border-radius: 50%;
          font-size履行: size: clamp(20px, 4vw, 24px);
          cursor: pointer;
          z-index: 1001;
          transition: all 0.3s ease;
        }

        .lightbox-prev {
          left: clamp(10px, 2vw, 20px);
        }

        .lightbox-next {
          right: clamp(10px, 2vw, 20px);
        }

        .lightbox-prev:hover,
        .lightbox-next:hover {
          background: rgba(0, 0, 0, 0.9);
          transform Also: translateY(-50%) scale(1.1);
        }

        .lightbox-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-height: clamp(60vh, 70vh, 80vh);
        }

        .lightbox-image-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .lightbox-info {
          padding: clamp(15px, 3vw, 20px) clamp(20px, 4vw, 30px);
          background: white;
          border-top: 1px solid #eee;
        }

        .lightbox-info h3 {
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          color: #4a00e0;
          margin: 0 0 clamp(5px, 1vw, 10px) 0;
          font-weight: 600;
        }

        .lightbox-category {
          color: #666;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          margin: 0;
          text-transform: capitalize;
        }

        /* Responsive Adjustments */
        @media (max-width: 1280px) {
          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: clamp(15px, 3vw, 20px);
          }
        }

        @media (max-width: 1024px) {
          .gallery-hero-section {
            padding: clamp(50px, 8vw, 80px) 1rem clamp(30px, 6vw, 60px);
          }

          .gallery-hero-content h1 {
            font-size: clamp(1.8rem, 5vw, 3rem);
          }

          .gallery-hero-content p {
            font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          }

          .section-header-stacked h2 {
            font-size: clamp(1.3rem, 3.5vw, 2rem);
          }

          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: clamp(12px, 2.5vw, 18px);
          }

          .image-item img {
            height: clamp(180px, 22vw, 250px);
          }
        }

        @media (max-width: 768px) {
          .filter-tabs {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: clamp(6px, 1.5vw, 10px);
          }

          .filter-tab {
            padding: clamp(8px, 2vw, 10px) clamp(12px, 2.5vw, 18px);
            font-size: clamp(0.85rem, 2.2vw, 0.95rem);
            min-width: 120px;
          }

          .image-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: clamp(10px, 2vw, 15px);
          }

          .image-item img {
            height: clamp(160px, 20vw, 220px);
          }

          .lightbox-prev,
          .lightbox-next {
            width: clamp(35px, 5vw, 45px);
            height: clamp(35px, 5vw, 45px);
            font-size: clamp(18px, 3.5vw, 22px);
          }

          .lightbox-prev {
            left: clamp(8px, 1.5vw, 15px);
          }

          .lightbox-next {
            right: clamp(8px, 1.5vw, 15px);
          }
        }

        @media (max-width: 640px) {
          .gallery-hero-section {
            padding: clamp(40px, 7vw, 60px) 1rem clamp(25px, 5vw, 50px);
          }

          .filter-tabs {
            flex-direction: column;
            align-items: center;
            gap: clamp(6px, 1.5vw, 8px);
          }

          .filter-tab {
            width: clamp(160px, 40vw, 200px);
            justify-content: center;
            padding: clamp(8px, 2vw, 10px) clamp(10px, 2vw, 15px);
            font-size: clamp(0.8rem, 2vw, 0.9rem);
          }

          .image-grid {
            grid-template-columns: 1fr;
            gap: clamp(8px, 2vw, 12px);
          }

          .image-item img {
            height: clamp(180px, 45vw, 240px);
          }

          .lightbox-content {
            max-width: 98vw;
            max-height: 98vh;
            border-radius: clamp(8px, 2vw, 12px);
          }

          .lightbox-close {
            width: clamp(28px, 6vw, 35px);
            height: clamp(28px, 6vw, 35px);
            font-size: clamp(16px, 4vw, 20px);
          }

          .lightbox-prev,
          .lightbox-next {
            width: clamp(30px, 6vw, 40px);
            height: clamp(30px, 6vw, 40px);
            font-size: clamp(16px, 4vw, 20px);
          }

          .lightbox-info {
            padding: clamp(10px, 2.5vw, 15px) clamp(15px, 3vw, 20px);
          }

          .lightbox-info h3 {
            font-size: clamp(1rem, 2.5vw, 1.3rem);
          }

          .lightbox-category {
            font-size: clamp(0.8rem, 2vw, 0.9rem);
          }
        }

        @media (max-width: 480px) {
          .gallery-hero-section {
            padding: clamp(30px, 6vw, 50px) 0.5rem clamp(20px, 4vw, 40px);
          }

          .gallery-hero-content h1 {
            font-size: clamp(1.5rem, 4.5vw, 2.5rem);
          }

          .gallery-hero-content p {
            font-size: clamp(0.85rem, 2.2vw, 1rem);
            max-width: 90%;
          }

          .section-header-stacked {
            margin-top: clamp(30px, 6vw, 60px);
            margin-bottom: clamp(15px, 3vw, 30px);
          }

          .section-header-stacked .section-path {
            font-size: clamp(0.7rem, 1.8vw, 0.8rem);
          }

          .section-header-stacked h2 {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
          }

          .filter-tabs {
            gap: clamp(5px, 1.2vw, 7px);
          }

          .filter-tab {
            width: clamp(140px, 35vw, 180px);
            padding: clamp(6px, 1.5vw, 8px) clamp(8px, 2vw, 12px);
            font-size: clamp(0.75rem, 1.8vw, 0.85rem);
          }

          .image-grid {
            gap: clamp(6px, 1.5vw, 10px);
          }

          .image-item img {
            height: clamp(160px, 40vw, 220px);
          }

          .image-info {
            padding: clamp(15px, 3vw, 20px) clamp(8px, 2vw, 15px);
          }

          .image-info h3 {
            font-size: clamp(0.9rem, 2.2vw, 1.1rem);
          }

          .zoom-icon {
            font-size: clamp(1rem, 2.5vw, 1.3rem);
            top: clamp(8px, 1.5vw, 12px);
            right: clamp(8px, 1.5vw, 15px);
          }

          .lightbox-content {
            max-width: 100vw;
            max-height: 100vh;
            border-radius: clamp(6px, 1.5vw, 10px);
          }

          .lightbox-image-container {
            max-height: clamp(50vh, 65vh, 75vh);
          }
        }
      `}</style>
    </div>
  );
}