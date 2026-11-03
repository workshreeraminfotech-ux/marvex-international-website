import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import heroImg1 from '../assets/hero section/cable management.webp';
import heroImg2 from '../assets/hero section/earthing parts.webp';
import heroImg3 from '../assets/hero section/lugs and connectors.webp';
import heroImg4 from '../assets/hero section/rods.webp';
import heroImg5 from '../assets/hero section/switchboard component.webp';

const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

const slideVariants = {
  enter: {
    x: '100%',
    opacity: 1
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'tween', ease: [0.25, 1, 0.5, 1], duration: 0.75 }
    }
  },
  exit: {
    x: '-100%',
    opacity: 1,
    transition: {
      x: { type: 'tween', ease: [0.25, 1, 0.5, 1], duration: 0.75 }
    }
  }
};

export default function HeroBannerSlider({ onOpenQuote, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all background images so transitions are instant & seamless
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // One by one photo auto scroll every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero"
      className="jrp-hero-section" 
      style={{ 
        position: 'relative', 
        minHeight: '620px', 
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden', 
        background: '#070b14',
        marginTop: 0,
        clear: 'both',
        padding: '85px 0 88px'
      }}
    >
      {/* Full-width One-by-One Auto-Scrolling Background Slides */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              willChange: 'transform'
            }}
          >
            <img
              src={heroImages[currentIndex]}
              alt={`Marvex International Hero Background ${currentIndex + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(0.92) contrast(1.08)',
                display: 'block'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark Gradient Overlay for Maximum Text Contrast and Readability */}
      <div 
        className="hero-video-overlay" 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(7, 11, 20, 0.52) 0%, rgba(7, 11, 20, 0.65) 55%, rgba(5, 8, 16, 0.85) 100%)', 
          zIndex: 2,
          pointerEvents: 'none'
        }}
      ></div>

      {/* Foreground Content - Static & untouched as requested */}
      <div className="container" style={{ position: 'relative', zIndex: 4, width: '100%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Main Framed Heading Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              border: '2px solid rgba(255, 255, 255, 0.95)',
              padding: 'clamp(20px, 3.5vw, 36px) clamp(30px, 6vw, 70px)',
              display: 'inline-block',
              textAlign: 'center',
              margin: '0 auto 24px auto',
              background: 'transparent',
              boxShadow: 'none'
            }}
          >
            <div 
              style={{ 
                fontFamily: 'var(--font-h)', 
                fontSize: 'clamp(32px, 4.8vw, 54px)', 
                fontWeight: 600, 
                color: '#ffffff', 
                lineHeight: 1.18, 
                letterSpacing: '-0.3px',
                textShadow: '0 3px 18px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)'
              }}
            >
              Welcome to
            </div>
            <div 
              style={{ 
                fontFamily: 'var(--font-h)', 
                fontSize: 'clamp(42px, 6.8vw, 78px)', 
                fontWeight: 800, 
                color: '#ffffff', 
                lineHeight: 1.1, 
                letterSpacing: '-0.5px',
                marginTop: '4px',
                textShadow: '0 4px 24px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.95)'
              }}
            >
              Marvex International
            </div>
          </motion.div>

          {/* Subtitle Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              fontSize: 'clamp(16px, 2.1vw, 20px)', 
              color: 'rgba(255, 255, 255, 0.96)', 
              fontWeight: 500,
              lineHeight: 1.6, 
              marginBottom: '32px', 
              maxWidth: '920px', 
              letterSpacing: '0.2px',
              textShadow: '0 2px 14px rgba(0,0,0,0.75)' 
            }}
          >
            Your Trusted Partner for Earthing Solutions and Precision Brass Components with 25+ Years Manufacturing Heritage across 2 Gujarat Units (Rajkot & Jamnagar). Direct Global Export of Certified Electrical Protection & Precision Machined Parts.
          </motion.p>

          {/* Slide Indicator Dots */}
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '12px' }}>
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  width: idx === currentIndex ? '26px' : '8px',
                  height: '7px',
                  borderRadius: '4px',
                  background: idx === currentIndex ? '#FFFFFF' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
