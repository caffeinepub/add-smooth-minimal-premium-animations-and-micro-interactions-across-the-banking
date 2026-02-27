import React from 'react';
import MotionReveal from './motion/MotionReveal';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandStatementBanner() {
  const scrollToLifeStage = () => {
    const el = document.getElementById('life-stage-toggle');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-deep-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <MotionReveal>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Our Promise
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
            DSOUZA BANK is more than{' '}
            <span className="text-gold">digital banking.</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mb-8 rounded-full" />

          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mx-auto mb-10">
            It is a life-stage financial partner designed for{' '}
            <span className="text-gold font-semibold">youth</span>,{' '}
            <span className="text-gold font-semibold">families</span>,{' '}
            <span className="text-gold font-semibold">seniors</span>, and{' '}
            <span className="text-gold font-semibold">rural communities</span>{' '}
            — combining innovation, security, and inclusion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToLifeStage}
              className="btn-gold px-8 py-3.5 rounded-full text-base font-bold flex items-center gap-2 group"
              aria-label="Explore your life stage banking options"
            >
              Explore Your Life Stage
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3.5 rounded-full text-base font-semibold text-white border-2 border-white/20 hover:border-gold/50 hover:text-gold transition-all">
              Learn More About Us
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '4', label: 'Life Stages Served', suffix: '' },
              { value: '10', label: 'Regional Languages', suffix: '+' },
              { value: '50', label: 'Govt. Schemes Tracked', suffix: '+' },
              { value: '99.9', label: 'Uptime Guarantee', suffix: '%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold font-display text-gold">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
