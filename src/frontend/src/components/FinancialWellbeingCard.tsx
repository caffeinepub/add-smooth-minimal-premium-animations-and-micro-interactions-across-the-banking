import {
  ArrowRight,
  PiggyBank,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import type React from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface WellbeingItem {
  icon: React.ElementType;
  title: string;
  description: string;
  value: string;
  color: string;
  bgColor: string;
}

const wellbeingItems: WellbeingItem[] = [
  {
    icon: TrendingUp,
    title: "Investment Growth",
    description: "Your portfolio is performing well",
    value: "+12.4%",
    color: "oklch(65% 0.12 185)",
    bgColor: "oklch(88% 0.1 185 / 0.15)",
  },
  {
    icon: PiggyBank,
    title: "Savings Goal",
    description: "Emergency fund progress",
    value: "78%",
    color: "oklch(76% 0.12 270)",
    bgColor: "oklch(76% 0.12 270 / 0.12)",
  },
  {
    icon: Shield,
    title: "Insurance Cover",
    description: "Life & health protection",
    value: "₹50L",
    color: "oklch(65% 0.1 85)",
    bgColor: "oklch(92% 0.08 85 / 0.2)",
  },
  {
    icon: Target,
    title: "Retirement Plan",
    description: "On track for your goals",
    value: "65%",
    color: "oklch(65% 0.12 185)",
    bgColor: "oklch(88% 0.1 185 / 0.15)",
  },
];

const FinancialWellbeingCard: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="rounded-3xl p-6 sm:p-8"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-lavender)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="overline mb-1">Your Dashboard</p>
          <h3
            className="text-xl font-bold"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            Financial Wellbeing
          </h3>
        </div>
        <div
          className="px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{
            backgroundColor: "oklch(88% 0.1 185 / 0.15)",
            color: "oklch(50% 0.12 185)",
          }}
        >
          All Good ✓
        </div>
      </div>

      {/* Wellbeing Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wellbeingItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl p-4 group cursor-pointer"
              style={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                transition: prefersReducedMotion
                  ? "none"
                  : "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (!prefersReducedMotion) {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "var(--shadow-lavender)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <span
                  className="text-lg font-bold"
                  style={{ color: item.color, letterSpacing: "-0.02em" }}
                >
                  {item.value}
                </span>
              </div>
              <p
                className="text-sm font-semibold mb-0.5"
                style={{ color: "var(--foreground)" }}
              >
                {item.title}
              </p>
              <p className="text-xs" style={{ color: "#000000" }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div
        className="mt-5 pt-5 border-t flex items-center justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-sm" style={{ color: "#000000" }}>
          Last updated: Today
        </p>
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-semibold group"
          style={{ color: "var(--secondary)" }}
          onMouseEnter={(e) => {
            if (!prefersReducedMotion) {
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--primary)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--secondary)";
          }}
        >
          View Full Report
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default FinancialWellbeingCard;
