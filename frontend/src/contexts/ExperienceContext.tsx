import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ExperienceType = 'digital' | 'rural' | 'senior' | 'business' | null;

interface ExperienceContextType {
  experience: ExperienceType;
  setExperience: (exp: ExperienceType) => void;
}

const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [experience, setExperienceState] = useState<ExperienceType>(() => {
    const saved = localStorage.getItem('dsouza-bank-mode');
    return (saved as ExperienceType) || null;
  });

  useEffect(() => {
    if (experience) {
      localStorage.setItem('dsouza-bank-mode', experience);
    } else {
      localStorage.removeItem('dsouza-bank-mode');
    }

    // Apply senior mode class to body
    if (experience === 'senior') {
      document.body.classList.add('senior-mode');
    } else {
      document.body.classList.remove('senior-mode');
    }
  }, [experience]);

  const setExperience = (exp: ExperienceType) => {
    setExperienceState(exp);
  };

  return (
    <ExperienceContext.Provider value={{ experience, setExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(ExperienceContext);
  if (context === undefined) {
    throw new Error('useExperience must be used within an ExperienceProvider');
  }
  return context;
}
