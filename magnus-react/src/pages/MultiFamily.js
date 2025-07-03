import React from 'react';
import './MultiFamily.css';

const MultiFamily = () => {
  return (
    <div>
      <div className="services-hero">
        <div className="services-hero-content animate-zoom">
          <h1>Unlock NOI from Your Vacant Units</h1>
          <p>Premium STR integration that respects your asset, elevates your operations, and increases revenue—with no disruption.</p>
        </div>
      </div>

      <main className="container">
        <section style={{ marginTop: '2.5rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }} className="animate-slidein-down">Multifamily STR, Done Right</h2>
          <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem auto' }} className="animate-fadein-up">
            Magnus &amp; Co. partners with multifamily owners and operators to turn idle units into fully managed short-term rentals.<br />
            We don’t lease units—we integrate into your workflow with a system that protects your asset, supports your team, and drives NOI.
          </p>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.2rem' }} className="animate-pop">Why Owners Work With Us</h2>
          <div className="section-list">
            <ul className="animate-slidein-left">
              <li>Increase NOI within 60 days using idle units</li>
              <li>No displacement, no disruption to tenants</li>
              <li>Professionally screened guests, insured stays</li>
              <li>24/7 guest support and resolution team</li>
              <li>Syncs with maintenance and leasing teams</li>
              <li>Live dashboards and full transparency</li>
              <li>Works with Class A, B, and C assets</li>
            </ul>
            <ul className="animate-slidein-right">
              <h3 style={{ fontSize: '1.1rem', color: '#0B0B0B', marginBottom: '0.7rem' }}>How We Fit Into Your Ops</h3>
              <li>We coordinate with ownership, not just leasing</li>
              <li>Clean integration with existing SOPs</li>
              <li>Guest experience, tech stack, and enforcement fully handled</li>
              <li>Optional white-label or asset-lite model</li>
              <li>Scale only if the numbers justify it</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.2rem' }} className="animate-fadein">Proven Results in Multifamily STR Performance</h2>
          <div className="results-list animate-fadein-up">
            <ul>
              <li>20–35% NOI uplift per unit compared to long-term leases</li>
              <li>80–90% average occupancy across stabilized STR units</li>
              <li>100% guest compliance via automated rules and in-stay monitoring</li>
              <li>Pre-staged units go live within 24–48 hours of vacancy, fully activated with guest protocols and pricing engine</li>
              <li>0 onsite disruption reported across all managed properties</li>
              <li>2% incident rate across hundreds of stays—fully insured and resolved in-house</li>
            </ul>
            <p style={{ marginTop: '1rem', color: '#8DA9C4' }}>
              All metrics are tracked, summarized, and reported directly to your asset or operations team during the pilot.
            </p>
          </div>
        </section>

        <section>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '1.2rem' }} className="animate-fadein">Our 60-Day Pilot Program</h2>
          <div className="pilot-steps">
            <div className="pilot-step animate-slidein-left">
              <h4>Step 1 – Strategic Unit Selection</h4>
              <p>We align with ownership to select units that make operational and financial sense.</p>
            </div>
            <div className="pilot-step animate-zoom">
              <h4>Step 2 – Full-Service Launch</h4>
              <p>We onboard within 15 days: listings, pricing, SOPs, guest support, cleaning, and tech.</p>
            </div>
            <div className="pilot-step animate-slidein-right">
              <h4>Step 3 – Review Results</h4>
              <p>You receive clear, scheduled financial reports covering revenue, occupancy, fees, and net payouts—delivered in a format your asset management team can act on. If the pilot performs, we scale. If not, you walk away—no obligation.</p>
            </div>
          </div>
        </section>

        <div className="cta-section animate-slidein-down">
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Let's Talk Potential</h2>
          <a href="/contact" className="btn">See What Your Underused Space Could Earn</a>
        </div>
      </main>
    </div>
  );
};

export default MultiFamily;
