import React from 'react';
import { Phone, Mail, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-left">
          <a href="tel:+91 8200712955" className="announcement-item">
            <Phone size={14} color="#CBD5E1" />
            <span>+91 8200712955</span>
          </a>
          <a href="mailto:marvexinternational@gmail.com" className="announcement-item">
            <Mail size={14} color="#CBD5E1" />
            <span>marvexinternational@gmail.com</span>
          </a>
        </div>

        <div className="announcement-center-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '3px 12px', borderRadius: '100px', fontSize: '12px', color: '#F1F5F9', fontWeight: 600 }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s infinite' }}></span>
          <span>🏭 <strong>25+ Years Manufacturing Heritage:</strong> Direct Export of Earthing & Brass Components! 🚢</span>
        </div>

        <div className="announcement-right">
          <span style={{ fontSize: '12px', opacity: 0.8, fontWeight: 600 }}>Follow Us:</span>
          <div className="social-links">
            <a href="https://share.google/6nQMlO1sbIvnqPpJU" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
              <Facebook size={14} />
            </a>
            <a href="https://www.instagram.com/marvex_international/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
              <Instagram size={14} />
            </a>
            <a href="https://in.linkedin.com/company/marvex-international" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=918200712955&text=Hi%20Marvex%20International!%20I%20would%20like%20to%20enquire%20about%20your%20Earthing%20Parts%20and%20Brass%20Components." target="_blank" rel="noopener noreferrer" className="social-icon" title="Business WhatsApp">
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
