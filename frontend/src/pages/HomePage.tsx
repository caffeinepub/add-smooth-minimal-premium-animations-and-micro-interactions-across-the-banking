import { useNavigate } from "@tanstack/react-router";
import { ArrowRight, Shield, Zap, Users, TrendingUp, Star, ChevronRight } from "lucide-react";
import MotionReveal from "../components/motion/MotionReveal";
import StatsRow from "../components/StatsRow";
import LoanCalculatorSection from "../components/LoanCalculatorSection";
import ExperienceSelector from "../components/ExperienceSelector";
import TrustSecuritySection from "../components/TrustSecuritySection";
import FinancialWellbeingCard from "../components/FinancialWellbeingCard";
import BrandStatementBanner from "../components/BrandStatementBanner";
import FinancialHealthScore from "../components/FinancialHealthScore";
import { useLifeStage } from "../contexts/LifeStageContext";
import YouthDreamBuilder from "../components/YouthDreamBuilder";
import FamilyFinancialPlanner from "../components/FamilyFinancialPlanner";
import SeniorSafeMode from "../components/SeniorSafeMode";
import RuralEmpowerment from "../components/RuralEmpowerment";

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "256-bit encryption, biometric authentication, and real-time fraud detection keep your money safe.",
    color: "text-lavender-700",
    bg: "bg-lavender-50",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send money anywhere in India instantly with UPI, NEFT, RTGS, and IMPS — 24/7, 365 days.",
    color: "text-amber-700",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Life-Based Banking",
    description: "Personalized financial products tailored to your life stage — youth, family, senior, or rural.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
  {
    icon: TrendingUp,
    title: "Smart Investments",
    description: "AI-powered investment recommendations, mutual funds, FDs, and wealth management tools.",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    text: "DSOUZA Bank's business banking suite transformed how I manage my finances. The NEO platform is incredibly intuitive.",
    rating: 5,
    avatar: "/assets/generated/testimonial-woman.dim_150x150.png",
  },
  {
    name: "Rajesh Kumar",
    role: "Retired Teacher",
    text: "The Senior Safe Mode gives me peace of mind. Large fonts, simple navigation, and the voice assistant make banking easy.",
    rating: 5,
    avatar: "/assets/generated/testimonial-man.dim_150x150.png",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { lifeStage } = useLifeStage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-50 via-white to-lavender-100 pt-16 pb-24">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/assets/generated/hero-orbs-bg.dim_1920x900.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionReveal>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lavender-100 border border-lavender-200/60 rounded-full text-xs font-bold text-[#000000]">
                  <span className="w-1.5 h-1.5 rounded-full bg-lavender-600 animate-pulse" />
                  Life-Based Banking Platform
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#000000] leading-tight">
                  Banking That
                  <span className="block text-lavender-700">Grows With You</span>
                </h1>
                <p className="text-lg text-[#1A1A1A] leading-relaxed max-w-lg font-medium">
                  Personalized financial solutions for every stage of life. From your first job to retirement — DSOUZA Bank is your trusted partner.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate({ to: "/services" })}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-lavender-700 text-white rounded-xl font-bold text-sm hover:bg-lavender-800 shadow-soft hover:shadow-glow transition-all duration-200"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate({ to: "/neo" })}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-lavender-200 text-[#000000] rounded-xl font-bold text-sm hover:bg-lavender-50 shadow-soft transition-all duration-200"
                  >
                    Discover NEO
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={200}>
              <div className="relative">
                <img
                  src="/assets/generated/digital-banking-illustration.dim_600x400.png"
                  alt="Digital Banking Illustration"
                  className="w-full rounded-2xl shadow-soft-xl"
                />
                <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 shadow-soft-md">
                  <p className="text-xs font-bold text-[#000000]">₹2.4 Cr+ Transactions</p>
                  <p className="text-[10px] text-[#1A1A1A] font-medium">Processed daily</p>
                </div>
                <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 shadow-soft-md">
                  <p className="text-xs font-bold text-[#000000]">4.9★ Rating</p>
                  <p className="text-[10px] text-[#1A1A1A] font-medium">App Store</p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <StatsRow />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
                Why Choose DSOUZA Bank?
              </h2>
              <p className="text-[#1A1A1A] max-w-2xl mx-auto font-medium">
                We combine cutting-edge technology with personalized service to deliver a banking experience that truly understands your needs.
              </p>
            </div>
          </MotionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <MotionReveal key={feature.title} delay={i * 100}>
                <div className="group p-6 bg-white rounded-2xl border border-lavender-200/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
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

      {/* Life Stage Tools */}
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

      {/* Experience Selector */}
      <ExperienceSelector />

      {/* Financial Health Score */}
      <MotionReveal>
        <FinancialHealthScore />
      </MotionReveal>

      {/* Financial Wellbeing */}
      <MotionReveal>
        <FinancialWellbeingCard />
      </MotionReveal>

      {/* Loan Calculator */}
      <LoanCalculatorSection />

      {/* Trust & Security */}
      <TrustSecuritySection />

      {/* Brand Statement */}
      <BrandStatementBanner />

      {/* Testimonials */}
      <section className="py-20 bg-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#000000] mb-4">
                Trusted by Millions
              </h2>
              <p className="text-[#1A1A1A] font-medium">
                Real stories from real customers across India.
              </p>
            </div>
          </MotionReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <MotionReveal key={t.name} delay={i * 150}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-lavender-200/60">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-sm text-[#1A1A1A] leading-relaxed mb-4 font-medium italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-lavender-200"
                    />
                    <div>
                      <p className="text-sm font-bold text-[#000000]">{t.name}</p>
                      <p className="text-xs text-[#1A1A1A] font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
