import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontSize = 'small' | 'medium' | 'large';

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    const saved = localStorage.getItem('dsouza-bank-font-size');
    return (saved as FontSize) || 'medium';
  });

  const [highContrast, setHighContrast] = useState<boolean>(() => {
    const saved = localStorage.getItem('dsouza-bank-high-contrast');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('dsouza-bank-font-size', fontSize);
    
    // Apply font size to document
    const root = document.documentElement;
    root.classList.remove('font-small', 'font-medium', 'font-large');
    root.classList.add(`font-${fontSize}`);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('dsouza-bank-high-contrast', String(highContrast));
    
    // Apply high contrast mode
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [highContrast]);

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
  };

  const toggleHighContrast = () => {
    setHighContrast(prev => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{ fontSize, setFontSize, highContrast, toggleHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
