import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import {
  ArrowRight, Sparkles, Shield, TrendingUp, Users, Smartphone,
  Star, Play, CheckCircle, Zap, Globe, Heart
} from 'lucide-react';
import MotionReveal from '../components/motion/MotionReveal';
import StatsRow from '../components/StatsRow';
import LoanCalculatorSection from '../components/LoanCalculatorSection';
import ExperienceSelector from '../components/ExperienceSelector';
import TrustSecuritySection from '../components/TrustSecuritySection';
import FinancialWellbeingCard from '../components/FinancialWellbeingCard';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Small Business Owner',
    text: 'DSouza Bank transformed how I manage my business finances. The NEO banking app is incredibly intuitive.',
    rating: 5,
    avatar: '/assets/generated/testimonial-woman.dim_150x150.png',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    text: 'The life-based banking approach is brilliant. They understood my needs at every stage of my career.',
    rating: 5,
    avatar: '/assets/generated/testimonial-man.dim_150x150.png',
  },
];

const features = [
  {
    icon: Zap,
    title: 'Instant Transfers',
    description: 'Send money anywhere in seconds with zero fees on IMPS and NEFT.',
    color: 'oklch(65% 0.1 85)',
    bg: 'oklch(92% 0.08 85 / 0.2)',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: '256-bit encryption and AI fraud detection keep your money safe 24/7.',
    color: 'oklch(55% 0.12 185)',
    bg: 'oklch(88% 0.1 185 / 0.15)',
  },
  {
    icon: TrendingUp,
    title: 'Smart Investments',
    description: 'AI-powered portfolio recommendations tailored to your risk profile.',
    color: 'oklch(46% 0.09 255)',
    bg: 'oklch(76% 0.12 270 / 0.12)',
  },
  {
    icon: Globe,
    title: 'Global Banking',
    description: 'Multi-currency accounts and international transfers at best rates.',
    color: 'oklch(55% 0.12 185)',
    bg: 'oklch(88% 0.1 185 / 0.15)',
  },
  {
    icon: Heart,
    title: 'Life-Based Banking',
    description: 'Products that evolve with your life stages — from student to retiree.',
    color: 'oklch(65% 0.1 85)',
    bg: 'oklch(92% 0.08 85 / 0.2)',
  },
  {
    icon: Smartphone,
    title: 'NEO Mobile App',
    description: 'Award-winning app with 4.9★ rating and 10M+ downloads.',
    color: 'oklch(46% 0.09 255)',
    bg: 'oklch(76% 0.12 270 / 0.12)',
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ backgroundColor: 'var(--background)' }}
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 65% 40%, oklch(76% 0.12 270 / 0.1) 0%, oklch(88% 0.1 185 / 0.06) 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-20 right-0 w-1/2 h-full pointer-events-none opacity-60"
          style={{
            backgroundImage: 'url(/assets/generated/hero-blob.dim_1200x600.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.3) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <MotionReveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
                  style={{
                    backgroundColor: 'oklch(76% 0.12 270 / 0.12)',
                    color: 'var(--secondary)',
                    border: '1px solid oklch(76% 0.12 270 / 0.25)',
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  India's Most Trusted Life-Based Bank
                </div>
              </MotionReveal>

              <MotionReveal delay={80}>
                <h1
                  className="font-bold mb-6 leading-tight"
                  style={{ color: 'var(--foreground)', letterSpacing: '-0.04em' }}
                >
                  Banking That{' '}
                  <span style={{ color: 'var(--secondary)' }}>Grows</span>{' '}
                  With{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Your Life
                  </span>
                </h1>
              </MotionReveal>

              <MotionReveal delay={160}>
                <p
                  className="text-lg leading-relaxed mb-8 max-w-lg"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  From your first savings account to retirement planning — DSouza Bank offers personalized financial solutions for every stage of your journey.
                </p>
              </MotionReveal>

              <MotionReveal delay={240}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <button
                    onClick={() => navigate({ to: '/neo' })}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      boxShadow: '0 4px 20px oklch(76% 0.12 270 / 0.35)',
                      transition: prefersReducedMotion ? 'none' : 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!prefersReducedMotion) {
                        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 28px oklch(76% 0.12 270 / 0.5)';
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'oklch(70% 0.14 270)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px oklch(76% 0.12 270 / 0.35)';
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--primary)';
                    }}
                  >
                    Open Free Account
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate({ to: '/services' })}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2"
                    style={{
                      borderColor: 'var(--secondary)',
                      color: 'var(--secondary)',
                      transition: prefersReducedMotion ? 'none' : 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!prefersReducedMotion) {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--secondary)';
                        (e.currentTarget as HTMLButtonElement).style.color = 'var(--secondary-foreground)';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLButtonElement).style.color = 'var(--secondary)';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                    }}
                  >
                    <Play className="w-4 h-4" />
                    Explore Services
                  </button>
                </div>
              </MotionReveal>

              {/* Trust indicators */}
              <MotionReveal delay={320}>
                <div className="flex flex-wrap items-center gap-5">
                  {[
                    { icon: Shield, text: 'RBI Regulated' },
                    { icon: CheckCircle, text: 'DICGC Insured' },
                    { icon: Star, text: '4.9★ Rated' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-1.5">
                      <Icon className="w-4 h-4" style={{ color: 'oklch(55% 0.12 185)' }} />
                      <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </MotionReveal>
            </div>

            {/* Right Content - Financial Wellbeing Card */}
            <MotionReveal delay={200} direction="left">
              <div className="relative">
                {/* Decorative blob */}
                <div
                  className="absolute -inset-8 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, oklch(76% 0.12 270 / 0.1) 0%, transparent 70%)',
                  }}
                />
                <FinancialWellbeingCard />

                {/* Floating badge */}
                <div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl text-xs font-bold shadow-lg"
                  style={{
                    backgroundColor: 'var(--highlight)',
                    color: 'var(--highlight-foreground)',
                    boxShadow: '0 4px 16px oklch(92% 0.08 85 / 0.4)',
                    animation: prefersReducedMotion ? 'none' : 'float 4s ease-in-out infinite',
                  }}
                >
                  ✨ AI-Powered Insights
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <StatsRow />

      {/* Features Section */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="text-center mb-14">
            <p className="overline mb-3">Why Choose Us</p>
            <h2
              className="font-bold mb-4"
              style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
            >
              Everything You Need,{' '}
              <span style={{ color: 'var(--secondary)' }}>All in One Place</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Modern banking features designed to simplify your financial life.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <MotionReveal key={feature.title} delay={index * 80}>
                  <div
                    className="rounded-2xl p-6 h-full"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow-soft)',
                      transition: prefersReducedMotion ? 'none' : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!prefersReducedMotion) {
                        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                        (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lavender)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-soft)';
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: feature.bg }}
                    >
                      <Icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <h3
                      className="text-base font-bold mb-2"
                      style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {feature.description}
                    </p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Selector */}
      <ExperienceSelector />

      {/* Loan Calculator */}
      <LoanCalculatorSection />

      {/* Trust & Security */}
      <TrustSecuritySection />

      {/* Testimonials */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'oklch(97% 0.015 270)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal className="text-center mb-14">
            <p className="overline mb-3">Customer Stories</p>
            <h2
              className="font-bold mb-4"
              style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
            >
              Loved by{' '}
              <span style={{ color: 'var(--secondary)' }}>Millions</span>
            </h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, index) => (
              <MotionReveal key={t.name} delay={index * 100}>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-soft)',
                    transition: prefersReducedMotion ? 'none' : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!prefersReducedMotion) {
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lavender)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-soft)';
                  }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'oklch(65% 0.1 85)' }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--foreground)' }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                      style={{ border: '2px solid var(--border)' }}
                    />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{t.name}</p>
                      <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--background)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <div
              className="rounded-3xl p-12 lg:p-16 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, oklch(76% 0.12 270 / 0.12) 0%, oklch(88% 0.1 185 / 0.08) 100%)',
                border: '1px solid oklch(76% 0.12 270 / 0.2)',
                boxShadow: 'var(--shadow-lavender)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'url(/assets/generated/accent-pattern.dim_800x200.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.04,
                }}
              />
              <div className="relative z-10">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
                  style={{
                    backgroundColor: 'oklch(92% 0.08 85 / 0.3)',
                    color: 'oklch(55% 0.1 85)',
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Start Your Journey Today
                </div>
                <h2
                  className="font-bold mb-4"
                  style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
                >
                  Ready to Experience{' '}
                  <span style={{ color: 'var(--secondary)' }}>Better Banking?</span>
                </h2>
                <p className="text-lg leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: 'var(--muted-foreground)' }}>
                  Join 5 million+ customers who trust DSouza Bank for their financial journey.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => navigate({ to: '/neo' })}
                    className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                      boxShadow: '0 4px 20px oklch(76% 0.12 270 / 0.35)',
                      transition: prefersReducedMotion ? 'none' : 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!prefersReducedMotion) {
                        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'oklch(70% 0.14 270)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--primary)';
                    }}
                  >
                    Open Account Free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate({ to: '/contact' })}
                    className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2"
                    style={{
                      borderColor: 'var(--secondary)',
                      color: 'var(--secondary)',
                      transition: prefersReducedMotion ? 'none' : 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!prefersReducedMotion) {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--secondary)';
                        (e.currentTarget as HTMLButtonElement).style.color = 'var(--secondary-foreground)';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLButtonElement).style.color = 'var(--secondary)';
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                    }}
                  >
                    Talk to an Expert
                  </button>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
