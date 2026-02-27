import React, { useState } from 'react';
import MotionReveal from './motion/MotionReveal';
import { useLifeStage } from '../contexts/LifeStageContext';
import { Target, Award, BookOpen, TrendingUp, ChevronLeft, ChevronRight, Star, Lock } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';

const goals = [
  { id: 'trip', emoji: '✈️', label: 'Dream Trip', target: 80000, saved: 32000, color: 'bg-blue-500' },
  { id: 'startup', emoji: '🚀', label: 'Startup Fund', target: 200000, saved: 45000, color: 'bg-purple-500' },
  { id: 'education', emoji: '🎓', label: 'Education', target: 150000, saved: 98000, color: 'bg-amber-500' },
];

const badges = [
  { id: 'starter', emoji: '🌱', label: 'Starter Saver', desc: 'Saved ₹1,000', earned: true },
  { id: 'goal', emoji: '🎯', label: 'Goal Getter', desc: 'Set 3 goals', earned: true },
  { id: 'investor', emoji: '📈', label: 'First Investor', desc: 'Started a SIP', earned: true },
  { id: 'explorer', emoji: '🔭', label: 'Investment Explorer', desc: 'Tried 3 products', earned: false },
  { id: 'champion', emoji: '🏆', label: 'Savings Champion', desc: 'Saved ₹50,000', earned: false },
  { id: 'master', emoji: '💎', label: 'Finance Master', desc: 'Score 90+', earned: false },
];

const investmentSteps = [
  {
    step: 1,
    title: 'Start with ₹500/month',
    desc: 'Open a Recurring Deposit or start a SIP in a liquid fund. No risk, guaranteed returns.',
    icon: '💰',
    tip: 'Even ₹500/month becomes ₹6,000 in a year!',
  },
  {
    step: 2,
    title: 'Explore Mutual Funds',
    desc: 'Once comfortable, try index funds or balanced funds. Diversify across asset classes.',
    icon: '📊',
    tip: 'Index funds beat 80% of active funds over 10 years.',
  },
  {
    step: 3,
    title: 'Build Your Portfolio',
    desc: 'Mix equity, debt, and gold. Rebalance annually. Stay invested for long-term wealth.',
    icon: '🏗️',
    tip: 'Time in market beats timing the market.',
  },
];

function getCreditScore(value: number): { score: number; label: string; color: string } {
  if (value < 30) return { score: Math.round(580 + value * 2), label: 'Fair', color: 'text-red-500' };
  if (value < 60) return { score: Math.round(640 + value * 2), label: 'Good', color: 'text-amber-500' };
  if (value < 85) return { score: Math.round(720 + value * 1.5), label: 'Very Good', color: 'text-blue-500' };
  return { score: Math.round(780 + value * 0.8), label: 'Excellent', color: 'text-green-500' };
}

