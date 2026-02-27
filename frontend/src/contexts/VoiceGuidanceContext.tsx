import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface VoiceGuidanceContextType {
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
  isSpeaking: boolean;
  speak: (text: string, lang?: string) => void;
  stop: () => void;
}

const VoiceGuidanceContext = createContext<VoiceGuidanceContextType | undefined>(undefined);

export function VoiceGuidanceProvider({ children }: { children: ReactNode }) {
  const [isEnabled, setIsEnabledState] = useState<boolean>(() => {
    const saved = localStorage.getItem('dsouza-bank-voice-guidance');
    return saved === 'true';
  });
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    localStorage.setItem('dsouza-bank-voice-guidance', isEnabled.toString());
  }, [isEnabled]);

  const setIsEnabled = (enabled: boolean) => {
    setIsEnabledState(enabled);
    if (!enabled && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const speak = useCallback((text: string, lang: string = 'en-US') => {
    if (!isEnabled || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [isEnabled]);

  const stop = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return (
    <VoiceGuidanceContext.Provider value={{ isEnabled, setIsEnabled, isSpeaking, speak, stop }}>
      {children}
    </VoiceGuidanceContext.Provider>
  );
}

export function useVoiceGuidance() {
  const context = useContext(VoiceGuidanceContext);
  if (context === undefined) {
    throw new Error('useVoiceGuidance must be used within a VoiceGuidanceProvider');
  }
  return context;
}
