import { useLocation, useNavigate } from "@tanstack/react-router";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAccessibility } from "../contexts/AccessibilityContext";
import ChatbotPanel from "./ChatbotPanel";
import LanguageSwitcher from "./LanguageSwitcher";
import VoiceAssistantDropdown from "./VoiceAssistantDropdown";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "NEO", path: "/neo" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const { fontSize, setFontSize } = useAccessibility();

  const isActive = (path: string) => location.pathname === path;

  const fontSizeOptions: Array<{
    label: string;
    value: "small" | "medium" | "large";
  }> = [
    { label: "A-", value: "small" },
    { label: "A", value: "medium" },
    { label: "A+", value: "large" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-strong border-b border-lavender-200/60 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="flex items-center gap-2.5 group"
              aria-label="DSOUZA Bank Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-800 flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base text-[#000000] tracking-tight">
                  DSOUZA
                </span>
                <span className="text-[10px] font-medium text-[#1A1A1A] tracking-widest uppercase">
                  Bank
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.path}
                  onClick={() => navigate({ to: link.path })}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-lavender-100 text-[#000000] shadow-soft"
                      : "text-[#1A1A1A] hover:bg-lavender-50 hover:text-[#000000]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="hidden md:flex items-center gap-3">
              {/* Font Size Controls */}
              <div className="flex items-center gap-1 bg-lavender-50 rounded-lg p-1 border border-lavender-200/60">
                {fontSizeOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    onClick={() => setFontSize(opt.value)}
                    className={`px-2 py-1 rounded-md text-xs font-bold transition-all duration-200 ${
                      fontSize === opt.value
                        ? "bg-white text-[#000000] shadow-soft"
                        : "text-[#1A1A1A] hover:text-[#000000] hover:bg-white/60"
                    }`}
                    aria-label={`Font size ${opt.value}`}
                    title={`Font size: ${opt.value}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* AI Chatbot Button */}
              <button
                type="button"
                onClick={() => setChatbotOpen(true)}
                className="flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-800 text-white shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-200"
                aria-label="Open DSOUZA AI Chatbot"
                title="DSOUZA AI"
              >
                <span className="text-[9px] font-bold leading-none tracking-tight">
                  DSOUZA
                </span>
                <span className="text-[8px] font-semibold leading-none">
                  AI
                </span>
              </button>

              {/* Voice Assistant */}
              <VoiceAssistantDropdown />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-[#000000] hover:bg-lavender-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-lavender-200/60 bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.path}
                  onClick={() => {
                    navigate({ to: link.path });
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-lavender-100 text-[#000000]"
                      : "text-[#1A1A1A] hover:bg-lavender-50 hover:text-[#000000]"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Mobile Controls */}
              <div className="pt-3 border-t border-lavender-200/40 flex items-center gap-3 flex-wrap">
                {/* Font Size */}
                <div className="flex items-center gap-1 bg-lavender-50 rounded-lg p-1 border border-lavender-200/60">
                  {fontSizeOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setFontSize(opt.value)}
                      className={`px-2 py-1 rounded-md text-xs font-bold transition-all duration-200 ${
                        fontSize === opt.value
                          ? "bg-white text-[#000000] shadow-soft"
                          : "text-[#1A1A1A] hover:text-[#000000]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* Language */}
                <LanguageSwitcher />

                {/* AI Chatbot */}
                <button
                  type="button"
                  onClick={() => {
                    setChatbotOpen(true);
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-br from-lavender-600 to-lavender-800 text-white text-xs font-bold shadow-soft"
                >
                  <span>DSOUZA AI</span>
                </button>

                {/* Voice */}
                <VoiceAssistantDropdown />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Chatbot Panel - rendered outside header to avoid stacking context issues */}
      <ChatbotPanel
        isOpen={chatbotOpen}
        onClose={() => setChatbotOpen(false)}
      />
    </>
  );
}
