import React, { useRef, useState, useEffect } from 'react';
import { Users, MapPin, Clock, TrendingUp } from 'lucide-react';
import { useInViewOnce } from '../hooks/useInViewOnce';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import MotionReveal from './motion/MotionReveal';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  featured?: boolean;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: 5,
    suffix: 'M+',
    label: 'Happy Customers',
    description: 'Trusted by millions across India',
    featured: false,
  },
  {
    icon: MapPin,
    value: 2500,
    suffix: '+',
    label: 'Branch Network',
    description: 'Across 28 states & UTs',
    featured: true,
  },
  {
    icon: Clock,
    value: 75,
    suffix: ' Years',
    label: 'Years of Trust',
    description: 'Serving India since 1950',
    featured: false,
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    description: 'Rated excellent by our customers',
    featured: false,
  },
];

function useCountUp(target: number, duration: number, active: boolean, reduced: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduced) { setCount(target); return; }

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration, reduced]);

  return count;
}

const StatCard: React.FC<{ stat: StatItem; active: boolean }> = ({ stat, active }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const count = useCountUp(stat.value, 1800, active, prefersReducedMotion);
  const Icon = stat.icon;

  return (
    <div
      className="rounded-2xl p-6 text-center"
      style={{
        backgroundColor: stat.featured ? 'oklch(76% 0.12 270 / 0.08)' : 'var(--card)',
        border: stat.featured ? '2px solid oklch(76% 0.12 270 / 0.25)' : '1px solid var(--border)',
        boxShadow: stat.featured ? 'var(--shadow-lavender)' : 'var(--shadow-soft)',
        transition: prefersReducedMotion ? 'none' : 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        if (!prefersReducedMotion) {
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lavender-lg)';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = stat.featured ? 'var(--shadow-lavender)' : 'var(--shadow-soft)';
      }}
    >
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
        style={{
          backgroundColor: stat.featured ? 'oklch(92% 0.08 85 / 0.3)' : 'oklch(88% 0.1 185 / 0.15)',
        }}
      >
        <Icon
          className="w-6 h-6"
          style={{ color: stat.featured ? 'oklch(65% 0.1 85)' : 'oklch(55% 0.12 185)' }}
        />
      </div>
      <div
        className="text-3xl font-bold mb-1"
        style={{
          color: stat.featured ? 'var(--secondary)' : 'var(--foreground)',
          letterSpacing: '-0.04em',
        }}
      >
        {count}{stat.suffix}
      </div>
      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
        {stat.label}
      </p>
      <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
        {stat.description}
      </p>
    </div>
  );
};

const StatsRow: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, isInView } = useInViewOnce({ threshold: 0.3 });

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-10">
          <p className="overline mb-2">Our Impact</p>
          <h2
            className="font-bold"
            style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
          >
            Numbers That{' '}
            <span style={{ color: 'var(--secondary)' }}>Speak</span>
          </h2>
        </MotionReveal>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <MotionReveal key={stat.label} delay={index * 80}>
              <StatCard stat={stat} active={isInView} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;
