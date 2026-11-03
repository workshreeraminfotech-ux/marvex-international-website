import React from 'react';
import { ArrowRight, Factory, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import worldMapImg from '../assets/world-map-export.png';

export default function AboutUs({ onNavigate }) {
  return (
    <section className="about-section py-50" id="about" style={{ backgroundColor: '#FFFFFF', padding: '54px 0' }}>
      <div className="container">
        <div className="about-grid-wrapper">
          
          {/* Photo Column (Left on Laptop, Appears right after Intro on Phone) */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', width: '100%' }}
          >
            {/* World Map / Global Export Footprint Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1.5px solid #CBD5E1',
              boxShadow: '0 12px 32px rgba(1, 27, 72, 0.08)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 14px',
              width: '100%'
            }}>
              <img
                src={worldMapImg}
                alt="Marvex International - Global Export Footprint & World Distribution Map"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  display: 'block'
                }}
              />
            </div>

            {/* 2 Manufacturing Facilities Showcase (Below Photo) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              marginTop: '18px'
            }}>
              <div style={{
                background: '#F8FAFC',
                border: '1.5px solid #CBD5E1',
                borderRadius: '16px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 4px 14px rgba(1, 27, 72, 0.05)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#011B48',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#FFFFFF'
                }}>
                  <Building2 size={22} />
                </div>
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#011B48', display: 'block', fontWeight: 800 }}>1 Unit in Rajkot</strong>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>Earthing Solutions</span>
                </div>
              </div>

              <div style={{
                background: '#F8FAFC',
                border: '1.5px solid #CBD5E1',
                borderRadius: '16px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 4px 14px rgba(1, 27, 72, 0.05)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: '#011B48',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#FFFFFF'
                }}>
                  <Factory size={22} />
                </div>
                <div>
                  <strong style={{ fontSize: '14.5px', color: '#011B48', display: 'block', fontWeight: 800 }}>1 Unit in Jamnagar</strong>
                  <span style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 600 }}>Precision Brass Hub</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column (Right on Laptop, Flow on Phone) */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Intro Lead Block */}
            <div className="about-intro-lead-block" style={{ marginTop: 0, paddingTop: 0 }}>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.2, margin: '0 0 16px', fontFamily: 'var(--font-h, Outfit, sans-serif)' }}>
                Manufacturing Pioneers, Direct Global Exporters
              </h2>

              <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65, marginBottom: '20px', fontWeight: 500 }}>
                With <strong>over 25 years of robust manufacturing heritage</strong>, our industrial group operates <strong>2 state-of-the-art production facilities across Gujarat</strong> — including <strong>1 specialized unit in Rajkot</strong> and <strong>1 high-capacity unit in Jamnagar</strong> (India’s premier brass hub).
              </p>
            </div>

            {/* Mobile Injected Photo Slot (Visible only on phone) */}
            <div className="about-mobile-photo-placement" />

            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '18px' }}>
              To facilitate seamless international trade and deliver factory-direct pricing to global markets, our manufacturing group established <strong>Marvex International as our dedicated direct sales & export firm</strong>. While our commercial operations and international shipments are managed under the Marvex International banner, every product is engineered directly at our own manufacturing plants.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, margin: 0 }}>
              This unique structure empowers our global EPC contractors, power utilities, and electrical distributors with true manufacturer-level customization, in-house alloy casting, tight CNC precision tolerances, and guaranteed compliance with IEC, IEEE, and BS standards — eliminating middleman costs completely.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
