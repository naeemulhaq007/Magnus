import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Landlords from './pages/Landlords';
import MultiFamily from './pages/MultiFamily';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-fadein, .animate-fadein-up, .animate-slidein-left, .animate-slidein-right, .animate-pop, .animate-zoom, .animate-slidein-down');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add('animated');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('DOMContentLoaded', animateOnScroll);
    animateOnScroll();
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('DOMContentLoaded', animateOnScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landlords" element={<Landlords />} />
          <Route path="/multi-family" element={<MultiFamily />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
