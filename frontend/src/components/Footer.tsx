import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { MapPin, Phone, Mail, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const hostname = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'dsouza-bank';

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'NEO Banking', path: '/neo' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = [
    'Savings Accounts',
    'Home Loans',
    'Personal Loans',
    'Business Banking',
    'Investment Plans',
    'Insurance',
  ];

  const socialLinks = [
    { icon: SiFacebook, label: 'Facebook', href: '#' },
    { icon: SiX, label: 'X (Twitter)', href: '#' },
    { icon: SiInstagram, label: 'Instagram', href: '#' },
    { icon: SiLinkedin, label: 'LinkedIn', href: '#' },
    { icon: SiYoutube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
      }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                  boxShadow: '0 2px 12px oklch(76% 0.12 270 / 0.3)',
                }}
              >
                <Sparkles className="w-5 h-5" style={{ color: 'oklch(15% 0.005 270)' }} />
              </div>
              <div>
                <div className="font-bold text-base tracking-tight" style={{ color: 'oklch(99% 0.004 270)' }}>
                  DSouza Bank
                </div>
                <div className="text-xs" style={{ color: 'oklch(88% 0.04 270)' }}>
                  Life-Based Banking
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'oklch(88% 0.04 270)' }}>
              Banking that grows with you — from your first job to retirement. Trusted by millions across India.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: 'oklch(99% 0.004 270 / 0.1)',
                    color: 'oklch(88% 0.04 270)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(15% 0.005 270)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'oklch(99% 0.004 270 / 0.1)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(88% 0.04 270)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate({ to: link.path })}
                    className="text-sm flex items-center gap-2 group transition-all duration-200"
                    style={{ color: 'oklch(88% 0.04 270)' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'oklch(88% 0.04 270)';
                    }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span
                    className="text-sm transition-colors duration-200 cursor-default"
                    style={{ color: 'oklch(88% 0.04 270)' }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: 'oklch(99% 0.004 270 / 0.1)' }}
                >
                  <MapPin className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: 'oklch(88% 0.04 270)' }}>
                  123 Banking Street, Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'oklch(99% 0.004 270 / 0.1)' }}
                >
                  <Phone className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                </div>
                <a
                  href="tel:+911800123456"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'oklch(88% 0.04 270)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(88% 0.04 270)'; }}
                >
                  1800-123-4567 (Toll Free)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'oklch(99% 0.004 270 / 0.1)' }}
                >
                  <Mail className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                </div>
                <a
                  href="mailto:support@dsouzabank.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'oklch(88% 0.04 270)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'oklch(88% 0.04 270)'; }}
                >
                  support@dsouzabank.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: 'oklch(99% 0.004 270 / 0.12)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: 'oklch(80% 0.04 270)' }}>
              © {year} DSouza Bank. All rights reserved. | RBI Regulated | DICGC Insured
            </p>
            <p className="text-xs flex items-center gap-1.5" style={{ color: 'oklch(80% 0.04 270)' }}>
              Built with{' '}
              <Heart
                className="w-3 h-3 fill-current"
                style={{ color: 'var(--accent)' }}
              />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors duration-200"
                style={{ color: 'var(--accent)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--highlight)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
