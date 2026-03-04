import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Mic,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import FamilyFinancialPlanner from "../components/FamilyFinancialPlanner";
import ProtectionSecurityHub from "../components/ProtectionSecurityHub";
import RuralEmpowerment from "../components/RuralEmpowerment";
import SeniorSafeMode from "../components/SeniorSafeMode";
import YouthDreamBuilder from "../components/YouthDreamBuilder";
import MotionReveal from "../components/motion/MotionReveal";
import { useLifeStage } from "../contexts/LifeStageContext";
import type { LifeStage } from "../contexts/LifeStageContext";

const features = [
  {
    icon: Brain,
    title: "AI Financial Advisor",
    description:
      "Get personalized investment advice, spending insights, and financial planning powered by advanced AI.",
    color: "text-lavender-700",
    bg: "bg-lavender-50",
  },
  {
    icon: Mic,
    title: "Voice Banking",
    description:
      "Perform transactions, check balances, and get support using natural voice commands in 6 Indian languages.",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Visual spending breakdowns, savings goals tracker, and predictive cash flow analysis.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Biometric authentication, behavioral analytics, and real-time fraud detection with instant alerts.",
    color: "text-red-700",
    bg: "bg-red-50",
  },
  {
    icon: Zap,
    title: "Instant Everything",
    description:
      "Instant account opening, instant loans, instant transfers — banking at the speed of life.",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  {
    icon: Smartphone,
    title: "Unified Dashboard",
    description:
      "All your accounts, investments, loans, and insurance in one beautifully designed dashboard.",
    color: "text-purple-700",
    bg: "bg-purple-50",
  },
];

type NonNullLifeStage = Exclude<LifeStage, null>;

const lifeStageCapabilities: Record<
  NonNullLifeStage,
  { title: string; items: string[] }
> = {
  youth: {
    title: "Built for the Digital Generation",
    items: [
      "Gamified savings goals with rewards",
      "Credit score builder program",
      "Student loan management",
      "Investment starter packs from ₹100",
      "Peer payment splitting",
      "Career-linked financial planning",
    ],
  },
  family: {
    title: "Complete Family Financial Hub",
    items: [
      "Joint account management",
      "Children's education fund tracker",
      "Home loan EMI optimizer",
      "Family insurance dashboard",
      "Tax planning for dual income",
      "Emergency fund calculator",
    ],
  },
  senior: {
    title: "Safe & Simple Senior Banking",
    items: [
      "Large text and high contrast mode",
      "Pension and FD management",
      "Simplified transaction interface",
      "Family account monitoring",
      "Fraud protection alerts",
      "Voice-guided navigation",
    ],
  },
  rural: {
    title: "Empowering Rural India",
    items: [
      "Works on 2G/3G networks",
      "SMS banking for feature phones",
      "Government scheme integration",
      "Crop insurance management",
      "Micro-loan applications",
      "Regional language support",
    ],
  },
};

export default function NeoPage() {
  const navigate = useNavigate();
  const { lifeStage } = useLifeStage();
  const activeStage: NonNullLifeStage = lifeStage ?? "youth";
  const capabilities = lifeStageCapabilities[activeStage];

  return (
    <main className="min-h-screen bg-gradient-to-b from-lavender-50 to-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-lavender-900 via-lavender-800 to-lavender-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/assets/generated/hero-premium-background.dim_2400x1200.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionReveal>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 border border-white/30 rounded-full text-xs font-bold text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Next-Gen Digital Banking
                </div>
                <img
                  src="/assets/generated/neo-logo-life-based.dim_250x100.png"
                  alt="NEO by DSOUZA Bank"
                  className="h-12 object-contain"
                />
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                  The Future of
                  <span className="block text-lavender-200">
                    Banking is Here
                  </span>
                </h1>
                <p className="text-lg text-lavender-100 leading-relaxed font-medium">
                  NEO combines AI intelligence, voice banking, and life-stage
                  personalization to deliver a banking experience unlike
                  anything you've seen before.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => navigate({ to: "/services" })}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-lavender-800 rounded-xl font-bold text-sm hover:bg-lavender-50 shadow-soft transition-all duration-200"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate({ to: "/contact" })}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-all duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={200}>
              <div className="relative">
                <img
                  src="/assets/generated/mobile-app-mockup.dim_400x600.png"
                  alt="NEO Mobile App"
                  className="w-full max-w-xs mx-auto drop-shadow-2xl"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
                Powered by Intelligence
              </h2>
              <p className="text-[#1A1A1A] max-w-2xl mx-auto font-medium">
                Every feature in NEO is designed to make your financial life
                simpler, smarter, and more secure.
              </p>
            </div>
          </MotionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <MotionReveal key={feature.title} delay={i * 80}>
                <div className="group p-6 bg-white rounded-2xl border border-lavender-200/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#000000] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#1A1A1A] leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Life Stage Capabilities */}
      <section className="py-16 bg-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
                  {capabilities.title}
                </h2>
                <p className="text-[#1A1A1A] mb-6 font-medium">
                  NEO adapts to your life stage, offering features and tools
                  that matter most to you right now.
                </p>
                <ul className="space-y-3">
                  {capabilities.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-lavender-100 border border-lavender-300 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-lavender-700" />
                      </div>
                      <span className="text-sm text-[#1A1A1A] font-semibold">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/assets/generated/mobile-features-illustration.dim_500x400.png"
                  alt="NEO Features"
                  className="w-full rounded-2xl shadow-soft-xl"
                />
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Life Stage Specific Components */}
      {lifeStage === "youth" && (
        <MotionReveal>
          <YouthDreamBuilder />
        </MotionReveal>
      )}
      {lifeStage === "family" && (
        <MotionReveal>
          <FamilyFinancialPlanner />
        </MotionReveal>
      )}
      {lifeStage === "senior" && (
        <MotionReveal>
          <SeniorSafeMode />
        </MotionReveal>
      )}
      {lifeStage === "rural" && (
        <MotionReveal>
          <RuralEmpowerment />
        </MotionReveal>
      )}

      {/* Protection Hub */}
      <MotionReveal>
        <ProtectionSecurityHub />
      </MotionReveal>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-lavender-800 to-lavender-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Experience NEO?
            </h2>
            <p className="text-lavender-200 mb-8 text-lg font-medium">
              Join millions of Indians who have already upgraded to smarter
              banking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => navigate({ to: "/services" })}
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-lavender-800 rounded-xl font-bold hover:bg-lavender-50 shadow-soft transition-all duration-200"
              >
                Open NEO Account
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate({ to: "/contact" })}
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 border border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-200"
              >
                Talk to an Expert
              </button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </main>
  );
}
