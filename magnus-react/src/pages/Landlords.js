import React from 'react';
import './Landlords.css';

const Landlords = () => {
  return (
    <div>
      <div className="landlord-hero">
        <div className="landlord-hero-content animate-fadein-up">
          <h1>Earn More. Do Less.</h1>
          <p>We turn your rental into a high-performing short-term property—without adding work to your plate.</p>
        </div>
      </div>

      <main className="container">
        <section style={{ marginTop: '2.5rem' }} className="animate-fadein-up">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}>A Better Way for Landlords</h2>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem auto' }}>
            Magnus &amp; Co. partners with experienced landlords who want better returns without tenant management. Whether you’re managing a single property or multiple doors, we offer a fully managed short-term rental solution—from pricing optimization to 24/7 guest support—so you earn more while staying hands-off.
          </p>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.2rem' }} className="animate-slidein-down">Why Landlords Choose Us</h2>
          <div className="section-list">
            <ul className="animate-slidein-left">
              <li>Higher NOI than traditional leases</li>
              <li>No long-term tenants or turnover issues</li>
              <li>Professional guests screened and monitored</li>
              <li>Dynamic pricing, automation &amp; revenue tools</li>
              <li>Cleaning, communication, and setup fully handled</li>
            </ul>
            <ul className="animate-slidein-right">
              <h3 style={{ fontSize: '1.1rem', color: '#0B0B0B', marginBottom: '0.7rem' }}>Who This Is For</h3>
              <li>Have vacant or underperforming properties</li>
              <li>Want higher returns without managing day-to-day details</li>
              <li>Prefer working with a selective, systems-driven partner</li>
              <li>Care about preserving the long-term health of their asset</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.2rem' }} className="animate-slidein-down">Our 60-Day Pilot Program</h2>
          <div className="pilot-steps">
            <div className="pilot-step animate-slidein-left">
              <h4>Step 1 – Schedule a Fit Call</h4>
              <p>We evaluate your unit’s potential and STR viability.</p>
            </div>
            <div className="pilot-step animate-fadein-up">
              <h4>Step 2 – We Launch Everything</h4>
              <p>From listings and tech to guest SOPs and pricing engines.</p>
            </div>
            <div className="pilot-step animate-slidein-right">
              <h4>Step 3 – Monitor Performance</h4>
              <p>At day 60, review your returns and decide whether to scale or walk away—no strings.</p>
            </div>
          </div>
        </section>

        <div className="cta-section">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }} className="animate-slidein-down">Ready to See What Your Property Can Earn?</h2>
          <a href="/contact" className="btn animate-fadein-up">Apply for our 60-day pilot program</a>
          <p style={{ marginTop: '0.7rem', color: '#8DA9C4' }} className="animate-fadein-up">No cost. No long-term contracts. Just results.</p>
        </div>
      </main>
    </div>
  );
};

export default Landlords;
