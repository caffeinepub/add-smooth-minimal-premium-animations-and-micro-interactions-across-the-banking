import React from 'react';
import { useLifeStage, LifeStage } from '../contexts/LifeStageContext';
import { Zap, Users, Heart, Leaf } from 'lucide-react';

const modes: { id: LifeStage; label: string; icon: React.ReactNode; color: string }[] = [
  { id: 'youth', label: 'Youth Mode', icon: <Zap className="w-3.5 h-3.5" />, color: 'text-amber-600' },
  { id: 'family', label: 'Family Mode', icon: <Users className="w-3.5 h-3.5" />, color: 'text-blue-600' },
  { id: 'senior', label: 'Senior Mode', icon: <Heart className="w-3.5 h-3.5" />, color: 'text-rose-600' },
  { id: 'rural', label: 'Rural Mode', icon: <Leaf className="w-3.5 h-3.5" />, color: 'text-green-600' },
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
    <div
      className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide py-1"
      role="group"
      aria-label="Life Stage Mode Selection"
    >
      <span className="text-xs text-deep-navy/50 font-medium whitespace-nowrap hidden sm:block mr-1">
        Life Stage:
      </span>
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => handleToggle(mode.id)}
          className={`life-stage-pill flex items-center gap-1.5 ${
            lifeStage === mode.id
              ? 'active'
              : 'bg-white/60 text-deep-navy/70 hover:bg-ice-blue'
          }`}
          aria-pressed={lifeStage === mode.id}
          aria-label={`${mode.label}${lifeStage === mode.id ? ' (active)' : ''}`}
        >
          <span className={lifeStage === mode.id ? 'text-deep-navy' : mode.color}>
            {mode.icon}
          </span>
          {mode.label}
        </button>
      ))}
    </div>
  );
}
