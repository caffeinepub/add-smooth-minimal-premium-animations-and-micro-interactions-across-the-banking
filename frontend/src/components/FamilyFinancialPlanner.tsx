import React, { useState } from 'react';
import MotionReveal from './motion/MotionReveal';
import { Home, GraduationCap, Receipt, ShieldCheck, Calculator } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';

function HomeLoanTracker() {
  return (
    <div className="glass-card rounded-2xl p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-blue-50 rounded-xl">
          <Home className="w-5 h-5 text-blue-500" />
        </div>
        <h3 className="font-display font-semibold text-deep-navy">Home Loan Tracker</h3>
      </div>
      <div className="space-y-3">
        <div className="bg-ice-blue/60 rounded-xl p-3">
          <div className="text-xs text-deep-navy/60 mb-1">Outstanding Balance</div>
          <div className="text-2xl font-bold font-display text-deep-navy">₹28,40,000</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-sage-green/50 rounded-xl p-3">
            <div className="text-xs text-deep-navy/60 mb-1">Monthly EMI</div>
            <div className="text-lg font-bold text-deep-navy">₹24,500</div>
          </div>
          <div className="bg-gold/10 rounded-xl p-3">
            <div className="text-xs text-deep-navy/60 mb-1">Remaining</div>
            <div className="text-lg font-bold text-deep-navy">14 yrs</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-deep-navy/60 mb-1">
            <span>Repaid</span>
            <span>38%</span>
          </div>
          <Progress value={38} className="h-2" />
        </div>
        <div className="text-xs text-deep-navy/50 bg-amber-50 rounded-lg p-2">
          💡 Paying ₹2,000 extra/month saves ₹3.2L in interest
        </div>
      </div>
    </div>
  );
}

