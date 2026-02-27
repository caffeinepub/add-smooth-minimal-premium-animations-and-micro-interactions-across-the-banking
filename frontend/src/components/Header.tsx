import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { Menu, X, Globe, Accessibility, MessageCircle, Mic } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { useLanguage, Language } from '../contexts/LanguageContext';
import ChatbotPanel from './ChatbotPanel';
import VoiceAssistantDropdown from './VoiceAssistantDropdown';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'NEO Banking', path: '/neo' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const LANGUAGES: { code: Language; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिंदी' },
  { code: 'mr', label: 'Marathi', native: 'मराठी' },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
  { code: 'te', label: 'Telugu', native: 'తెలుగు' },
  { code: 'bn', label: 'Bengali', native: 'বাংলা' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);

  const { fontSize, setFontSize, highContrast, toggleHighContrast } = useAccessibility();
  const { language, setLanguage } = useLanguage();

  const langRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (accessRef.current && !accessRef.current.contains(e.target as Node)) setAccessOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  const controlBtnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
    padding: '6px 8px',
    borderRadius: '8px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    color: '#111111',
    transition: 'transform 0.18s ease, background 0.18s ease, opacity 0.18s ease',
    minWidth: '44px',
  };

  const controlLabelStyle: React.CSSProperties = {
    fontSize: '10px',
    fontWeight: 600,
    color: '#111111',
    letterSpacing: '0.04em',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(255,255,255,0.96)'
          : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled
          ? '1px solid rgba(180,170,220,0.35)'
          : '1px solid rgba(200,190,230,0.2)',
        boxShadow: isScrolled
          ? '0 2px 20px rgba(100,80,180,0.08)'
          : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/assets/generated/dsouza-bank-logo-transparent.dim_300x150.png"
              alt="DSOUZA BANK"
              style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flex: 1,
            justifyContent: 'center',
          }}
          className="header-nav-desktop"
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                color: '#111111',
                transition: 'background 0.18s, color 0.18s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(100,80,180,0.08)';
                (e.currentTarget as HTMLElement).style.color = '#4B0082';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.color = '#111111';
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0,
          }}
          className="header-controls-desktop"
        >
          {/* Font Size Toggle */}
          <button
            style={controlBtnStyle}
            onClick={() => {
              const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
              const idx = sizes.indexOf(fontSize as 'small' | 'medium' | 'large');
              setFontSize(sizes[(idx + 1) % 3]);
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
              (e.currentTarget as HTMLElement).style.background = 'rgba(100,80,180,0.08)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
            title="Toggle font size"
            aria-label="Toggle font size"
          >
            <img
              src="/assets/generated/font-resize-icons-transparent.dim_120x40.png"
              alt="Font size"
              style={{ height: '18px', width: 'auto', objectFit: 'contain' }}
            />
            <span style={controlLabelStyle}>
              {fontSize === 'small' ? 'A-' : fontSize === 'large' ? 'A+' : 'A'}
            </span>
          </button>

          {/* Divider */}
          <div style={{ width: '1px', height: '28px', background: 'rgba(150,140,200,0.25)', margin: '0 2px' }} />

          {/* Language Selector */}
          <div ref={langRef} style={{ position: 'relative' }}>
            <button
              style={controlBtnStyle}
              onClick={() => { setLangOpen(v => !v); setAccessOpen(false); }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(100,80,180,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
              title="Select language"
              aria-label="Select language"
            >
              <Globe size={18} color="#111111" />
              <span style={controlLabelStyle}>{currentLang.code.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  background: 'rgba(255,255,255,0.97)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(200,200,220,0.4)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  zIndex: 9999,
                  minWidth: '160px',
                  overflow: 'hidden',
                  animation: 'chatPanelSlideDown 0.18s ease',
                }}
              >
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLanguage(l.code); setLangOpen(false); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '9px 14px',
                      background: language === l.code ? 'rgba(75,0,130,0.07)' : 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '13px',
                      color: '#111111',
                      fontWeight: language === l.code ? 600 : 400,
                      transition: 'background 0.12s',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => { if (language !== l.code) (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)'; }}
                    onMouseLeave={e => { if (language !== l.code) (e.currentTarget as HTMLElement).style.background = 'none'; }}
                  >
                    <span>{l.native}</span>
                    <span style={{ fontSize: '11px', opacity: 0.55 }}>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '28px', background: 'rgba(150,140,200,0.25)', margin: '0 2px' }} />

          {/* Accessibility */}
          <div ref={accessRef} style={{ position: 'relative' }}>
            <button
              style={controlBtnStyle}
              onClick={() => { setAccessOpen(v => !v); setLangOpen(false); }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(100,80,180,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
              title="Accessibility options"
              aria-label="Accessibility options"
            >
              <Accessibility size={18} color="#111111" />
              <span style={controlLabelStyle}>Access</span>
            </button>
            {accessOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  background: 'rgba(255,255,255,0.97)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(200,200,220,0.4)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  zIndex: 9999,
                  minWidth: '200px',
                  padding: '12px',
                  animation: 'chatPanelSlideDown 0.18s ease',
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#000000', marginBottom: '10px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Accessibility
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '12px', color: '#111111', marginBottom: '6px', fontWeight: 500 }}>Font Size</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {(['small', 'medium', 'large'] as const).map(s => (
                      <button
                        key={s}
                        onClick={() => setFontSize(s)}
                        style={{
                          flex: 1,
                          padding: '5px',
                          borderRadius: '6px',
                          border: fontSize === s ? '1.5px solid rgba(75,0,130,0.5)' : '1px solid rgba(150,150,180,0.3)',
                          background: fontSize === s ? 'rgba(75,0,130,0.08)' : 'rgba(255,255,255,0.7)',
                          cursor: 'pointer',
                          fontSize: s === 'small' ? '10px' : s === 'medium' ? '12px' : '14px',
                          color: '#111111',
                          fontWeight: fontSize === s ? 600 : 400,
                          transition: 'all 0.12s',
                        }}
                      >
                        A
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={toggleHighContrast}
                  style={{
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '8px',
                    border: highContrast ? '1.5px solid rgba(75,0,130,0.5)' : '1px solid rgba(150,150,180,0.3)',
                    background: highContrast ? 'rgba(75,0,130,0.1)' : 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: '#111111',
                    fontWeight: highContrast ? 600 : 400,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.12s',
                  }}
                >
                  <img
                    src="/assets/generated/contrast-toggle-icon-transparent.dim_40x40.png"
                    alt=""
                    style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                  />
                  {highContrast ? 'High Contrast: ON' : 'High Contrast: OFF'}
                </button>
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '28px', background: 'rgba(150,140,200,0.25)', margin: '0 2px' }} />

          {/* AI Chatbot */}
          <div style={{ position: 'relative' }}>
            <button
              style={{
                ...controlBtnStyle,
                background: chatbotOpen ? 'rgba(75,0,130,0.1)' : 'transparent',
                border: chatbotOpen ? '1px solid rgba(75,0,130,0.25)' : '1px solid transparent',
              }}
              onClick={() => {
                setChatbotOpen(v => !v);
                setVoiceOpen(false);
                setLangOpen(false);
                setAccessOpen(false);
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                if (!chatbotOpen) (e.currentTarget as HTMLElement).style.background = 'rgba(75,0,130,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                if (!chatbotOpen) (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
              title="DSOUZA AI Chatbot"
              aria-label="Open AI Chatbot"
            >
              <MessageCircle size={18} color={chatbotOpen ? '#4B0082' : '#111111'} />
              <span style={{ ...controlLabelStyle, color: chatbotOpen ? '#4B0082' : '#111111' }}>DSOUZA AI</span>
            </button>
            <ChatbotPanel
              isOpen={chatbotOpen}
              onClose={() => setChatbotOpen(false)}
            />
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '28px', background: 'rgba(150,140,200,0.25)', margin: '0 2px' }} />

          {/* Voice Assistant */}
          <div style={{ position: 'relative' }}>
            <button
              style={{
                ...controlBtnStyle,
                background: voiceOpen ? 'rgba(75,0,130,0.1)' : 'transparent',
                border: voiceOpen ? '1px solid rgba(75,0,130,0.25)' : '1px solid transparent',
                boxShadow: '0 0 10px rgba(75,0,130,0.15)',
              }}
              onClick={() => {
                setVoiceOpen(v => !v);
                setChatbotOpen(false);
                setLangOpen(false);
                setAccessOpen(false);
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(75,0,130,0.3)';
                if (!voiceOpen) (e.currentTarget as HTMLElement).style.background = 'rgba(75,0,130,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 10px rgba(75,0,130,0.15)';
                if (!voiceOpen) (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
              title="Voice Assistant"
              aria-label="Open Voice Assistant"
            >
              <Mic size={18} color={voiceOpen ? '#4B0082' : '#111111'} />
              <span style={{ ...controlLabelStyle, color: voiceOpen ? '#4B0082' : '#111111' }}>Voice</span>
            </button>
            <VoiceAssistantDropdown
              isOpen={voiceOpen}
              onClose={() => setVoiceOpen(false)}
            />
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="header-mobile-toggle"
          onClick={() => setMobileOpen(v => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
            color: '#111111',
          }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(180,170,220,0.25)',
            padding: '16px 24px 20px',
            animation: 'chatPanelSlideDown 0.2s ease',
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                borderBottom: '1px solid rgba(180,170,220,0.15)',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                color: '#111111',
              }}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile controls */}
          <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                const sizes: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
                const idx = sizes.indexOf(fontSize as 'small' | 'medium' | 'large');
                setFontSize(sizes[(idx + 1) % 3]);
              }}
              style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(150,140,200,0.3)', background: 'rgba(255,255,255,0.8)', fontSize: '13px', color: '#111111', cursor: 'pointer', fontWeight: 500 }}
            >
              Font: {fontSize}
            </button>
            <button
              onClick={toggleHighContrast}
              style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(150,140,200,0.3)', background: highContrast ? 'rgba(75,0,130,0.1)' : 'rgba(255,255,255,0.8)', fontSize: '13px', color: '#111111', cursor: 'pointer', fontWeight: 500 }}
            >
              Contrast: {highContrast ? 'ON' : 'OFF'}
            </button>
            <button
              onClick={() => { setChatbotOpen(true); setMobileOpen(false); }}
              style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(75,0,130,0.3)', background: 'rgba(75,0,130,0.07)', fontSize: '13px', color: '#4B0082', cursor: 'pointer', fontWeight: 600 }}
            >
              DSOUZA AI
            </button>
            <button
              onClick={() => { setVoiceOpen(true); setMobileOpen(false); }}
              style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(75,0,130,0.3)', background: 'rgba(75,0,130,0.07)', fontSize: '13px', color: '#4B0082', cursor: 'pointer', fontWeight: 600 }}
            >
              Voice
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .header-nav-desktop { display: none !important; }
          .header-controls-desktop { display: none !important; }
          .header-mobile-toggle { display: flex !important; }
        }
        @media (min-width: 901px) {
          .header-mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
