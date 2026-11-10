import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, Clock, Globe, Send, CheckCircle2 } from 'lucide-react';
import { addEnquiry } from '../utils/adminStore';

const countryCodes = ['+91', '+1', '+44', '+971', '+65', '+27', '+49', '+61', '+33', '+86', '+55', '+52'];

const contactCards = [
  {
    icon: Phone, label: 'Phone / WhatsApp',
    value: '+91 8200712955',
    sub: 'Mon–Sat, 8AM – 8PM IST',
    href: 'tel:+91 8200712955',
    color: '#011B48'
  },
  {
    icon: Mail, label: 'Email Address',
    value: 'sales@marvexinternational.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:sales@marvexinternational.com',
    color: '#6E737D'
  },
  {
    icon: MapPin, label: 'Our Location',
    value: 'Rajkot / Jamnagar, Gujarat, India',
    sub: 'Manufacturing & Export Hub',
    href: '#map',
    color: '#011B48'
  },
  {
    icon: Clock, label: 'Business Hours',
    value: 'Mon–Sat: 8AM – 8PM',
    sub: 'Sunday: Closed (IST)',
    href: null,
    color: '#6E737D'
  },
];

export default function ContactPage({ initialProduct = '' }) {
  const [form, setForm] = useState({ 
    name: '', 
    company: '', 
    email: '', 
    countryCode: '+91', 
    phone: '', 
    product: initialProduct || '', 
    quantity: '', 
    message: initialProduct ? `Inquiry for export pricing, technical specifications, and drawing development of ${initialProduct}.` : '' 
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!initialProduct) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [initialProduct]);

  useEffect(() => {
    if (initialProduct) {
      setForm(prev => ({
        ...prev,
        product: initialProduct,
        message: prev.message || `Inquiry for export pricing, technical specifications, and drawing development of ${initialProduct}.`
      }));
    }
  }, [initialProduct]);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const enquiryPayload = {
      source: 'Contact Us Form',
      name: form.name,
      company: form.company,
      email: form.email,
      phone: `${form.countryCode} ${form.phone}`,
      product: form.product || 'General Earthing & Brass Enquiry',
      quantity: form.quantity || 'N/A',
      notes: form.message
    };

    // 1. Save to Local Admin Store
    await addEnquiry(enquiryPayload);

    // 2. Dispatch to sales@marvexinternational.com via FormSubmit AJAX endpoint
    try {
      await fetch('https://formsubmit.co/ajax/sales@marvexinternational.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Website Export Inquiry: ${form.name} (${form.company || 'Website Lead'})`,
          _replyto: form.email,
          _template: 'table',
          'Full Name': form.name,
          'Company': form.company || 'N/A',
          'Email Address': form.email,
          'Phone / WhatsApp': `${form.countryCode} ${form.phone}`,
          'Product Interest': form.product || 'General Earthing & Brass Enquiry',
          'Target Quantity': form.quantity || 'N/A',
          'Message / Requirements': form.message
        })
      });
    } catch (err) {
      console.warn('Background mail dispatch notice:', err);
    }

    setSubmitting(false);
    setSubmitted(true);

    // Reset form fields immediately so inputs are automatically cleared
    setForm({
      name: '',
      company: '',
      email: '',
      countryCode: '+91',
      phone: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Page Hero */}
      <section style={{
        position: 'relative',
        color: '#FFFFFF',
        padding: '75px 0 65px',
        overflow: 'hidden',
        backgroundColor: '#1C1917',
        textAlign: 'center'
      }}>
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=70" 
          alt="Contact Marvex International Background" 
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Navy Dark Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(1, 27, 72, 0.82) 0%, rgba(0, 14, 38, 0.92) 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{
              fontFamily: 'var(--font-h, Outfit, sans-serif)',
              fontSize: 'clamp(34px, 5vw, 54px)',
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.15,
              color: '#FFFFFF'
            }}>
              Contact Marvex International
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ background: '#F8FAFC', padding: '48px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {contactCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '24px 20px',
                  border: '1.5px solid var(--border)',
                  boxShadow: '0 6px 20px rgba(1, 27, 72, 0.05)',
                  cursor: c.href ? 'pointer' : 'default',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  minWidth: 0,
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ y: -4, borderColor: '#011B48', boxShadow: '0 12px 30px rgba(1, 27, 72, 0.15)' }}
                onClick={() => c.href && c.href !== '#map' && window.open(c.href)}
              >
                <div style={{ width: 48, height: 48, borderRadius: 14, background: '#F1F5F9', border: '1px solid #CBD5E1', color: '#011B48', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <c.icon size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                  <span style={{ display: 'block', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#6E737D', marginBottom: 4 }}>{c.label}</span>
                  <strong 
                    style={{ 
                      fontSize: c.label === 'Email Address' ? '13px' : '14.5px', 
                      color: '#011B48', 
                      display: 'block',
                      wordBreak: 'break-all',
                      overflowWrap: 'anywhere',
                      lineHeight: 1.35
                    }}
                    title={c.value}
                  >
                    {c.value}
                  </strong>
                  <span style={{ display: 'block', fontSize: 12, color: 'var(--gray)', marginTop: 2 }}>{c.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-80">
        <div className="container">
          <div className="contact-page-grid">
            {/* Form */}
            <motion.div
              id="contact-form"
              className="contact-form-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 style={{ fontFamily: 'var(--font-h)', fontSize: 24, fontWeight: 800, marginBottom: 6 }}>
                Send an Enquiry / Request RFQ
              </h3>
              <p style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 28 }}>
                Fill in your project requirements below and our technical export team will provide detailed pricing, drawings, and delivery timelines.
              </p>

              {submitted && (
                <div style={{ backgroundColor: '#D1FAE5', border: '1px solid #6EE7B7', color: '#065F46', padding: '16px 20px', borderRadius: '12px', textAlign: 'center', fontWeight: 600, fontSize: '15px', marginBottom: '22px' }}>
                  Thank you for your inquiry, we will respond within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Company / Organization</label>
                    <input name="company" placeholder="Company / EPC Contractor name" value={form.company} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" placeholder="buyer@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <select name="countryCode" value={form.countryCode} onChange={handleChange} style={{ width: 90, flexShrink: 0 }}>
                        {countryCodes.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <input type="tel" name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} required style={{ flex: 1 }} />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Product Interest</label>
                    <input name="product" placeholder="e.g. Copper Bonded Rods, Brass Cable Glands" value={form.product} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Target Quantity / Volume</label>
                    <input name="quantity" placeholder="e.g. 5,000 Pcs / 1x20ft Container" value={form.quantity} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message / Technical Requirements *</label>
                  <textarea
                    name="message"
                    placeholder="Describe your technical specifications — copper microns, rod diameter/length, thread standard (Metric/NPT), destination port, packaging..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    style={{ minHeight: 130 }}
                  />
                </div>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-primary" disabled={submitting} style={{ flex: 1, justifyContent: 'center' }}>
                    <Send size={17} />
                    <span>{submitting ? 'Sending Enquiry...' : 'Submit Export Enquiry'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Right Side */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Map */}
              <motion.div
                className="map-card"
                id="map"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ minHeight: 300 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59074.89620023602!2d70.7600!3d22.2800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93b3b4!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  title="MARVEX INTERNATIONAL - Official Factory & Export Office Location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* WhatsApp Direct */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ background: '#E8F5E9', border: '1.5px solid #A5D6A7', borderRadius: 16, padding: '24px 28px' }}
              >
                <h4 style={{ fontFamily: 'var(--font-h)', fontSize: 17, fontWeight: 800, marginBottom: 6 }}>
                  💬 Prefer to Chat Directly?
                </h4>
                <p style={{ fontSize: 14, color: 'var(--gray)', marginBottom: 16 }}>
                  Chat directly with our export engineering desk on WhatsApp for immediate assistance!
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=918200712955&text=Hi%20Marvex%20International!%20I%20would%20like%20to%20enquire%20about%20your%20Earthing%20Parts%20and%20Brass%20Components."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ display: 'inline-flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2ZM17.82 16.19C17.58 16.86 16.63 17.43 15.82 17.61C15.26 17.73 14.54 17.82 12.08 16.8C8.94 15.5 6.92 12.31 6.76 12.1C6.61 11.89 5.48 10.39 5.48 8.83C5.48 7.27 6.27 6.51 6.59 6.18C6.91 5.85 7.23 5.85 7.47 5.85C7.71 5.85 7.95 5.85 8.11 5.86C8.27 5.86 8.51 5.8 8.75 6.38C8.99 6.96 9.58 8.39 9.65 8.54C9.72 8.69 9.79 8.89 9.69 9.09C9.59 9.29 9.52 9.39 9.37 9.56C9.22 9.73 9.07 9.87 8.92 10.05C8.76 10.22 8.6 10.4 8.78 10.71C8.96 11.02 9.58 12.03 10.49 12.84C11.67 13.89 12.63 14.23 12.95 14.38C13.27 14.53 13.46 14.5 13.65 14.28C13.84 14.06 14.47 13.33 14.7 13.01C14.93 12.69 15.17 12.73 15.48 12.85C15.79 12.97 17.46 13.79 17.77 13.95C18.08 14.11 18.29 14.19 18.37 14.33C18.45 14.47 18.45 15.13 18.21 15.8C18.06 16.19 17.82 16.19 17.82 16.19Z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={15} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