export default function YouthDreamBuilder() {
  const { lifeStage } = useLifeStage();
  const isYouthMode = lifeStage === 'youth';
  const [investStep, setInvestStep] = useState(0);
  const [creditSlider, setCreditSlider] = useState([50]);
  const creditInfo = getCreditScore(creditSlider[0]);

  return (
    <section
      className={`py-16 px-4 relative overflow-hidden ${
        isYouthMode ? 'bg-gradient-to-br from-purple-50 via-ice-blue/30 to-amber-50' : 'bg-white'
      }`}
    >
      {/* Hero image background */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/youth-dream-builder.dim_800x500.png)' }}
        aria-hidden="true"
      />
      <div className="hero-gradient-blob hero-gradient-blob-3 top-10 right-10 opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionReveal>
          <div className="text-center mb-12">
            <div className="section-badge bg-amber-50 text-amber-700 mb-4">
              <Star className="w-3.5 h-3.5" />
              Youth Banking
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-3 gold-underline inline-block">
              Start Early. Grow Smart.
            </h2>
            <p className="text-deep-navy/60 mt-6 max-w-xl mx-auto">
              Your financial journey starts here. Set goals, earn badges, and build wealth from day one.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Goal Tracker */}
          <MotionReveal delay={100}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Target className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-display font-semibold text-deep-navy">Goal Tracker</h3>
              </div>
              <div className="space-y-5">
                {goals.map((goal) => {
                  const pct = Math.round((goal.saved / goal.target) * 100);
                  return (
                    <div key={goal.id} aria-label={`${goal.label}: ${pct}% complete`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{goal.emoji}</span>
                          <span className="font-medium text-deep-navy text-sm">{goal.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold text-deep-navy">
                            ₹{goal.saved.toLocaleString()}
                          </span>
                          <span className="text-xs text-deep-navy/50"> / ₹{goal.target.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={pct} className="h-2.5" />
                        <span className="absolute right-0 -top-5 text-xs font-semibold text-deep-navy/60">
                          {pct}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="mt-5 w-full py-2 border-2 border-dashed border-gold/40 rounded-xl text-sm text-deep-navy/60 hover:border-gold hover:text-deep-navy transition-all">
                + Add New Goal
              </button>
            </div>
          </MotionReveal>

          {/* Gamified Badges */}
          <MotionReveal delay={150}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-display font-semibold text-deep-navy">Savings Badges</h3>
                <span className="ml-auto text-xs bg-gold/15 text-deep-navy px-2 py-0.5 rounded-full">
                  3/6 Earned
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`flex flex-col items-center p-3 rounded-xl text-center transition-all ${
                      badge.earned
                        ? 'bg-gold/10 border border-gold/30'
                        : 'bg-deep-navy/5 border border-deep-navy/10 opacity-50'
                    }`}
                    aria-label={`${badge.label}: ${badge.earned ? 'Earned' : 'Locked'}`}
                  >
                    <div className="relative mb-1">
                      <span className="text-2xl">{badge.emoji}</span>
                      {!badge.earned && (
                        <Lock className="w-3 h-3 text-deep-navy/40 absolute -bottom-1 -right-1" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-deep-navy leading-tight">{badge.label}</span>
                    <span className="text-xs text-deep-navy/50 mt-0.5">{badge.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Investment Starter Guide */}
          <MotionReveal delay={200}>
            <div className="glass-card-navy rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-display font-semibold text-white">Investment Starter Guide</h3>
              </div>
              <div className="bg-white/10 rounded-xl p-5 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-deep-navy font-bold">
                    {investmentSteps[investStep].step}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{investmentSteps[investStep].title}</div>
                    <div className="text-xs text-white/50">Step {investStep + 1} of {investmentSteps.length}</div>
                  </div>
                </div>
                <p className="text-sm text-white/75 leading-relaxed mb-3">
                  {investmentSteps[investStep].desc}
                </p>
                <div className="bg-gold/20 rounded-lg p-2.5 text-xs text-gold font-medium">
                  💡 {investmentSteps[investStep].tip}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setInvestStep(Math.max(0, investStep - 1))}
                  disabled={investStep === 0}
                  className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5">
                  {investmentSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setInvestStep(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === investStep ? 'bg-gold w-5' : 'bg-white/30'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setInvestStep(Math.min(investmentSteps.length - 1, investStep + 1))}
                  disabled={investStep === investmentSteps.length - 1}
                  className="p-2 rounded-lg bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </MotionReveal>

          {/* Credit Score Simulator */}
          <MotionReveal delay={250}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-display font-semibold text-deep-navy">Credit Score Simulator</h3>
              </div>
              <p className="text-sm text-deep-navy/60 mb-6">
                Adjust your financial habits to see how they impact your credit score.
              </p>
              <div className="text-center mb-6">
                <div className={`text-5xl font-bold font-display ${creditInfo.color} mb-1`}>
                  {creditInfo.score}
                </div>
                <div className={`text-sm font-semibold ${creditInfo.color}`}>{creditInfo.label}</div>
                <div className="text-xs text-deep-navy/50 mt-1">CIBIL Score Range: 300–900</div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-xs text-deep-navy/60 mb-2">
                  <span>Poor Habits</span>
                  <span>Excellent Habits</span>
                </div>
                <Slider
                  value={creditSlider}
                  onValueChange={setCreditSlider}
                  min={0}
                  max={100}
                  step={1}
                  className="w-full"
                  aria-label="Credit score simulator slider"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {[
                  { label: 'Pay Bills on Time', active: creditSlider[0] > 20 },
                  { label: 'Low Credit Usage', active: creditSlider[0] > 50 },
                  { label: 'Long Credit History', active: creditSlider[0] > 75 },
                ].map((habit) => (
                  <div
                    key={habit.label}
                    className={`p-2 rounded-lg transition-all ${
                      habit.active ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-deep-navy/5 text-deep-navy/40'
                    }`}
                  >
                    {habit.active ? '✓' : '○'} {habit.label}
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
