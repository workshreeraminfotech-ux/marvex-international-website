import React from 'react';
import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import heroImg1 from '../assets/hero section/cable management.webp';

export default function HeroSection() {
  return (
    <section className="jrp-hero-section" id="hero" style={{ position: 'relative' }}>
      <img 
        src={heroImg1} 
        alt="Hero Background" 
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <div className="hero-video-overlay"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="jrp-hero-content-wrapper">
          <div className="jrp-hero-badge">
            <Globe2 size={14} />
            <span>World-Class Earthing & Brass Exports</span>
          </div>

          <div className="jrp-hero-content">
            <h1>
              Marvex International, <br />
              <span>Precision & Trust</span>
            </h1>

            <p className="jrp-hero-description">
              Choose Marvex International for certified earthing solutions and precision brass components manufactured to international standards.
            </p>

            <ul className="jrp-hero-list">
              <li>
                <CheckCircle2 size={18} />
                <span>Manufacturing Heritage, Global Shipping</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>Certified Engineering Standards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
