import React, { useState, useCallback } from 'react';
import { Calculator, IndianRupee, Percent, Calendar, ArrowRight } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import MotionReveal from './motion/MotionReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { LoadingDots } from './motion/LoadingDots';

const LoanCalculatorSection: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [isCalculating, setIsCalculating] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const calculateEMI = useCallback(() => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const months = loanTerm * 12;
    if (monthlyRate === 0) return principal / months;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  }, [loanAmount, interestRate, loanTerm]);

  const emi = calculateEMI();
  const totalPayment = emi * loanTerm * 12;
  const totalInterest = totalPayment - loanAmount;

  const handleSliderChange = (setter: (v: number) => void) => (value: number[]) => {
    setIsCalculating(true);
    setter(value[0]);
    setTimeout(() => setIsCalculating(false), 300);
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'oklch(97% 0.015 270)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center mb-14">
          <p className="overline mb-3">Plan Ahead</p>
          <h2
            className="font-bold mb-4"
            style={{ color: 'var(--foreground)', letterSpacing: '-0.03em' }}
          >
            Loan{' '}
            <span style={{ color: 'var(--secondary)' }}>Calculator</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Estimate your monthly EMI and plan your finances with confidence.
          </p>
        </MotionReveal>

        <MotionReveal delay={100}>
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-lavender)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Controls */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'oklch(88% 0.1 185 / 0.15)' }}
                  >
                    <Calculator className="w-5 h-5" style={{ color: 'oklch(55% 0.12 185)' }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
                    Adjust Parameters
                  </h3>
                </div>

                <div className="space-y-8">
                  {/* Loan Amount */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                        <IndianRupee className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                        Loan Amount
                      </label>
                      <span
                        className="text-sm font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'oklch(76% 0.12 270 / 0.12)',
                          color: 'var(--secondary)',
                        }}
                      >
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <Slider
                      min={50000}
                      max={5000000}
                      step={50000}
                      value={[loanAmount]}
                      onValueChange={handleSliderChange(setLoanAmount)}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>₹50K</span>
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>₹50L</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                        <Percent className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                        Interest Rate
                      </label>
                      <span
                        className="text-sm font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'oklch(76% 0.12 270 / 0.12)',
                          color: 'var(--secondary)',
                        }}
                      >
                        {interestRate}% p.a.
                      </span>
                    </div>
                    <Slider
                      min={5}
                      max={20}
                      step={0.5}
                      value={[interestRate]}
                      onValueChange={handleSliderChange(setInterestRate)}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>5%</span>
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>20%</span>
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                        <Calendar className="w-4 h-4" style={{ color: 'var(--secondary)' }} />
                        Loan Term
                      </label>
                      <span
                        className="text-sm font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: 'oklch(76% 0.12 270 / 0.12)',
                          color: 'var(--secondary)',
                        }}
                      >
                        {loanTerm} Years
                      </span>
                    </div>
                    <Slider
                      min={1}
                      max={30}
                      step={1}
                      value={[loanTerm]}
                      onValueChange={handleSliderChange(setLoanTerm)}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>1 Year</span>
                      <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>30 Years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div
                className="p-8 lg:p-10 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(135deg, oklch(76% 0.12 270 / 0.08) 0%, oklch(88% 0.1 185 / 0.06) 100%)',
                  borderLeft: '1px solid var(--border)',
                }}
              >
                <div>
                  <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>
                    Your EMI Estimate
                  </h3>

                  {/* EMI Display */}
                  <div
                    className="rounded-2xl p-6 mb-6 text-center"
                    style={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow-soft)',
                    }}
                  >
                    {isCalculating ? (
                      <div className="flex justify-center py-2">
                        <LoadingDots />
                      </div>
                    ) : (
                      <>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--secondary)' }}>
                          Monthly EMI
                        </p>
                        <p
                          className="text-4xl font-bold"
                          style={{ color: 'var(--secondary)', letterSpacing: '-0.04em' }}
                        >
                          {formatCurrency(emi)}
                        </p>
                        <p className="text-xs mt-1" style={{ color: 'var(--muted-foreground)' }}>per month</p>
                      </>
                    )}
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3">
                    {[
                      { label: 'Principal Amount', value: formatCurrency(loanAmount), color: 'var(--secondary)' },
                      { label: 'Total Interest', value: formatCurrency(totalInterest), color: 'oklch(55% 0.12 185)' },
                      { label: 'Total Payment', value: formatCurrency(totalPayment), color: 'var(--foreground)', bold: true },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between py-2 border-b last:border-0"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{item.label}</span>
                        <span
                          className={`text-sm ${item.bold ? 'font-bold' : 'font-semibold'}`}
                          style={{ color: item.color }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    boxShadow: '0 2px 12px oklch(76% 0.12 270 / 0.3)',
                    transition: prefersReducedMotion ? 'none' : 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!prefersReducedMotion) {
                      (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px oklch(76% 0.12 270 / 0.45)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px oklch(76% 0.12 270 / 0.3)';
                  }}
                >
                  Apply for Loan
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

export default LoanCalculatorSection;
