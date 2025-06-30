"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";


export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const latestPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      date: "May 9th, 2023",
      title: "The most Popular Business Of the Year",
      readTime: "2 Min Read",
      type: "featured",
      author: "John Doe",
      content: `
        <h2>Introduction</h2>
        <p>In today's rapidly evolving business landscape, certain companies have risen to extraordinary heights, capturing market attention and setting new standards for success. This year has been particularly remarkable for businesses that have adapted to changing consumer behaviors and technological advancements.</p>
        
        <h2>Market Leaders</h2>
        <p>The most popular businesses of 2023 share several common characteristics: innovation, customer-centricity, and adaptability. These companies have not only survived recent challenges but have thrived by embracing digital transformation and sustainable practices.</p>
        
        <h2>Key Success Factors</h2>
        <p>Several factors contribute to their success:</p>
        <ul>
          <li>Digital innovation and technology adoption</li>
          <li>Strong customer engagement strategies</li>
          <li>Sustainable business practices</li>
          <li>Agile response to market changes</li>
        </ul>
        
        <h2>Future Outlook</h2>
        <p>As we look ahead, these businesses continue to set trends and influence industry standards. Their success stories provide valuable insights for other organizations looking to achieve similar growth and recognition in their respective markets.</p>
      `
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=100&fit=crop",
      date: "Apr 19th, 2023",
      title: "Digital Transformation Trends",
      readTime: "3 Min Read",
      type: "small",
      author: "Jane Smith",
      content: `
        <h2>The Digital Revolution</h2>
        <p>Digital transformation has become more than just a buzzword—it's a fundamental shift in how businesses operate and deliver value to customers. This comprehensive guide explores the latest trends shaping the digital landscape.</p>
        
        <h2>Emerging Technologies</h2>
        <p>From artificial intelligence to blockchain, emerging technologies are reshaping industries and creating new opportunities for innovation and growth.</p>
      `
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=100&fit=crop",
      date: "Apr 12th, 2023",
      title: "Sustainable Business Practices",
      readTime: "4 Min Read",
      type: "small",
      author: "Mike Johnson",
      content: `
        <h2>Going Green</h2>
        <p>Sustainability is no longer optional for modern businesses. Companies that embrace sustainable practices are not only helping the environment but also improving their bottom line.</p>
        
        <h2>Implementation Strategies</h2>
        <p>Learn practical approaches to implementing sustainable practices in your organization, from energy efficiency to waste reduction.</p>
      `
    },
  ];

  const regularPosts = [
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      date: "May 9th, 2023",
      title: "Remote Work Revolution",
      readTime: "5 Min Read",
      author: "Sarah Wilson",
      content: `<h2>The Future of Work</h2><p>Remote work has transformed from a temporary solution to a permanent fixture in the modern workplace...</p>`
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      date: "Apr 27th, 2023",
      title: "Data Analytics in Business",
      readTime: "6 Min Read",
      author: "David Chen",
      content: `<h2>Making Data-Driven Decisions</h2><p>In today's competitive landscape, businesses that leverage data analytics gain significant advantages...</p>`
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=250&fit=crop",
      date: "Apr 20th, 2023",
      title: "Cybersecurity Best Practices",
      readTime: "4 Min Read",
      author: "Lisa Rodriguez",
      content: `<h2>Protecting Your Business</h2><p>As cyber threats evolve, businesses must stay ahead with robust security measures...</p>`
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      date: "May 9th, 2023",
      title: "Team Collaboration Tools",
      readTime: "3 Min Read",
      author: "Tom Anderson",
      content: `<h2>Enhancing Productivity</h2><p>Discover the latest tools and strategies for improving team collaboration in modern workplaces...</p>`
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
      date: "Apr 27th, 2023",
      title: "Customer Experience Excellence",
      readTime: "5 Min Read",
      author: "Emily Davis",
      content: `<h2>Delighting Customers</h2><p>Learn how leading companies create exceptional customer experiences that drive loyalty and growth...</p>`
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      date: "Apr 20th, 2023",
      title: "Innovation in Startups",
      readTime: "4 Min Read",
      author: "Alex Thompson",
      content: `<h2>Startup Success Stories</h2><p>Explore how innovative startups are disrupting traditional industries and creating new markets...</p>`
    }
  ];

  const allPosts = [...latestPosts, ...regularPosts];

  const handlePostClick = (post) => {
    setSelectedBlog(post);
  };

  const handleBackToBlog = () => {
    setSelectedBlog(null);
  };

  if (selectedBlog) {
    return (
      <div className="blog-detail-container">
        <div className="blog-detail-header">
          <button onClick={handleBackToBlog} className="back-button">
            ← Back to Blog
          </button>
        </div>
        
        <article className="blog-detail-content">
          <div className="container">
            <div className="blog-detail-meta">
              <span className="blog-detail-date">{selectedBlog.date}</span>
              <span className="blog-detail-author">By {selectedBlog.author}</span>
              <span className="blog-detail-read-time">{selectedBlog.readTime}</span>
            </div>
            
            <h1 className="blog-detail-title">{selectedBlog.title}</h1>
            
            <div className="blog-detail-image-container">
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                className="blog-detail-image"
              />
            </div>
            
            <div 
              className="blog-detail-text"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
            
            <div className="blog-detail-footer">
              <div className="blog-tags">
                <span className="tag">Business</span>
                <span className="tag">Technology</span>
                <span className="tag">Innovation</span>
              </div>
              
              <div className="blog-share">
                <span>Share:</span>
                <div className="share-buttons">
                  <button className="share-btn facebook">f</button>
                  <button className="share-btn twitter">t</button>
                  <button className="share-btn linkedin">in</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <style jsx>{`
          .blog-detail-container {
            font-family: "Inter", sans-serif;
            color: #333;
            line-height: 1.7;
            background-color: #f8f9fa;
            min-height: 100vh;
          }

          .blog-detail-header {
            background: linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%);
            padding: 30px 0;
          }

          .back-button {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            margin-left: 2rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }

          .back-button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
          }

          .blog-detail-content {
            max-width: 800px;
            margin: -20px auto 0;
            background: white;
            border-radius: 20px 20px 0 0;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 2;
          }

          .container {
            padding: 60px 40px 40px;
          }

          .blog-detail-meta {
            display: flex;
            gap: 20px;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }

          .blog-detail-date,
          .blog-detail-author,
          .blog-detail-read-time {
            font-size: 14px;
            color: #666;
          }

          .blog-detail-author {
            font-weight: 600;
          }

          .blog-detail-title {
            font-size: 2.5em;
            font-weight: 700;
            color: #4a00e0;
            margin-bottom: 30px;
            line-height: 1.2;
          }

          .blog-detail-image-container {
            margin-bottom: 40px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .blog-detail-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
          }

          .blog-detail-text {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 40px;
          }

          .blog-detail-text h2 {
            color: #4a00e0;
            font-size: 1.5em;
            margin: 30px 0 15px;
            font-weight: 600;
          }

          .blog-detail-text p {
            margin-bottom: 20px;
            color: #444;
          }

          .blog-detail-text ul {
            margin: 20px 0;
            padding-left: 30px;
          }

          .blog-detail-text li {
            margin-bottom: 8px;
            color: #555;
          }

          .blog-detail-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 30px;
            border-top: 1px solid #eee;
            margin-top: 40px;
          }

          .blog-tags {
            display: flex;
            gap: 10px;
          }

          .tag {
            background: #f0f0f0;
            color: #4a00e0;
            padding: 6px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
          }

          .blog-share {
            display: flex;
            align-items: center;
            gap: 15px;
            color: #666;
            font-weight: 500;
          }

          .share-buttons {
            display: flex;
            gap: 10px;
          }

          .share-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: none;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .share-btn:hover {
            transform: scale(1.1);
          }

          .facebook { background: #1877f2; }
          .twitter { background: #1da1f2; }
          .linkedin { background: #0077b5; }

          @media (max-width: 768px) {
            .container {
              padding: 40px 20px;
            }

            .blog-detail-title {
              font-size: 2em;
            }

            .blog-detail-text {
              font-size: 16px;
            }

            .blog-detail-footer {
              flex-direction: column;
              gap: 20px;
              align-items: flex-start;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
   

    <div className="blog-page-container">
        <Header />
      {/* Blog Hero Section - Clean Design */}
      <section className="blog-hero-section">
        <div className="blog-hero-content">
          <h1>Blog</h1>
          <p>Insights, trends, and stories from the world of business and technology</p>
        </div>
      </section>

      {/* Latest Post Section */}
      <section className="latest-post-section">
        <div className="container">
          <div className="section-header-stacked">
            <p className="section-path">\ Our Blog \</p>
            <h2 className="latest-post-title">Latest Post</h2>
          </div>
          <div className="latest-post-grid">
            <div className="main-featured-post-card" onClick={() => handlePostClick(latestPosts[0])}>
              <img
                src={latestPosts[0].image}
                alt={latestPosts[0].title}
                className="post-image"
              />
              <div className="post-info">
                <span className="post-date">{latestPosts[0].date}</span>
                <h3 className="post-title">{latestPosts[0].title}</h3>
                <div className="post-meta-bottom">
                  <span className="post-read-time">{latestPosts[0].readTime}</span>
                  <div className="read-more">Read More</div>
                </div>
              </div>
            </div>
            <div className="side-recent-posts">
              {latestPosts.slice(1).map((post) => (
                <div key={post.id} className="small-post-card" onClick={() => handlePostClick(post)}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="small-post-image"
                  />
                  <div className="small-post-info">
                    <span className="small-post-date">{post.date}</span>
                    <h4 className="small-post-title">{post.title}</h4>
                    <div className="small-post-meta-bottom">
                      <span className="small-post-read-time">{post.readTime}</span>
                      <div className="small-read-more">Read More</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="all-posts-section">
        <div className="container">
          <div className="section-header-stacked">
            <p className="section-path">\ Our Blog \</p>
            <h2>More Articles</h2>
          </div>
          <div className="regular-posts-grid">
            {regularPosts.map((post) => (
              <div key={post.id} className="regular-post-card" onClick={() => handlePostClick(post)}>
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-info">
                  <span className="post-date">{post.date}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <div className="post-meta-bottom">
                    <span className="post-read-time">{post.readTime}</span>
                    <div className="read-more">Read More</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>

      <style jsx>{`
        .blog-page-container {
          font-family: "Inter", sans-serif;
          color: #333;
          line-height: 1.6;
          background-color: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Blog Hero Section - Clean and Simple */
        .blog-hero-section {
          background: linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%);
          color: white;
          padding: 100px 20px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-radius: 0 0 100px 100px;
        }

        .blog-hero-content h1 {
          font-size: 3.5em;
          margin-bottom: 20px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .blog-hero-content p {
          font-size: 1.2em;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Section Header */
        .section-header-stacked {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 50px;
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

        /* Latest Post Section */
        .latest-post-section {
          padding: 40px 0 80px;
          background-color: #f8f9fa;
        }

        .latest-post-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .main-featured-post-card {
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .main-featured-post-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .main-featured-post-card .post-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        .main-featured-post-card .post-info {
          padding: 30px;
        }

        .main-featured-post-card .post-date {
          font-size: 0.9em;
          color: #888;
          margin-bottom: 10px;
          display: block;
          font-weight: 500;
        }

        .main-featured-post-card .post-title {
          font-size: 1.8em;
          color: #4a00e0;
          margin-bottom: 20px;
          line-height: 1.3;
          font-weight: 700;
        }

        .post-meta-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .post-read-time {
          font-size: 0.9em;
          color: #666;
          font-weight: 500;
        }

        .read-more {
          color: #4a00e0;
          font-weight: 600;
          position: relative;
          padding-right: 25px;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .read-more::after {
          content: "→";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2em;
          color: #33ff94;
          transition: transform 0.3s ease;
        }

        .read-more:hover::after {
          transform: translateY(-50%) translateX(5px);
        }

        .side-recent-posts {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .small-post-card {
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .small-post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .small-post-card .small-post-image {
          width: 120px;
          height: 80px;
          border-radius: 10px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .small-post-info {
          flex: 1;
        }

        .small-post-date {
          font-size: 0.8em;
          color: #888;
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .small-post-title {
          font-size: 1.1em;
          color: #4a00e0;
          line-height: 1.3;
          margin: 0 0 10px 0;
          font-weight: 600;
        }

        .small-post-meta-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .small-post-read-time {
          font-size: 0.8em;
          color: #666;
          font-weight: 500;
        }

        .small-read-more {
          color: #4a00e0;
          font-weight: 600;
          font-size: 0.9em;
          position: relative;
          padding-right: 20px;
          cursor: pointer;
        }

        .small-read-more::after {
          content: "→";
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #33ff94;
        }

        /* All Posts Section */
        .all-posts-section {
          padding: 80px 0;
          background-color: #f8f9fa;
        }

        .regular-posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .regular-post-card {
          background-color: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .regular-post-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }

        .regular-post-card .post-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .regular-post-card .post-info {
          padding: 25px;
        }

        .regular-post-card .post-date {
          font-size: 0.9em;
          color: #888;
          margin-bottom: 10px;
          display: block;
          font-weight: 500;
        }

        .regular-post-card .post-title {
          font-size: 1.4em;
          color: #4a00e0;
          line-height: 1.3;
          margin-bottom: 15px;
          font-weight: 600;
        }

        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .latest-post-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .side-recent-posts {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .blog-hero-content h1 {
            font-size: 2.5em;
          }

          .blog-hero-content p {
            font-size: 1.1em;
          }

          .section-header-stacked h2 {
            font-size: 2em;
          }

          .regular-posts-grid {
            grid-template-columns: 1fr;
          }

          .main-featured-post-card .post-title {
            font-size: 1.5em;
          }
          
        }

        @media (max-width: 480px) {
          .footer-brand {
          font-size: 26px;
          font-weight: 400;
          margin-bottom: 20px;
          padding-top:80px
        }
          .blog-hero-section {
            padding: 80px 20px 60px;
          }

          .small-post-card {
            flex-direction: column;
            text-align: center;
            padding: 15px;
          }

          .small-post-card .small-post-image {
            width: 100%;
            height: 120px;
            margin-bottom: 15px;
          }

          .main-featured-post-card .post-info {
            padding: 20px;
          }

          .regular-post-card .post-info {
            padding: 20px;
          }
          
        }
      `}</style>
    </div>
  );
}