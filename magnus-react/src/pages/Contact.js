import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just alert the form data
    alert("Thank you, " + formData.name + "! Your message has been received.");
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container contact-page">
      <div className="map-container animate-zoom" style={{ width: '100%', height: 400, marginBottom: '2rem', marginTop: '2rem' }}>
        <iframe
          src="https://www.google.com/maps?q=9139+Wallisville+Rd,+Houston,+Texas,+77029&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Magnus &amp; Co. Location"
        ></iframe>
      </div>
      <h1 className="animate-fadein-up">See What Your Property Could Do with the Right Operating Partner</h1>
      <h2 className="animate-slidein-down">We work with landlords and multifamily teams looking to increase NOI through fully managed short-term rentals. If you’re exploring options, submit your info below and our team will follow up within one business day.</h2>

      <section className="inquiry-form animate-slidein-right">
        <h2>Inquiry Form</h2>
        <p>Share your details and we’ll reach out to schedule a brief consultation.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row" style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Blake Archer" required value={formData.name} onChange={handleChange} />
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="blake@archer.com" required value={formData.email} onChange={handleChange} />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="E.g. I manage 40 units across two properties. Curious to see how STR could boost performance—happy to share numbers." required value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn">Request Consultation</button>
        </form>
      </section>

      <section className="contact-direct animate-fadein-up" style={{ marginTop: '2rem' }}>
        <h2>Prefer to reach out directly?</h2>
        <p>📞 (832)-340-5243</p>
        <p>📩 <a href="mailto:abbas@magnus-property.com">abbas@magnus-property.com</a></p>
        <p>📍 9139 Wallisville Rd, Houston, Texas, 77029</p>
      </section>
    </div>
  );
};

export default Contact;
