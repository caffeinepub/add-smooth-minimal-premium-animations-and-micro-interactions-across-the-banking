import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Heart, Users, Target, Sparkles, Award, TrendingUp, ArrowRight } from 'lucide-react';
import MotionReveal from '../components/motion/MotionReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const values = [
  {
    icon: Heart,
    title: 'Human-Centered',
    description: 'We put people first, understanding that banking is about life, not just transactions.',
    color: 'oklch(65% 0.1 85)',
    bg: 'oklch(92% 0.08 85 / 0.2)',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Every customer receives tailored solutions based on their unique life stage and goals.',
    color: 'oklch(55% 0.12 185)',
    bg: 'oklch(88% 0.1 185 / 0.15)',
  },
  {
    icon: Target,
    title: 'Long-Term Partnership',
    description: 'We build lasting relationships, supporting you through every stage of your financial journey.',
    color: 'oklch(46% 0.09 255)',
    bg: 'oklch(76% 0.12 270 / 0.12)',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We embrace technology and innovation to make banking more accessible and intuitive.',
    color: 'oklch(65% 0.1 85)',
    bg: 'oklch(92% 0.08 85 / 0.2)',
  },
];

const milestones = [
  { year: '1985', event: 'DSOUZA BANK founded with a vision to revolutionize banking', featured: false },
  { year: '1995', event: 'Expanded to 50 branches nationwide', featured: false },
  { year: '2005', event: 'Launched innovative online banking platform', featured: false },
  { year: '2015', event: 'Introduced mobile banking app with cutting-edge features', featured: false },
  { year: '2020', event: 'Established NEO subsidiary for digital financial solutions', featured: true },
  { year: '2024', event: 'Pioneered Life-Based Banking approach', featured: true },
  { year: '2025', event: 'Serving over 5 million customers with personalized solutions', featured: true },
];

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <main className="pt-16 lg:pt-20" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Section */}
      <MotionReveal>
        <section
          className="py-20 lg:py-28 relative overflow-hidden"
          style={{ backgroundColor: 'var(--background)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 0%, oklch(76% 0.12 270 / 0.08) 0%, transparent 60%)',
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="overline mb-4">Our Story</p>
              <h1
                className="font-bold mb-6"
                style={{ color: 'var(--foreground)', letterSpacing: '-0.04em' }}
              >
                Banking with a{' '}
                <span style={{ color: 'var(--secondary)' }}>Human Heart</span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                For over four decades, DSouza Bank has been pioneering Life-Based Banking — financial solutions that truly understand and adapt to your life journey.
              </p>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Our Story */}
      <MotionReveal delay={100}>
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'oklch(97% 0.015 270)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="overline mb-3">Since 1985</p>
                <h2
                  className="font-bold mb-6"
                  style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
                >
                  Our Story
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  <p>
                    Founded in 1985, DSOUZA BANK began with a vision to create a more human-centered approach to banking. We recognized that traditional banking treated everyone the same, regardless of where they were in life.
                  </p>
                  <p>
                    In 2024, we revolutionized the industry by introducing Life-Based Banking — a comprehensive approach that tailors financial solutions to your current life stage. Whether you're a student, starting your career, raising a family, growing a business, or enjoying retirement, we provide personalized banking that evolves with you.
                  </p>
                  <p>
                    Today, DSOUZA BANK serves over 5 million customers nationwide, combining four decades of banking expertise with innovative technology through our NEO digital subsidiary.
                  </p>
                </div>
                <button
                  onClick={() => navigate({ to: '/contact' })}
                  className="mt-8 flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    boxShadow: '0 4px 20px oklch(76% 0.12 270 / 0.3)',
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
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <img
                  src="/assets/generated/dsouza-bank-building.dim_800x600.jpg"
                  alt="DSOUZA BANK Building"
                  className="w-full rounded-3xl object-cover"
                  style={{
                    boxShadow: 'var(--shadow-lavender-lg)',
                    transition: prefersReducedMotion ? 'none' : 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!prefersReducedMotion) {
                      (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />
                {/* Floating stat */}
                <div
                  className="absolute -bottom-5 -left-5 px-5 py-4 rounded-2xl"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow-lavender)',
                  }}
                >
                  <p className="text-2xl font-bold" style={{ color: 'var(--secondary)', letterSpacing: '-0.04em' }}>40+</p>
                  <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Mission & Vision */}
      <MotionReveal delay={100}>
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionReveal className="text-center mb-12">
              <p className="overline mb-3">Our Purpose</p>
              <h2
                className="font-bold"
                style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
              >
                Mission &{' '}
                <span style={{ color: 'var(--secondary)' }}>Vision</span>
              </h2>
            </MotionReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  text: 'To empower individuals and families with personalized financial solutions that support them through every stage of life, combining human expertise with innovative technology to create meaningful, lasting relationships.',
                  color: 'oklch(46% 0.09 255)',
                  bg: 'oklch(76% 0.12 270 / 0.12)',
                  accent: 'oklch(76% 0.12 270 / 0.2)',
                },
                {
                  icon: TrendingUp,
                  title: 'Our Vision',
                  text: 'To be the world\'s leading Life-Based Banking institution, recognized for transforming how people experience financial services by making banking personal, intuitive, and perfectly aligned with life\'s journey.',
                  color: 'oklch(65% 0.1 85)',
                  bg: 'oklch(92% 0.08 85 / 0.2)',
                  accent: 'oklch(92% 0.08 85 / 0.3)',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl p-8"
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
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: item.bg }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Core Values */}
      <MotionReveal delay={100}>
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'oklch(97% 0.015 270)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionReveal className="text-center mb-12">
              <p className="overline mb-3">What We Stand For</p>
              <h2
                className="font-bold mb-4"
                style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
              >
                Our Core{' '}
                <span style={{ color: 'var(--secondary)' }}>Values</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                The principles that guide our Life-Based Banking approach and every interaction with our customers.
              </p>
            </MotionReveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <MotionReveal key={value.title} delay={index * 80}>
                    <div
                      className="rounded-2xl p-6 text-center h-full"
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
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: value.bg }}
                      >
                        <Icon className="w-7 h-7" style={{ color: value.color }} />
                      </div>
                      <h3
                        className="text-base font-bold mb-3"
                        style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}
                      >
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {value.description}
                      </p>
                    </div>
                  </MotionReveal>
                );
              })}
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Timeline */}
      <MotionReveal delay={100}>
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'var(--background)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionReveal className="text-center mb-12">
              <p className="overline mb-3">Our Journey</p>
              <h2
                className="font-bold mb-4"
                style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
              >
                Four Decades of{' '}
                <span style={{ color: 'var(--secondary)' }}>Excellence</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                A timeline of innovation, growth, and commitment to our customers.
              </p>
            </MotionReveal>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <MotionReveal key={milestone.year} delay={index * 60}>
                    <div className="flex gap-5 items-start">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-xs font-bold"
                          style={{
                            backgroundColor: milestone.featured ? 'var(--highlight)' : 'oklch(76% 0.12 270 / 0.12)',
                            color: milestone.featured ? 'var(--highlight-foreground)' : 'var(--secondary)',
                            boxShadow: milestone.featured ? '0 4px 16px oklch(92% 0.08 85 / 0.4)' : 'none',
                          }}
                        >
                          {milestone.year}
                        </div>
                        {index < milestones.length - 1 && (
                          <div
                            className="w-0.5 h-6 mt-2"
                            style={{
                              background: 'linear-gradient(to bottom, oklch(76% 0.12 270 / 0.3), oklch(76% 0.12 270 / 0.1))',
                            }}
                          />
                        )}
                      </div>
                      <div
                        className="flex-1 rounded-2xl p-4 mb-2"
                        style={{
                          backgroundColor: milestone.featured ? 'oklch(76% 0.12 270 / 0.06)' : 'var(--card)',
                          border: milestone.featured ? '1px solid oklch(76% 0.12 270 / 0.2)' : '1px solid var(--border)',
                          boxShadow: 'var(--shadow-soft)',
                        }}
                      >
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)' }}>
                          {milestone.event}
                        </p>
                      </div>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>

      {/* Awards */}
      <MotionReveal delay={100}>
        <section className="py-16 lg:py-24" style={{ backgroundColor: 'oklch(97% 0.015 270)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'oklch(92% 0.08 85 / 0.3)' }}
              >
                <Award className="w-8 h-8" style={{ color: 'oklch(65% 0.1 85)' }} />
              </div>
              <p className="overline mb-3">Recognition</p>
              <h2
                className="font-bold mb-4"
                style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
              >
                Recognized{' '}
                <span style={{ color: 'var(--secondary)' }}>Excellence</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
                DSOUZA BANK has been recognized as a leader in innovative banking, customer service, and financial inclusion. Our Life-Based Banking approach has set new industry standards and earned the trust of millions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Best Bank 2024', 'Innovation Award', 'Customer Choice', 'Digital Excellence'].map((award) => (
                  <span
                    key={award}
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      backgroundColor: 'oklch(92% 0.08 85 / 0.2)',
                      color: 'oklch(55% 0.1 85)',
                      border: '1px solid oklch(92% 0.08 85 / 0.4)',
                    }}
                  >
                    🏆 {award}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </MotionReveal>
    </main>
  );
};

export default AboutPage;
