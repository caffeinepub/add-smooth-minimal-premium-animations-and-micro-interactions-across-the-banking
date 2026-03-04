import {
  AlertCircle,
  ChevronRight,
  PiggyBank,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { useInViewOnce } from "../hooks/useInViewOnce";
import MotionReveal from "./motion/MotionReveal";

interface ScoreData {
  label: string;
  score: number;
  maxScore: number;
  strokeColor: string;
  icon: React.ReactNode;
  tip: string;
}

const scores: ScoreData[] = [
  {
    label: "Savings Score",
    score: 72,
    maxScore: 100,
    strokeColor: "#C6A75E",
    icon: <PiggyBank className="w-5 h-5" />,
    tip: "You're saving well! Aim for 20% of income.",
  },
  {
    label: "Investment Score",
    score: 58,
    maxScore: 100,
    strokeColor: "#3B82F6",
    icon: <TrendingUp className="w-5 h-5" />,
    tip: "Start a SIP to boost your investment score.",
  },
  {
    label: "Insurance Score",
    score: 85,
    maxScore: 100,
    strokeColor: "#10B981",
    icon: <Shield className="w-5 h-5" />,
    tip: "Great coverage! Review your policy annually.",
  },
  {
    label: "Emergency Fund",
    score: 43,
    maxScore: 100,
    strokeColor: "#F59E0B",
    icon: <AlertCircle className="w-5 h-5" />,
    tip: "Build 3–6 months of expenses as emergency fund.",
  },
];

const aiRecommendations = [
  {
    icon: "💡",
    title: "Top Up Emergency Fund",
    desc: "You need ₹45,000 more to reach 3 months of expenses. Set up an auto-transfer of ₹5,000/month.",
    priority: "High",
    priorityColor: "bg-red-100 text-red-700",
  },
  {
    icon: "📈",
    title: "Start a Monthly SIP",
    desc: "Investing ₹2,000/month in a diversified equity fund can grow to ₹3.5L in 10 years.",
    priority: "Medium",
    priorityColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: "🛡️",
    title: "Review Life Insurance",
    desc: "Your current coverage may be insufficient. Consider a term plan of ₹50L for complete protection.",
    priority: "Medium",
    priorityColor: "bg-amber-100 text-amber-700",
  },
  {
    icon: "🏦",
    title: "Tax-Saving Opportunity",
    desc: "You can save up to ₹46,800 in taxes by maximizing your Section 80C investments this year.",
    priority: "Low",
    priorityColor: "bg-green-100 text-green-700",
  },
];

function CircularProgress({
  data,
  animate,
}: { data: ScoreData; animate: boolean }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let rafId: number;
    const end = data.score;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayScore(Math.round(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [animate, data.score]);

  const offset = circumference - (displayScore / data.maxScore) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-32">
        <svg
          className="w-full h-full"
          viewBox="0 0 120 120"
          role="img"
          aria-label={`${data.label}: ${data.score} out of ${data.maxScore}`}
        >
          <title>{`${data.label}: ${data.score} out of ${data.maxScore}`}</title>
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#EAF4FF"
            strokeWidth="10"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={data.strokeColor}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={animate ? offset : circumference}
            className="progress-ring-circle"
            style={{
              transition: animate
                ? "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold font-display text-deep-navy">
            {displayScore}
          </span>
          <span className="text-xs text-[#000000]">/ {data.maxScore}</span>
        </div>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <span style={{ color: data.strokeColor }}>{data.icon}</span>
          <span className="text-sm font-semibold text-deep-navy">
            {data.label}
          </span>
        </div>
        <p className="text-xs text-[#000000] max-w-[120px]">{data.tip}</p>
      </div>
    </div>
  );
}

export default function FinancialHealthScore() {
  const { ref, isInView } = useInViewOnce({ threshold: 0.2 });

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-ice-blue/40 to-sage-green/30 relative overflow-hidden">
      {/* Background blobs */}
      <div className="hero-gradient-blob hero-gradient-blob-1 top-0 right-0 opacity-20" />
      <div className="hero-gradient-blob hero-gradient-blob-2 bottom-0 left-0 opacity-15" />

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionReveal>
          <div className="text-center mb-12">
            <div className="section-badge bg-gold/15 text-deep-navy mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              AI-Powered Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-navy mb-3 gold-underline inline-block">
              Your Financial Health Score
            </h2>
            <p className="text-[#000000] mt-6 max-w-xl mx-auto">
              A holistic view of your financial wellness across four key
              dimensions.
            </p>
          </div>
        </MotionReveal>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress rings */}
          <MotionReveal delay={100} className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-display font-semibold text-deep-navy mb-6">
                Score Overview
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {scores.map((score) => (
                  <CircularProgress
                    key={score.label}
                    data={score}
                    animate={isInView}
                  />
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gold/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-[#000000]">
                      Overall Health Score
                    </span>
                    <div className="text-2xl font-bold font-display text-deep-navy">
                      64.5{" "}
                      <span className="text-sm font-normal text-[#000000]">
                        / 100
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                    Needs Attention
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* AI Recommendations */}
          <MotionReveal delay={200}>
            <div className="glass-card rounded-2xl p-6 h-full border border-black/20">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-gold" />
                <h3
                  className="text-lg font-display font-bold text-black"
                  style={{ color: "#000000" }}
                >
                  AI Recommendations
                </h3>
              </div>
              <div className="space-y-4">
                {aiRecommendations.map((rec) => (
                  <div
                    key={rec.title}
                    className="bg-black/8 rounded-xl p-3 hover:bg-black/12 transition-colors cursor-pointer group border border-black/15"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.06)",
                      borderColor: "rgba(0,0,0,0.12)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">{rec.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-sm font-bold truncate text-black"
                            style={{ color: "#000000" }}
                          >
                            {rec.title}
                          </span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 font-semibold ${rec.priorityColor}`}
                          >
                            {rec.priority}
                          </span>
                        </div>
                        <p
                          className="text-xs font-semibold leading-relaxed text-black"
                          style={{ color: "#000000" }}
                        >
                          {rec.desc}
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1 mt-2 text-gold text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      Take Action <ChevronRight className="w-3 h-3" />
                    </div>
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
