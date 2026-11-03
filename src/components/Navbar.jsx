import React, { useState, useRef } from 'react';
import { 
  Menu, X, MapPin, Mail, Phone, Download, ChevronDown, ChevronRight,
  Zap, ShieldCheck, Link2, Cpu, Sparkles, Wrench, Layers, Hexagon, Settings, LayoutGrid
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export const PRODUCT_CATEGORIES_MENU = [
  { name: 'Cable Management', icon: Zap },
  { name: 'Earthing Accessories', icon: ShieldCheck },
  { name: 'Lugs & Connectors', icon: Link2 },
  { name: 'Switchboard Components', icon: Cpu },
  { name: 'Electrical Components', icon: Sparkles },
  { name: 'Fixings & Fasteners', icon: Wrench },
  { name: 'Channel Strut Accessories', icon: Layers },
  { name: 'Brass Rods', icon: Hexagon },
  { name: 'Custom Made Products', icon: Settings },
  { name: 'View All Products', icon: LayoutGrid, isAll: true }
];

export default function Navbar({ activePage, onNavigate, onOpenQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleNav = (id, category = 'All') => {
    setDropdownOpen(false);
    setMobileOpen(false);
    if (onNavigate) onNavigate(id, category);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleLogoClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setDropdownOpen(false);
    setMobileOpen(false);
    if (onNavigate) onNavigate('home');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <>
      <header className="jrp-header">
        <div className="container">
          <div className="jrp-header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '86px', height: '86px' }}>
            {/* Logo */}
            <a href="#" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }} title="Marvex International — Go to Home / Hero">
              <img 
                src={logoImg} 
                alt="Marvex International" 
                className="jrp-header-logo-img" 
                style={{ 
                  height: '70px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  filter: 'contrast(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.06))',
                  display: 'block'
                }} 
              />
            </a>

            {/* Desktop Navigation Menu */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="d-none-mobile">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('home'); }}
                style={{ fontWeight: 700, fontSize: '17px', color: activePage === 'home' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Home
              </a>
              
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('about'); }}
                style={{ fontWeight: 700, fontSize: '17px', color: activePage === 'about' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                About Us
              </a>

              {/* Products Dropdown Nav Item with Hover Menu */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleNav('products', 'All'); }}
                  style={{ 
                    fontWeight: 700, 
                    fontSize: '17px', 
                    color: activePage === 'products' ? 'var(--gold)' : 'var(--navy)', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 0'
                  }}
                >
                  <span>Products</span>
                  <ChevronDown size={15} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: dropdownOpen ? 'var(--gold)' : 'inherit' }} />
                </a>

                {/* Dropdown Card */}
                {dropdownOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '580px',
                      maxWidth: '92vw',
                      paddingTop: '10px',
                      zIndex: 99999
                    }}
                  >
                    <div 
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        background: '#FFFFFF',
                        borderRadius: '16px',
                        border: '1.5px solid var(--border)',
                        boxShadow: '0 20px 50px rgba(1, 27, 72, 0.16), 0 4px 16px rgba(0, 0, 0, 0.06)',
                        padding: '14px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '10px 12px'
                      }}
                    >
                      {PRODUCT_CATEGORIES_MENU.map((cat, idx) => {
                        const IconComp = cat.icon;
                        const targetCategory = cat.isAll ? 'All' : cat.name;

                        return (
                          <div
                            key={idx}
                            onClick={() => handleNav('products', targetCategory)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '10px',
                              padding: '11px 14px',
                              borderRadius: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                              border: cat.isAll ? '1.5px solid rgba(1, 27, 72, 0.35)' : '1px solid #E2E8F0',
                              background: cat.isAll ? '#F1F5F9' : '#F8FAFC',
                              boxSizing: 'border-box'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#011B48';
                              e.currentTarget.style.borderColor = '#011B48';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              const textEl = e.currentTarget.querySelector('.cat-title');
                              if (textEl) textEl.style.color = '#FFFFFF';
                              const iconWrap = e.currentTarget.querySelector('.cat-icon-wrap');
                              if (iconWrap) {
                                iconWrap.style.background = '#0B2556';
                                iconWrap.style.borderColor = '#011B48';
                                iconWrap.style.color = '#FFFFFF';
                              }
                              const arrow = e.currentTarget.querySelector('.cat-arrow');
                              if (arrow) arrow.style.color = '#FFFFFF';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = cat.isAll ? '#F1F5F9' : '#F8FAFC';
                              e.currentTarget.style.borderColor = cat.isAll ? 'rgba(1, 27, 72, 0.35)' : '#E2E8F0';
                              e.currentTarget.style.transform = 'translateY(0)';
                              const textEl = e.currentTarget.querySelector('.cat-title');
                              if (textEl) textEl.style.color = '#011B48';
                              const iconWrap = e.currentTarget.querySelector('.cat-icon-wrap');
                              if (iconWrap) {
                                iconWrap.style.background = '#FFFFFF';
                                iconWrap.style.borderColor = '#CBD5E1';
                                iconWrap.style.color = '#011B48';
                              }
                              const arrow = e.currentTarget.querySelector('.cat-arrow');
                              if (arrow) arrow.style.color = '#94A3B8';
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                              <div 
                                className="cat-icon-wrap"
                                style={{ 
                                  width: '32px', 
                                  height: '32px', 
                                  borderRadius: '8px', 
                                  background: '#FFFFFF', 
                                  border: '1px solid #CBD5E1',
                                  color: '#011B48',
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center',
                                  flexShrink: 0,
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                <IconComp size={16} />
                              </div>
                              <span 
                                className="cat-title"
                                style={{ 
                                  fontSize: '13.5px', 
                                  fontWeight: 700, 
                                  color: '#011B48', 
                                  whiteSpace: 'nowrap',
                                  transition: 'color 0.2s ease'
                                }}
                              >
                                {cat.name}
                              </span>
                            </div>
                            <ChevronRight className="cat-arrow" size={14} color="#94A3B8" style={{ flexShrink: 0, transition: 'color 0.2s ease' }} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
                style={{ fontWeight: 700, fontSize: '17px', color: activePage === 'contact' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Contact Us
              </a>
            </nav>

            {/* Actions: CTA + Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div className="d-none-mobile">
                <a
                  href="/marvex-international-brochure.pdf"
                  download="Marvex_International_Product_Brochure.pdf"
                  className="brochure-highlight-btn"
                  title="Download Marvex International Product Brochure"
                >
                  <Download size={16} className="brochure-icon" />
                  <span>Download Brochure</span>
                </a>
              </div>

              <button
                className="mobile-menu-toggle-btn"
                onClick={() => setMobileOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)', padding: '6px' }}
                aria-label="Toggle Navigation"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Drawer */}
      {mobileOpen && (
        <>
          <div className="jrp-offcanvas-overlay" onClick={() => setMobileOpen(false)} />
          <div className="jrp-offcanvas">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={logoImg} alt="Marvex International" style={{ height: '66px', width: 'auto', objectFit: 'contain', filter: 'contrast(1.08)' }} />
              </div>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}>
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home'); }} style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('about'); }} style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>About Us</a>
              
              {/* Expandable Mobile Products Accordion */}
              <div>
                <div 
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: '17px', color: 'var(--navy)', cursor: 'pointer', padding: '4px 0' }}
                >
                  <span>Products</span>
                  <ChevronDown size={18} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: 'var(--gold)' }} />
                </div>

                {mobileProductsOpen && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '12px', marginTop: '10px', borderLeft: '2px solid var(--border)' }}>
                    {PRODUCT_CATEGORIES_MENU.map((cat, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleNav('products', cat.isAll ? 'All' : cat.name)}
                        style={{ 
                          fontSize: '14px', 
                          fontWeight: cat.isAll ? 800 : 600, 
                          color: '#011B48', 
                          cursor: 'pointer', 
                          padding: '4px 0' 
                        }}
                      >
                        {cat.isAll ? '⚡ ' + cat.name : cat.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>Contact Us</a>
            </div>

            {/* Offcanvas Contact Info */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '12px', color: 'var(--navy)' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--gray)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} style={{ color: 'var(--gold)' }} />
                  <span>Rajkot, Gujarat-360004, INDIA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} style={{ color: 'var(--gold)' }} />
                  <span>marvexinternational@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} style={{ color: 'var(--gold)' }} />
                  <span>+91 8200712955</span>
                </div>
              </div>

              <div style={{ marginTop: '18px' }}>
                <a 
                  href="/marvex-international-brochure.pdf"
                  download="Marvex_International_Product_Brochure.pdf"
                  className="brochure-highlight-btn" 
                  onClick={() => setMobileOpen(false)} 
                  style={{ width: '100%' }}
                >
                  <Download size={16} className="brochure-icon" />
                  <span>Download Brochure</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
