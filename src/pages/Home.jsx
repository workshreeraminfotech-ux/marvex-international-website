import React, { useEffect } from 'react';
import HeroBannerSlider from '../components/HeroBannerSlider';
import AboutUs from '../components/AboutUs';
import WhyPriyaImpex from '../components/WhyPriyaImpex';
import MainSeedsShowcase from '../components/MainSeedsShowcase';
import SignatureShowcase from '../components/SignatureShowcase';
import CertificationsSection from '../components/CertificationsSection';
import FAQ from '../components/FAQ';
import CtaBanner from '../components/CtaBanner';

export default function Home({ onSelectProduct, onNavigate, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div id="home" className="home-page">
      <HeroBannerSlider onOpenQuote={() => onOpenQuote()} onNavigate={onNavigate} />
      <AboutUs onNavigate={onNavigate} />
      <WhyPriyaImpex />
      <MainSeedsShowcase onSelectProduct={onSelectProduct} onOpenQuote={(product) => onOpenQuote(product)} onNavigate={onNavigate} />
      <SignatureShowcase onSelectProduct={onSelectProduct} onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
      <CertificationsSection bgColor="#FFFFFF" />
      <FAQ onNavigate={onNavigate} />
      <CtaBanner onOpenQuote={() => onOpenQuote()} onNavigate={onNavigate} />
    </div>
  );
}
