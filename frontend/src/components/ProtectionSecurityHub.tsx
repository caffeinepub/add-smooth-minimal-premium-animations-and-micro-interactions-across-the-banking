import React, { useState } from 'react';
import MotionReveal from './motion/MotionReveal';
import { Shield, Heart, User, Leaf, Wheat, ChevronDown, ChevronUp, CheckCircle, AlertTriangle, XCircle, Play, ChevronRight } from 'lucide-react';

const insuranceProducts = [
  {
    id: 'health',
    icon: <Heart className="w-6 h-6" />,
    title: 'Health Insurance',
    tagline: 'Protect your health, protect your wealth.',
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    explanation: 'Health insurance covers your medical expenses — from doctor visits to surgeries. Pay a small premium monthly, and we cover your hospital bills up to your sum insured. No more worrying about medical emergencies draining your savings.',
    coverage: '₹5L – ₹50L',
    premium: 'From ₹500/month',
  },
  {
    id: 'life',
    icon: <Shield className="w-6 h-6" />,
    title: 'Life Insurance',
    tagline: 'Your family\'s security, guaranteed.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    explanation: 'Life insurance ensures your family is financially secure if something happens to you. A term plan gives your family a lump sum payout. It\'s the most affordable way to protect the people you love.',
    coverage: '₹25L – ₹2Cr',
    premium: 'From ₹350/month',
  },
  {
    id: 'senior',
    icon: <User className="w-6 h-6" />,
    title: 'Senior Medical Plans',
    tagline: 'Specialized care for golden years.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    explanation: 'Designed specifically for citizens above 60, our senior medical plans cover pre-existing conditions, regular health check-ups, and critical illness. No medical tests required for entry.',
    coverage: '₹3L – ₹20L',
    premium: 'From ₹800/month',
  },
  {
    id: 'micro',
    icon: <Leaf className="w-6 h-6" />,
    title: 'Micro Insurance',
    tagline: 'Big protection, small premiums.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    explanation: 'Micro insurance is designed for low-income families and daily wage workers. Pay as little as ₹50/month and get coverage for accidents, hospitalization, and life. Simple, affordable, and accessible.',
    coverage: '₹50K – ₹5L',
    premium: 'From ₹50/month',
  },
  {
    id: 'crop',
    icon: <Wheat className="w-6 h-6" />,
    title: 'Crop Insurance',
    tagline: 'Protect your harvest, secure your income.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    explanation: 'Crop insurance protects farmers from losses due to drought, floods, pests, or natural disasters. Linked to government schemes like PMFBY, it ensures you get compensated even when nature is unpredictable.',
    coverage: 'Up to ₹2L/acre',
    premium: 'From ₹200/season',
  },
];

const assessmentQuestions = [
  { id: 'health', question: 'Do you have health insurance covering ₹5L or more?', weight: 25 },
  { id: 'life', question: 'Do you have life insurance of at least 10x your annual income?', weight: 30 },
  { id: 'emergency', question: 'Do you have 3+ months of expenses saved as emergency fund?', weight: 25 },
  { id: 'critical', question: 'Do you have critical illness or disability coverage?', weight: 20 },
];

const claimSteps = [
  { step: 1, title: 'Report Claim', desc: 'Call our 24/7 helpline or use the app to register your claim instantly.', icon: '📞', duration: '2 min' },
  { step: 2, title: 'Document Upload', desc: 'Upload required documents — hospital bills, reports, or FIR — via app or branch.', icon: '📄', duration: '10 min' },
  { step: 3, title: 'Verification', desc: 'Our team verifies your claim within 24 hours using AI-assisted processing.', icon: '🔍', duration: '24 hrs' },
  { step: 4, title: 'Settlement', desc: 'Approved claims are settled directly to your bank account within 3 working days.', icon: '💰', duration: '3 days' },
];

