import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  CreditCard, Home, Briefcase, TrendingUp, Shield, Smartphone,
  ArrowRight, Check, Star, Landmark, PiggyBank, Car
} from "lucide-react";
import MotionReveal from "../components/motion/MotionReveal";

const categories = [
  { id: "personal", label: "Personal Banking" },
  { id: "loans", label: "Loans & Credit" },
  { id: "investments", label: "Investments" },
  { id: "business", label: "Business Banking" },
  { id: "insurance", label: "Insurance" },
  { id: "digital", label: "Digital Services" },
];

const services: Record<string, Array<{
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  color: string;
  bg: string;
}>> = {
  personal: [
    {
      icon: PiggyBank,
      title: "Savings Account",
      description: "Earn up to 7% interest with our premium savings accounts. Zero minimum balance for digital accounts.",
      features: ["Up to 7% interest p.a.", "Zero minimum balance", "Free debit card", "Instant account opening"],
      badge: "Most Popular",
      color: "text-lavender-700",
      bg: "bg-lavender-50",
    },
    {
      icon: CreditCard,
      title: "Credit Cards",
      description: "Premium credit cards with cashback, travel rewards, and exclusive lifestyle benefits.",
      features: ["Up to 5% cashback", "Airport lounge access", "Zero forex markup", "EMI on all purchases"],
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
    {
      icon: Landmark,
      title: "Fixed Deposits",
      description: "Secure your savings with guaranteed returns. Flexible tenures from 7 days to 10 years.",
      features: ["Up to 8.5% interest", "Flexible tenures", "Auto-renewal option", "Loan against FD"],
      badge: "High Returns",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
    },
  ],
  loans: [
    {
      icon: Home,
      title: "Home Loans",
      description: "Make your dream home a reality with competitive interest rates and flexible repayment options.",
      features: ["From 8.5% p.a.", "Up to ₹5 Cr loan", "30-year tenure", "Quick approval"],
      badge: "Best Rate",
      color: "text-amber-700",
      bg: "bg-amber-50",
    },
    {
      icon: Car,
      title: "Vehicle Loans",
      description: "Drive your dream car with easy financing. New and used vehicle loans available.",
      features: ["From 9% p.a.", "Up to 100% financing", "7-year tenure", "Doorstep service"],
      color: "text-red-700",
      bg: "bg-red-50",
    },
    {
      icon: Briefcase,
      title: "Personal Loans",
      description: "Instant personal loans for any need — medical, travel, education, or home renovation.",
      features: ["From 10.5% p.a.", "Up to ₹25 Lakh", "Instant disbursal", "No collateral"],
      color: "text-purple-700",
      bg: "bg-purple-50",
    },
  ],
  investments: [
    {
      icon: TrendingUp,
      title: "Mutual Funds",
      description: "Invest in curated mutual fund portfolios with AI-powered recommendations.",
      features: ["1000+ fund options", "SIP from ₹100", "Zero commission", "Expert advisory"],
      badge: "AI Powered",
      color: "text-lavender-700",
      bg: "bg-lavender-50",
    },
    {
      icon: Star,
      title: "Wealth Management",
      description: "Dedicated relationship managers for high-net-worth individuals.",
      features: ["Dedicated RM", "Portfolio review", "Tax planning", "Estate planning"],
      color: "text-amber-700",
      bg: "bg-amber-50",
    },
  ],
  business: [
    {
      icon: Briefcase,
      title: "Current Account",
      description: "Feature-rich current accounts for businesses of all sizes.",
      features: ["Unlimited transactions", "Bulk payment tools", "GST integration", "Dedicated support"],
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Business Loans",
      description: "Fuel your business growth with flexible financing solutions.",
      features: ["Up to ₹10 Cr", "Collateral-free options", "Quick disbursal", "Flexible repayment"],
      badge: "Fast Approval",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
    },
  ],
  insurance: [
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Protect your family's future with comprehensive life insurance plans.",
      features: ["Term & endowment plans", "Tax benefits u/s 80C", "Critical illness cover", "Online claims"],
      color: "text-lavender-700",
      bg: "bg-lavender-50",
    },
    {
      icon: Home,
      title: "General Insurance",
      description: "Comprehensive coverage for health, vehicle, home, and travel.",
      features: ["Health insurance", "Motor insurance", "Home insurance", "Travel insurance"],
      color: "text-red-700",
      bg: "bg-red-50",
    },
  ],
  digital: [
    {
      icon: Smartphone,
      title: "NEO Mobile App",
      description: "Full-featured banking app with AI assistant, voice banking, and smart analytics.",
      features: ["AI-powered insights", "Voice banking", "UPI payments", "Investment tracking"],
      badge: "New",
      color: "text-lavender-700",
      bg: "bg-lavender-50",
    },
    {
      icon: CreditCard,
      title: "Net Banking",
      description: "Comprehensive online banking portal with advanced features.",
      features: ["Fund transfers", "Bill payments", "Account statements", "Tax documents"],
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
  ],
};

export default function ServicesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("personal");

  return (
    <main className="min-h-screen bg-gradient-to-b from-lavender-50 to-white">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-lavender-100 via-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lavender-100 border border-lavender-200/60 rounded-full text-xs font-bold text-[#000000] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-lavender-600 animate-pulse" />
              Comprehensive Banking Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#000000] mb-4">
              Our Services
            </h1>
            <p className="text-lg text-[#1A1A1A] max-w-2xl mx-auto font-medium">
              From everyday banking to wealth management — discover financial products designed for every stage of your life.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-lavender-200/60 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-lavender-700 text-white shadow-soft"
                    : "text-[#1A1A1A] hover:bg-lavender-50 hover:text-[#000000]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(services[activeCategory] || []).map((service, i) => (
              <MotionReveal key={service.title} delay={i * 100}>
                <div className="group bg-white rounded-2xl border border-lavender-200/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center`}>
                        <service.icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      {service.badge && (
                        <span className="px-2 py-1 bg-lavender-100 text-lavender-800 text-[10px] font-bold rounded-full border border-lavender-200/60">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#000000] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#1A1A1A] leading-relaxed mb-4 font-medium">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-xs text-[#1A1A1A] font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate({ to: "/contact" })}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-lavender-50 border border-lavender-200/60 text-[#000000] rounded-xl text-sm font-bold hover:bg-lavender-700 hover:text-white hover:border-lavender-700 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
