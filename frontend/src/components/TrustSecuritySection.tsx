import React from 'react';
import { Shield, Lock, CheckCircle, Award, Eye, Zap } from 'lucide-react';
import MotionReveal from './motion/MotionReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface TrustItem {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
}

const trustItems: TrustItem[] = [
  {
    icon: Shield,
    title: 'RBI Regulated',
    description: 'Fully compliant with Reserve Bank of India guidelines and regulations for your complete peace of mind.',
    badge: 'Certified',
  },
  {
    icon: Lock,
    title: '256-bit Encryption',
    description: 'Bank-grade SSL encryption protects every transaction and keeps your financial data completely secure.',
    badge: 'Secured',
  },
  {
    icon: CheckCircle,
    title: 'DICGC Insured',
    description: 'Your deposits are insured up to ₹5 lakhs under the Deposit Insurance and Credit Guarantee Corporation.',
    badge: 'Insured',
  },
  {
    icon: Award,
    title: 'ISO 27001 Certified',
    description: 'International standard for information security management, ensuring the highest level of data protection.',
    badge: 'ISO',
  },
  {
    icon: Eye,
    title: '24/7 Fraud Monitoring',
    description: 'AI-powered real-time monitoring detects and prevents fraudulent activities around the clock.',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Get real-time SMS and email notifications for every transaction to stay in complete control.',
  },
];

const TrustSecuritySection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionReveal className="text-center mb-14">
          <p className="overline mb-3">Security First</p>
          <h2
            className="font-bold mb-4"
            style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
          >
            Your Trust is Our{' '}
            <span style={{ color: 'var(--secondary)' }}>Foundation</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--muted-foreground)' }}
          >
            We employ the highest standards of security and compliance to protect your financial future.
          </p>
        </MotionReveal>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal key={item.title} delay={index * 80}>
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
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: 'oklch(88% 0.1 185 / 0.15)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: 'oklch(55% 0.12 185)' }} />
                    </div>
                    {item.badge && (
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: 'oklch(76% 0.12 270 / 0.12)',
                          color: 'var(--secondary)',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                    {item.description}
                  </p>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}
        <MotionReveal delay={200} className="mt-12">
          <div
            className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              background: 'linear-gradient(135deg, oklch(76% 0.12 270 / 0.08) 0%, oklch(88% 0.1 185 / 0.06) 100%)',
              border: '1px solid oklch(76% 0.12 270 / 0.2)',
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'oklch(92% 0.08 85 / 0.3)' }}
              >
                <Award className="w-5 h-5" style={{ color: 'oklch(65% 0.1 85)' }} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>
                  Award-Winning Security
                </p>
                <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
                  Recognized by NASSCOM & IDRBT for excellence in digital banking security
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {['99.9% Uptime', '0 Breaches', '10M+ Secured'].map((stat) => (
                <div key={stat} className="text-center">
                  <p className="text-sm font-bold" style={{ color: 'var(--secondary)' }}>{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default TrustSecuritySection;
