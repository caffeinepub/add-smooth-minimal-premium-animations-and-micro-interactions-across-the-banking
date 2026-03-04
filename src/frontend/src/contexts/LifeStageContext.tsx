import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type LifeStage = "youth" | "family" | "senior" | "rural" | null;

interface LifeStageContextValue {
  lifeStage: LifeStage;
  setLifeStage: (stage: LifeStage) => void;
}

const LifeStageContext = createContext<LifeStageContextValue>({
  lifeStage: null,
  setLifeStage: () => {},
});

export function LifeStageProvider({ children }: { children: ReactNode }) {
  const [lifeStage, setLifeStageState] = useState<LifeStage>(() => {
    try {
      const stored = localStorage.getItem("dsouza-life-stage");
      return (stored as LifeStage) || null;
    } catch {
      return null;
    }
  });

  const setLifeStage = (stage: LifeStage) => {
    setLifeStageState(stage);
    try {
      if (stage) {
        localStorage.setItem("dsouza-life-stage", stage);
      } else {
        localStorage.removeItem("dsouza-life-stage");
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    // Remove all mode classes
    root.classList.remove(
      "senior-mode",
      "rural-mode",
      "youth-mode",
      "family-mode",
    );
    if (lifeStage) {
      root.classList.add(`${lifeStage}-mode`);
    }
  }, [lifeStage]);

  return (
    <LifeStageContext.Provider value={{ lifeStage, setLifeStage }}>
      {children}
    </LifeStageContext.Provider>
  );
}

export function useLifeStage() {
  return useContext(LifeStageContext);
}
