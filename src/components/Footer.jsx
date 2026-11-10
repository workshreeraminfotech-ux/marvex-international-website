import React from 'react';
import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logoData.js';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#011B48', color: '#fff', padding: '60px 0 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div className="footer-brand">
            <div style={{ marginBottom: '20px' }}>
              <img src={logoImg} alt="Marvex International Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', margin: '16px 0 20px', lineHeight: 1.6 }}>
              Marvex International is an established manufacturer & direct exporter with 25+ years of excellence in Precision Earthing Parts, Copper Bonded Rods, and CNC Machined Brass Components.
            </p>
            <div className="social-links">
              <a href="https://share.google/6nQMlO1sbIvnqPpJU" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/marvex_international/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://in.linkedin.com/company/marvex-international" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=918200712955&text=Hi%20Marvex%20International!%20I%20would%20like%20to%20enquire%20about%20your%20Earthing%20Parts%20and%20Brass%20Components." target="_blank" rel="noopener noreferrer" className="social-icon" title="Business WhatsApp">
                <MessageCircle size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>About Us</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Products</a></li>
              <li><a href="#faq" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>FAQ</a></li>
              <li><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Product Categories</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Earthing Accessories</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Cable Management</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Brass Rods</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Switchboard Components</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Connect Desk</h4>
            <div className="footer-contact">
              <strong>Phone / WhatsApp:</strong> +91 8200712955
            </div>
            <div className="footer-contact">
              <strong>Email:</strong> marvexinternational@gmail.com
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <strong>Location:</strong> Rajkot, Gujarat (India)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Marvex International. All Rights Reserved.</p>
          <p>
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
          </p>
        </div>
      </div>
    </footer>
  );
}