export default function ProtectionSecurityHub() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showResult, setShowResult] = useState(false);
  const [activeClaimStep, setActiveClaimStep] = useState(0);
  const [claimRunning, setClaimRunning] = useState(false);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const handleAnswer = (id: string, value: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const calculateResult = () => {
    let score = 0;
    assessmentQuestions.forEach((q) => {
      if (answers[q.id] === true) score += q.weight;
    });
    return score;
  };

  const getResultBadge = (score: number) => {
    if (score >= 75) return { label: 'Well Protected', color: 'bg-green-100 text-green-700', icon: <CheckCircle className="w-5 h-5" /> };
    if (score >= 40) return { label: 'Partially Covered', color: 'bg-amber-100 text-amber-700', icon: <AlertTriangle className="w-5 h-5" /> };
    return { label: 'At Risk', color: 'bg-red-100 text-red-700', icon: <XCircle className="w-5 h-5" /> };
  };

  const runClaimDemo = () => {
    setClaimRunning(true);
    setActiveClaimStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= claimSteps.length) {
        clearInterval(interval);
        setClaimRunning(false);
      } else {
        setActiveClaimStep(step);
      }
    }, 1200);
  };

  const answeredAll = assessmentQuestions.every((q) => answers[q.id] !== undefined);
  const resultScore = calculateResult();
  const resultBadge = getResultBadge(resultScore);

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="hero-gradient-blob hero-gradient-blob-1 top-10 left-10 opacity-15" />

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionReveal>
          <div className="text-center mb-12">
            <div className="section-badge bg-blue-50 text-blue-700 mb-4">
              <Shield className="w-3.5 h-3.5" />
              Comprehensive Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-3 gold-underline inline-block">
              Protection & Security Hub
            </h2>
            <p className="text-deep-navy/60 mt-6 max-w-xl mx-auto">
              Complete insurance solutions designed for every life stage — simple, affordable, and trustworthy.
            </p>
          </div>
        </MotionReveal>

        {/* Insurance Product Cards */}
        <MotionReveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {insuranceProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => toggleCard(product.id)}
                role="button"
                aria-expanded={expandedCard === product.id}
                aria-label={`${product.title} - click to learn more`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggleCard(product.id)}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2.5 rounded-xl ${product.bgColor} ${product.color}`}>
                      {product.icon}
                    </div>
                    <div className="flex items-center gap-1 text-deep-navy/40">
                      {expandedCard === product.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-deep-navy mb-1">{product.title}</h3>
                  <p className="text-xs text-deep-navy/60 mb-3">{product.tagline}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-ice-blue text-deep-navy px-2 py-1 rounded-full font-medium">
                      {product.coverage}
                    </span>
                    <span className="text-deep-navy/50">{product.premium}</span>
                  </div>
                </div>

                {/* Expanded explanation */}
                {expandedCard === product.id && (
                  <div className={`px-5 pb-5 pt-0 border-t border-gold/10`}>
                    <div className={`${product.bgColor} rounded-xl p-4 mt-3`}>
                      <p className="text-sm text-deep-navy/80 leading-relaxed">{product.explanation}</p>
                      <button className="mt-3 text-sm font-semibold text-deep-navy flex items-center gap-1 hover:gap-2 transition-all">
                        Get a Quote <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Underinsured Assessment */}
          <MotionReveal delay={150}>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-display font-semibold text-deep-navy">
                  Are You Underinsured?
                </h3>
              </div>
              <p className="text-sm text-deep-navy/60 mb-5">
                Answer 4 quick questions to find out your protection level.
              </p>
              <div className="space-y-4">
                {assessmentQuestions.map((q) => (
                  <div key={q.id} className="bg-ice-blue/50 rounded-xl p-3">
                    <p className="text-sm text-deep-navy font-medium mb-2">{q.question}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAnswer(q.id, true)}
                        className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          answers[q.id] === true
                            ? 'bg-green-500 text-white'
                            : 'bg-white text-deep-navy hover:bg-green-50'
                        }`}
                        aria-pressed={answers[q.id] === true}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, false)}
                        className={`flex-1 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          answers[q.id] === false
                            ? 'bg-red-500 text-white'
                            : 'bg-white text-deep-navy hover:bg-red-50'
                        }`}
                        aria-pressed={answers[q.id] === false}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {answeredAll && (
                <div className="mt-4">
                  {!showResult ? (
                    <button
                      onClick={() => setShowResult(true)}
                      className="w-full btn-navy py-2.5 rounded-xl text-sm"
                    >
                      See My Protection Level
                    </button>
                  ) : (
                    <div className={`flex items-center gap-3 p-4 rounded-xl ${resultBadge.color}`}>
                      {resultBadge.icon}
                      <div>
                        <div className="font-semibold">{resultBadge.label}</div>
                        <div className="text-xs opacity-80">Score: {resultScore}/100</div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </MotionReveal>

          {/* Claim Simulation */}
          <MotionReveal delay={200}>
            <div className="glass-card-navy rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Play className="w-5 h-5 text-gold" />
                <h3 className="text-lg font-display font-semibold text-white">
                  Claim Simulation Demo
                </h3>
              </div>
              <p className="text-sm text-white/60 mb-5">
                See how easy it is to file and settle a claim with DSOUZA BANK.
              </p>
              <div className="space-y-3 mb-5">
                {claimSteps.map((step, i) => (
                  <div
                    key={step.step}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-500 ${
                      i <= activeClaimStep
                        ? 'bg-white/15 border border-gold/30'
                        : 'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 transition-all ${
                      i <= activeClaimStep ? 'bg-gold text-deep-navy' : 'bg-white/10 text-white/40'
                    }`}>
                      {i < activeClaimStep ? '✓' : step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${i <= activeClaimStep ? 'text-white' : 'text-white/40'}`}>
                          {step.title}
                        </span>
                        <span className={`text-xs ${i <= activeClaimStep ? 'text-gold' : 'text-white/30'}`}>
                          {step.duration}
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 ${i <= activeClaimStep ? 'text-white/70' : 'text-white/30'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={runClaimDemo}
                disabled={claimRunning}
                className="w-full btn-gold py-2.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label="Run claim simulation demo"
              >
                {claimRunning ? 'Simulating...' : '▶ Run Claim Demo'}
              </button>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
