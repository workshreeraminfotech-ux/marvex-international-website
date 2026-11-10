import React from 'react';
import { Facebook, Instagram, Linkedin, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../assets/logoData.js';

export default function FooterSection({ onNavigate }) {
  return (
    <footer className="footer-redesign-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-brand">
            <div 
              className="footer-logo-wrap" 
              style={{ cursor: 'pointer', display: 'inline-block' }}
              title="Marvex International — Go to Home / Hero Section"
              onClick={() => { 
                if (onNavigate) onNavigate('home'); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  const heroEl = document.getElementById('hero') || document.getElementById('home') || document.querySelector('.jrp-hero-section');
                  if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 60);
              }}
            >
              <img src={logoImg} alt="Marvex International" style={{ height: '52px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.05)' }} />
            </div>
            <p className="footer-bio-text">
              Marvex International is an established manufacturer & direct exporter with 25+ years of excellence in Precision Earthing Parts, Copper Bonded Rods, and CNC Machined Brass Components.
            </p>
            <div className="footer-social-row">
              <a href="https://share.google/6nQMlO1sbIvnqPpJU" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/marvex_international/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://in.linkedin.com/company/marvex-international" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Home
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>
                  <ChevronRight size={14} className="link-arrow" /> About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Products
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="footer-col">
            <h3>Product Categories</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products', 'Earthing Accessories'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Earthing Accessories
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products', 'Cable Management'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Cable Management
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products', 'Brass Rods'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Brass Rods
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products', 'Switchboard Components'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Switchboard Components
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Rajkot, Gujarat-360004, INDIA</span>
              </div>
              <a href="tel:+91 8200712955" className="footer-contact-item item-link">
                <Phone size={18} className="contact-icon" />
                <span>+91 8200712955</span>
              </a>
              <a href="mailto:marvexinternational@gmail.com" className="footer-contact-item item-link">
                <Mail size={18} className="contact-icon" />
                <span>marvexinternational@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Marvex International. All Rights Reserved.</p>
          <div className="footer-bottom-right">
            <span>
              Developed by{' '}
              <a 
                href="https://www.matrixtechx.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#FFFFFF', 
                  fontWeight: 800, 
                  textDecoration: 'underline', 
                  textUnderlineOffset: '3px',
                  transition: 'all 0.2s ease' 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#38BDF8'}
                onMouseOut={(e) => e.currentTarget.style.color = '#FFFFFF'}
              >
                MatrixTechX
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
