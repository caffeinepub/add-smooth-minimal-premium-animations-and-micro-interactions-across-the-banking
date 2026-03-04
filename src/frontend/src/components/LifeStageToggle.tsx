import { Heart, Leaf, Users, Zap } from "lucide-react";
import type React from "react";
import { type LifeStage, useLifeStage } from "../contexts/LifeStageContext";

const modes: {
  id: LifeStage;
  label: string;
  icon: React.ReactNode;
  color: string;
}[] = [
  {
    id: "youth",
    label: "Youth Mode",
    icon: <Zap className="w-3.5 h-3.5" />,
    color: "text-amber-600",
  },
  {
    id: "family",
    label: "Family Mode",
    icon: <Users className="w-3.5 h-3.5" />,
    color: "text-blue-600",
  },
  {
    id: "senior",
    label: "Senior Mode",
    icon: <Heart className="w-3.5 h-3.5" />,
    color: "text-rose-600",
  },
  {
    id: "rural",
    label: "Rural Mode",
    icon: <Leaf className="w-3.5 h-3.5" />,
    color: "text-green-600",
  },
];

export default function LifeStageToggle() {
  const { lifeStage, setLifeStage } = useLifeStage();

  const handleToggle = (id: LifeStage) => {
    if (lifeStage === id) {
      setLifeStage(null);
    } else {
      setLifeStage(id);
    }
  };

  return (
    <fieldset
      className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide py-1 border-0 p-0 m-0"
      aria-label="Life Stage Mode Selection"
    >
      <span className="text-xs text-[#333333] font-medium whitespace-nowrap hidden sm:block mr-1">
        Life Stage:
      </span>
      {modes.map((mode) => (
        <button
          type="button"
          key={mode.id}
          onClick={() => handleToggle(mode.id)}
          className={`life-stage-pill flex items-center gap-1.5 ${
            lifeStage === mode.id
              ? "active"
              : "bg-white/60 text-[#222222] hover:bg-ice-blue"
          }`}
          aria-pressed={lifeStage === mode.id}
          aria-label={`${mode.label}${lifeStage === mode.id ? " (active)" : ""}`}
        >
          <span className={lifeStage === mode.id ? "text-white" : mode.color}>
            {mode.icon}
          </span>
          {mode.label}
        </button>
      ))}
    </fieldset>
  );
}
