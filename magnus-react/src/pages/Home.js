import React, { useState, useEffect } from 'react';
import './Home.css';

const slidesData = [
  {
    id: 1,
    backgroundImage: "url('https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1470&q=80')",
    title: "Professional Stays & Consistent Returns",
    description: "Partner with Magnus & Co. for fully managed short-term rentals.",
    buttonText: "Start Your 60-Day Pilot",
    buttonLink: "/contact"
  },
  {
    id: 2,
    backgroundImage: "url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1470&q=80')",
    title: "See Results in 60 Days",
    description: "No cost, no commitment. Let the numbers speak for themselves.",
    buttonText: "Book a Call",
    buttonLink: "/contact"
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="slider-container">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider-slide ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="slider-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="btn" onClick={() => window.location.href = slide.buttonLink}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
        <div className="slider-controls">
          <button className="slider-btn" onClick={() => setCurrent((current - 1 + slidesData.length) % slidesData.length)}>&#8592;</button>
          <button className="slider-btn" onClick={() => setCurrent((current + 1) % slidesData.length)}>&#8594;</button>
        </div>
      </div>

      <section style={{ background: 'none', padding: '2rem 0 4rem 0' }}>
        <div className="grid-2x2">
          <div className="animate-slidein-left">
            <div className="img-block animate-zoom">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Landlords" />
            </div>
            <div className="solution-text" style={{ textAlign: 'left' }}>
              <h3>For Landlords</h3>
              <p>Earn more from your rental—without lifting a finger. We handle everything from guest screening to dynamic pricing.</p>
            </div>
          </div>
          <div className="animate-slidein-right">
            <div className="img-block animate-zoom">
              <img src="https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=400&q=80" alt="Apartment Owners" />
            </div>
            <div className="solution-text" style={{ textAlign: 'left' }}>
              <h3>For Apartment Owners</h3>
              <p>Turn vacant units into revenue with zero disruption. Seamlessly integrated with your onsite operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'none', padding: '0 0 4rem 0' }}>
        <div className="grid-2x2">
          <div className="step-text animate-slidein-left" style={{ textAlign: 'left' }}>
            <h3>Step 1: Apply</h3>
            <p>Book a quick call to evaluate your unit(s). If it’s a fit, we launch your pilot—no obligation.</p>
          </div>
          <div className="img-block animate-zoom">
            <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80" alt="Apply" />
          </div>
          <div className="img-block animate-zoom">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80" alt="Onboard" />
          </div>
          <div className="step-text animate-slidein-right" style={{ textAlign: 'left' }}>
            <h3>Step 2: Onboard</h3>
            <p>We set up pricing, SOPs, guest management, and support—fully managed.</p>
          </div>
          <div className="step-text animate-slidein-left" style={{ textAlign: 'left' }}>
            <h3>Step 3: Review</h3>
            <p>See results in 60 days. If you’re satisfied, we scale. If not, no pressure.</p>
          </div>
          <div className="img-block animate-zoom">
            <img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80" alt="Review" />
          </div>
        </div>
      </section>

      <section className="animate-fadein-up" style={{ textAlign: 'center' }}>
        <h2>Partner with Magnus &amp; Co.</h2>
        <p style={{ maxWidth: 600, margin: '0 auto 2rem' }}>
          Join our 60-day pilot—no cost, no commitment. Let the numbers speak.
        </p>
        <div>
          <button className="btn animate-pop" onClick={() => window.location.href = '/contact'}>Book a Call</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
