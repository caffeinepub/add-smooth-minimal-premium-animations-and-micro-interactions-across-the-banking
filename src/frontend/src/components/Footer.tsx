import { useNavigate } from "@tanstack/react-router";
import { Building2, Heart, Mail, MapPin, Phone, Shield } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

const footerLinks = {
  services: [
    { label: "Savings Account", path: "/services" },
    { label: "Home Loans", path: "/services" },
    { label: "Personal Loans", path: "/services" },
    { label: "Business Banking", path: "/services" },
    { label: "Investment Plans", path: "/services" },
    { label: "Insurance", path: "/services" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "NEO Banking", path: "/neo" },
    { label: "Careers", path: "/about" },
    { label: "Press & Media", path: "/about" },
    { label: "Investor Relations", path: "/about" },
    { label: "CSR Initiatives", path: "/about" },
  ],
  support: [
    { label: "Help Center", path: "/contact" },
    { label: "Contact Us", path: "/contact" },
    { label: "Branch Locator", path: "/contact" },
    { label: "ATM Finder", path: "/contact" },
    { label: "Grievance Redressal", path: "/contact" },
    { label: "Fraud Reporting", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "#" },
  { icon: SiX, label: "X (Twitter)", href: "#" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiYoutube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const navigate = useNavigate();
  const appId = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "dsouza-bank",
  );

  return (
    <footer className="bg-lavender-50 border-t border-lavender-200/60 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="flex items-center gap-2.5 group"
              aria-label="DSOUZA Bank Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-800 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-[#000000] tracking-tight">
                  DSOUZA
                </span>
                <span className="text-[10px] font-semibold text-[#1A1A1A] tracking-widest uppercase">
                  Bank
                </span>
              </div>
            </button>

            <p className="text-sm text-[#1A1A1A] leading-relaxed max-w-xs font-medium">
              Life-Based Banking — personalized financial solutions for every
              stage of your journey. Trusted by millions across India.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A]">
                <Phone className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                <span className="font-medium">1800-XXX-XXXX (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1A1A1A]">
                <Mail className="w-4 h-4 text-lavender-600 flex-shrink-0" />
                <span className="font-medium">support@dsouzabank.in</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#1A1A1A]">
                <MapPin className="w-4 h-4 text-lavender-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium">
                  DSOUZA Bank HQ, Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-lavender-100 border border-lavender-200/60 flex items-center justify-center text-[#1A1A1A] hover:bg-lavender-600 hover:text-white hover:border-lavender-600 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-bold text-sm text-[#000000] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate({ to: link.path })}
                    className="text-sm text-[#1A1A1A] hover:text-[#000000] font-medium transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-sm text-[#000000] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate({ to: link.path })}
                    className="text-sm text-[#1A1A1A] hover:text-[#000000] font-medium transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display font-bold text-sm text-[#000000] uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => navigate({ to: link.path })}
                    className="text-sm text-[#1A1A1A] hover:text-[#000000] font-medium transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Bar */}
      <div className="border-t border-lavender-200/60 bg-lavender-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#1A1A1A] font-medium">
              <Shield className="w-3.5 h-3.5 text-lavender-600" />
              <span>
                Regulated by RBI | DICGC Insured | ISO 27001 Certified
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#1A1A1A] font-medium">
              <button
                type="button"
                className="hover:text-[#000000] transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-lavender-300">•</span>
              <button
                type="button"
                className="hover:text-[#000000] transition-colors"
              >
                Terms of Service
              </button>
              <span className="text-lavender-300">•</span>
              <button
                type="button"
                className="hover:text-[#000000] transition-colors"
              >
                Cookie Policy
              </button>
              <span className="text-lavender-300">•</span>
              <button
                type="button"
                className="hover:text-[#000000] transition-colors"
              >
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-lavender-200/40 bg-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#1A1A1A] font-medium">
            <p>
              © {new Date().getFullYear()} DSOUZA Bank. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with{" "}
              <Heart className="w-3 h-3 text-lavender-600 fill-lavender-600" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lavender-700 hover:text-lavender-900 font-semibold transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
