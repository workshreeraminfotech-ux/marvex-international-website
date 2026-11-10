import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logoData.js';

// Pre-import key visual assets so they start decoding & caching during preloader
import heroImg1 from '../assets/hero section/cable management.webp';
import heroImg2 from '../assets/hero section/earthing parts.webp';
import heroImg3 from '../assets/hero section/lugs and connectors.webp';
import heroImg4 from '../assets/hero section/rods.webp';
import heroImg5 from '../assets/hero section/switchboard component.webp';
import aboutImg from '../assets/about-us.webp';
import sig1 from '../assets/signture products/Brass Switchgear Clip Crank with Assambly.webp';
import sig2 from '../assets/signture products/Hot Line Clamp.webp';
import sig3 from '../assets/signture products/EARTH RETURN BRUSH WITH BRUSH HOLDER ASSEMBLY.webp';
import sig4 from '../assets/hero section/rods.webp';

export default function Preloader({ minDuration = 4000, onFinish }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Lock body scroll while preloader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  // Preload all critical images in background while preloader runs
  useEffect(() => {
    const assetsToPreload = [
      heroImg1,
      heroImg2,
      heroImg3,
      heroImg4,
      heroImg5,
      aboutImg,
      sig1,
      sig2,
      sig3,
      sig4
    ];

    assetsToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Smooth 4-second progress counter from 0% to 100%
  useEffect(() => {
    if (!loading) {
      if (onFinish) onFinish();
      return;
    }

    const startTime = performance.now();
    let animId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.round((elapsed / minDuration) * 100), 100);
      setProgress(pct);

      if (elapsed < minDuration) {
        animId = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          if (onFinish) onFinish();
        }, 220);
      }
    };

    animId = requestAnimationFrame(tick);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [loading, minDuration, onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="marvex-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FFFFFF',
            zIndex: 99999999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            userSelect: 'none',
            overflow: 'hidden'
          }}
        >
          {/* Subtle ambient radial glow behind logo */}
          <div
            style={{
              position: 'absolute',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(1, 27, 72, 0.04) 0%, rgba(255, 255, 255, 0) 70%)',
              pointerEvents: 'none'
            }}
          />

          {/* Centered Box */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center'
            }}
          >
            {/* Centered Company Logo - Instant Display without Fade Delay */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '32px'
              }}
            >
              <img
                src={logoImg}
                alt="Marvex International"
                fetchPriority="high"
                decoding="sync"
                style={{
                  height: '92px',
                  width: 'auto',
                  maxWidth: '280px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.06))',
                  display: 'block'
                }}
              />
            </div>

            {/* Loading Line Track */}
            <div
              style={{
                width: '260px',
                maxWidth: '75vw',
                height: '4px',
                backgroundColor: '#E2E8F0',
                borderRadius: '999px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)'
              }}
            >
              {/* Filling Progress Line */}
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #011B48 0%, #0B3B7B 60%, #1E40AF 100%)',
                  borderRadius: '999px',
                  boxShadow: '0 0 10px rgba(1, 27, 72, 0.35)',
                  transition: 'width 0.04s linear',
                  position: 'relative'
                }}
              >
                {/* Glowing Lead Edge */}
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 0 6px 2px rgba(1, 27, 72, 0.5)'
                  }}
                />
              </div>
            </div>

            {/* Bottom Status Text & Percentage */}
            <div
              style={{
                marginTop: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '260px',
                maxWidth: '75vw'
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#64748B'
                }}
              >
                Loading
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.5px',
                  color: '#011B48',
                  fontFamily: 'monospace'
                }}
              >
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
