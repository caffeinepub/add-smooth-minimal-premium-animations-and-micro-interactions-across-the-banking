import React from 'react';
import MotionReveal from './motion/MotionReveal';
import { useLifeStage } from '../contexts/LifeStageContext';
import { Wifi, Mic, MessageSquare, BookOpen, DollarSign, Sprout, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: 'Low Data Mode',
    desc: 'A lite version of our app that works on 2G networks, using minimal data for all banking needs.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    cta: 'Enable Lite Mode',
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'Voice Banking',
    desc: 'Bank in your language — Hindi, Marathi, Tamil, Telugu, Bengali, and more. Just speak, we listen.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    cta: 'Try Voice Banking',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'SMS Banking',
    desc: 'Check balance, transfer money, and pay bills via simple SMS — no internet required.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    cta: 'SMS Commands',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Govt. Scheme Tracker',
    desc: 'Track PM-KISAN, PMFBY, Jan Dhan, and 50+ government schemes you\'re eligible for.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    cta: 'Check Eligibility',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Micro-Loans',
    desc: 'Quick loans from ₹5,000 to ₹2L for small businesses, with minimal documentation and fast approval.',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    cta: 'Apply Now',
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: 'Crop & Livestock Insurance',
    desc: 'Protect your crops and livestock from natural disasters, disease, and market fluctuations.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    cta: 'Get Covered',
  },
];

export default function RuralEmpowerment() {
  const { lifeStage } = useLifeStage();
  const isRuralMode = lifeStage === 'rural';

  return (
    <section
      className={`py-16 px-4 relative overflow-hidden ${
        isRuralMode ? 'bg-sage-green/40' : 'bg-gradient-to-br from-sage-green/30 to-ice-blue/20'
      }`}
    >
      <div className="hero-gradient-blob hero-gradient-blob-2 top-0 right-0 opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionReveal>
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <img
                src="/assets/generated/rural-badge.dim_256x256.png"
                alt="Inclusive Rural Banking badge"
                className="w-12 h-12 object-contain"
              />
              <div className="section-badge bg-sage-green text-deep-navy border border-green-200">
                🌾 Inclusive Rural Banking
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-4 gold-underline inline-block">
              Empowering Every Village
            </h2>
            <p className="text-xl font-display text-deep-navy/70 mt-6 mb-2">
              Through Digital Finance.
            </p>
            <p className="text-deep-navy/60 max-w-xl mx-auto">
              We believe banking should reach every corner of India — from cities to the smallest villages.
            </p>
          </div>
        </MotionReveal>

        <div className={`grid gap-4 ${isRuralMode ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {features.map((feature, i) => (
            <MotionReveal key={feature.title} delay={i * 80}>
              <div
                className="glass-card-sage rounded-2xl p-5 group"
                role="article"
                aria-label={feature.title}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${feature.bgColor} ${feature.color} flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-deep-navy mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-deep-navy/65 leading-relaxed mb-3">{feature.desc}</p>
                    <button
                      className="text-sm font-semibold text-deep-navy flex items-center gap-1 hover:gap-2 transition-all group-hover:text-gold"
                      aria-label={`${feature.cta} for ${feature.title}`}
                    >
                      {feature.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <MotionReveal delay={300}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-deep-navy text-white px-6 py-3 rounded-2xl">
              <span className="text-2xl">🌱</span>
              <div className="text-left">
                <div className="text-sm font-semibold">Rural Banking Helpline</div>
                <div className="text-xs text-white/70">1800-XXX-XXXX (Toll Free) | Available in 10 languages</div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