function EducationCalculator() {
  const [childAge, setChildAge] = useState([8]);
  const [targetAmount, setTargetAmount] = useState([1500000]);

  const yearsLeft = 18 - childAge[0];
  const monthlyNeeded = yearsLeft > 0
    ? Math.round(targetAmount[0] / (yearsLeft * 12) * 1.08)
    : 0;

  return (
    <div className="glass-card rounded-2xl p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-purple-50 rounded-xl">
          <GraduationCap className="w-5 h-5 text-purple-500" />
        </div>
        <h3 className="font-display font-semibold text-deep-navy">Education Calculator</h3>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-deep-navy/70">Child's Age</span>
            <span className="font-semibold text-deep-navy">{childAge[0]} years</span>
          </div>
          <Slider value={childAge} onValueChange={setChildAge} min={1} max={17} step={1} aria-label="Child's age" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-deep-navy/70">Target Amount</span>
            <span className="font-semibold text-deep-navy">₹{(targetAmount[0] / 100000).toFixed(1)}L</span>
          </div>
          <Slider value={targetAmount} onValueChange={setTargetAmount} min={500000} max={5000000} step={100000} aria-label="Target education amount" />
        </div>
        <div className="bg-deep-navy rounded-xl p-4 text-center">
          <div className="text-xs text-white/60 mb-1">Monthly SIP Needed</div>
          <div className="text-3xl font-bold font-display text-gold">
            ₹{monthlyNeeded.toLocaleString()}
          </div>
          <div className="text-xs text-white/50 mt-1">
            {yearsLeft} years to goal · 8% assumed returns
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxSavingDashboard() {
  const instruments = [
    { name: 'PPF', invested: 70000, limit: 150000, color: 'bg-blue-500' },
    { name: 'ELSS', invested: 45000, limit: 150000, color: 'bg-purple-500' },
    { name: 'NPS', invested: 30000, limit: 50000, color: 'bg-amber-500' },
  ];
  const totalInvested = instruments.reduce((s, i) => s + i.invested, 0);
  const totalLimit = 150000;
  const taxSaved = Math.round(totalInvested * 0.3);
  const headroom = totalLimit - totalInvested;

  return (
    <div className="glass-card rounded-2xl p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-green-50 rounded-xl">
          <Receipt className="w-5 h-5 text-green-500" />
        </div>
        <h3 className="font-display font-semibold text-deep-navy">Tax-Saving Dashboard</h3>
      </div>
      <div className="space-y-3">
        {instruments.map((inst) => (
          <div key={inst.name}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-deep-navy">{inst.name}</span>
              <span className="text-deep-navy/60">
                ₹{(inst.invested / 1000).toFixed(0)}K / ₹{(inst.limit / 1000).toFixed(0)}K
              </span>
            </div>
            <div className="h-2 bg-deep-navy/10 rounded-full overflow-hidden">
              <div
                className={`h-full ${inst.color} rounded-full transition-all duration-1000`}
                style={{ width: `${(inst.invested / inst.limit) * 100}%` }}
              />
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <div className="text-xs text-green-700 mb-1">Tax Saved</div>
            <div className="text-lg font-bold text-green-700">₹{taxSaved.toLocaleString()}</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 text-center">
            <div className="text-xs text-amber-700 mb-1">Headroom Left</div>
            <div className="text-lg font-bold text-amber-700">₹{headroom.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsuranceGapAnalyzer() {
  const coverages = [
    { label: 'Life Cover', current: 25, recommended: 100, unit: 'L' },
    { label: 'Health Cover', current: 5, recommended: 20, unit: 'L' },
    { label: 'Term Insurance', current: 0, recommended: 50, unit: 'L' },
  ];

  return (
    <div className="glass-card rounded-2xl p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-rose-50 rounded-xl">
          <ShieldCheck className="w-5 h-5 text-rose-500" />
        </div>
        <h3 className="font-display font-semibold text-deep-navy">Insurance Gap Analyzer</h3>
      </div>
      <div className="space-y-4">
        {coverages.map((cov) => {
          const pct = Math.round((cov.current / cov.recommended) * 100);
          const gap = cov.recommended - cov.current;
          return (
            <div key={cov.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-deep-navy">{cov.label}</span>
                <span className={`text-xs font-semibold ${pct >= 80 ? 'text-green-600' : pct >= 40 ? 'text-amber-600' : 'text-red-600'}`}>
                  {pct}% covered
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-3 bg-red-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      pct >= 80 ? 'bg-green-500' : pct >= 40 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
              </div>
              <div className="flex justify-between text-xs text-deep-navy/50 mt-1">
                <span>Current: ₹{cov.current}{cov.unit}</span>
                <span className="text-red-500">Gap: ₹{gap}{cov.unit}</span>
                <span>Recommended: ₹{cov.recommended}{cov.unit}</span>
              </div>
            </div>
          );
        })}
        <div className="bg-rose-50 rounded-xl p-3 text-xs text-rose-700">
          ⚠️ Your family needs ₹1.45Cr more in coverage for complete protection.
        </div>
      </div>
    </div>
  );
}

export default function FamilyFinancialPlanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-ice-blue/20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/family-planner-hero.dim_800x500.png)' }}
        aria-hidden="true"
      />
      <div className="hero-gradient-blob hero-gradient-blob-1 bottom-0 right-0 opacity-15" />

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionReveal>
          <div className="text-center mb-12">
            <div className="section-badge bg-blue-50 text-blue-700 mb-4">
              <Home className="w-3.5 h-3.5" />
              Family Banking
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-3 gold-underline inline-block">
              Because Planning Today
            </h2>
            <p className="text-xl font-display text-deep-navy/70 mt-6 mb-2">
              Secures Tomorrow.
            </p>
            <p className="text-deep-navy/60 max-w-xl mx-auto">
              Comprehensive financial planning tools designed for every family milestone.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <MotionReveal delay={100}><HomeLoanTracker /></MotionReveal>
          <MotionReveal delay={150}><EducationCalculator /></MotionReveal>
          <MotionReveal delay={200}><TaxSavingDashboard /></MotionReveal>
          <MotionReveal delay={250}><InsuranceGapAnalyzer /></MotionReveal>
        </div>
      </div>
    </section>
  );
}
