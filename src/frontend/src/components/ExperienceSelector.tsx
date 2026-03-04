import {
  ArrowRight,
  Briefcase,
  Check,
  GraduationCap,
  Leaf,
  Users,
} from "lucide-react";
import type React from "react";
import {
  type ExperienceType,
  useExperience,
} from "../contexts/ExperienceContext";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import MotionReveal from "./motion/MotionReveal";

interface ExperienceOption {
  id: ExperienceType;
  icon: React.ElementType;
  label: string;
  tagline: string;
  features: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

const experiences: ExperienceOption[] = [
  {
    id: "rural",
    icon: Leaf,
    label: "Rural Banking",
    tagline: "Banking for Bharat",
    features: [
      "Kisan Credit Card",
      "Agri Loans",
      "Village ATMs",
      "Vernacular Support",
    ],
    color: "oklch(55% 0.14 155)",
    bgColor: "oklch(88% 0.08 155 / 0.15)",
    borderColor: "oklch(75% 0.1 155 / 0.3)",
  },
  {
    id: "senior",
    icon: Users,
    label: "Senior Citizens",
    tagline: "Comfort & Care",
    features: [
      "Higher FD Rates",
      "Doorstep Banking",
      "Pension Services",
      "Health Insurance",
    ],
    color: "oklch(65% 0.1 85)",
    bgColor: "oklch(92% 0.08 85 / 0.2)",
    borderColor: "oklch(85% 0.08 85 / 0.4)",
  },
  {
    id: "digital",
    icon: GraduationCap,
    label: "Digital Banking",
    tagline: "Start Smart",
    features: [
      "Zero Balance Account",
      "Education Loans",
      "Student Credit Card",
      "Scholarships",
    ],
    color: "oklch(55% 0.12 185)",
    bgColor: "oklch(88% 0.1 185 / 0.15)",
    borderColor: "oklch(75% 0.1 185 / 0.3)",
  },
  {
    id: "business",
    icon: Briefcase,
    label: "Business Banking",
    tagline: "Grow Together",
    features: [
      "Current Accounts",
      "Business Loans",
      "Trade Finance",
      "Payroll Services",
    ],
    color: "oklch(46% 0.09 255)",
    bgColor: "oklch(76% 0.12 270 / 0.12)",
    borderColor: "oklch(70% 0.1 270 / 0.3)",
  },
];

const ExperienceSelector: React.FC = () => {
  const { experience, setExperience } = useExperience();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(97% 0.015 270)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionReveal className="text-center mb-14">
          <p className="overline mb-3">Personalized Banking</p>
          <h2
            className="font-bold mb-4"
            style={{ color: "var(--foreground)", letterSpacing: "-0.03em" }}
          >
            Banking Built for{" "}
            <span style={{ color: "var(--secondary)" }}>Your Life Stage</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#000000" }}
          >
            Choose your experience and discover banking solutions tailored
            specifically for you.
          </p>
        </MotionReveal>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isSelected = experience === exp.id;

            return (
              <MotionReveal key={String(exp.id)} delay={index * 80}>
                <button
                  type="button"
                  onClick={() => setExperience(exp.id)}
                  className="w-full text-left rounded-3xl p-6 group"
                  style={{
                    backgroundColor: isSelected ? exp.bgColor : "var(--card)",
                    border: `2px solid ${isSelected ? exp.borderColor : "var(--border)"}`,
                    boxShadow: isSelected
                      ? "var(--shadow-lavender)"
                      : "var(--shadow-soft)",
                    transition: prefersReducedMotion
                      ? "none"
                      : "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: isSelected
                      ? "translateY(-4px)"
                      : "translateY(0)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected && !prefersReducedMotion) {
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(-4px)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "var(--shadow-lavender)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      (e.currentTarget as HTMLButtonElement).style.transform =
                        "translateY(0)";
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "var(--shadow-soft)";
                    }
                  }}
                  aria-pressed={isSelected}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: exp.bgColor }}
                  >
                    <Icon className="w-6 h-6" style={{ color: exp.color }} />
                  </div>

                  {/* Label */}
                  <h3
                    className="text-base font-bold mb-1"
                    style={{
                      color: "var(--foreground)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {exp.label}
                  </h3>
                  <p className="text-xs mb-4" style={{ color: "#000000" }}>
                    {exp.tagline}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {exp.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs"
                      >
                        <Check
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{
                            color: isSelected ? exp.color : "#000000",
                          }}
                        />
                        <span
                          style={{
                            color: "#000000",
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Selected indicator */}
                  {isSelected && (
                    <div
                      className="mt-4 flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: exp.color }}
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSelector;
