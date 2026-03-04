import { Award, Building2, TrendingUp, Users } from "lucide-react";
import { useInViewOnce } from "../hooks/useInViewOnce";

const stats = [
  {
    icon: Users,
    value: 15,
    suffix: "M+",
    label: "Happy Customers",
    color: "text-lavender-700",
  },
  {
    icon: Building2,
    value: 850,
    suffix: "+",
    label: "Branches Nationwide",
    color: "text-blue-700",
  },
  {
    icon: Award,
    value: 40,
    suffix: "+",
    label: "Years of Trust",
    color: "text-emerald-700",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    color: "text-amber-700",
  },
];

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  color,
  animate,
}: {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  animate: boolean;
}) {
  const displayValue = animate ? value : 0;

  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-12 h-12 rounded-xl bg-lavender-50 border border-lavender-200/60 flex items-center justify-center mb-3">
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className="font-display text-3xl font-bold text-[#000000] mb-1">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm text-[#1A1A1A] font-semibold">{label}</div>
    </div>
  );
}

export default function StatsRow() {
  const { ref, isInView } = useInViewOnce();

  return (
    <section className="py-12 bg-white border-y border-lavender-200/60">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-lavender-200/60">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} animate={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
