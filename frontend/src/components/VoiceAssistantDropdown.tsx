import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, MicOff, Volume2, X, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type {
  SpeechRecognitionInterface,
  SpeechRecognitionEventLocal,
  SpeechRecognitionErrorEventLocal,
} from '@/lib/speechTypes';

interface VoiceAssistantDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const LANG_CODES: Record<string, string> = {
  en: 'en-IN',
  hi: 'hi-IN',
  mr: 'mr-IN',
  kn: 'kn-IN',
  ta: 'ta-IN',
  te: 'te-IN',
  bn: 'bn-IN',
};

const VOICE_RESPONSES: Record<string, Record<string, string>> = {
  en: {
    greeting: "Hello! I'm DSOUZA AI Voice Assistant. How can I help you?",
    balance: "Your account balance is one lakh twenty four thousand five hundred rupees.",
    loan: "We offer home loans at eight point five percent per annum. Would you like to know more?",
    transfer: "You can transfer funds using NEFT, RTGS, or IMPS. Daily limit is ten lakhs.",
    default: "I heard you. Our banking team is available 24 hours. Please visit your nearest branch or call our helpline.",
  },
  hi: {
    greeting: "नमस्ते! मैं DSOUZA AI वॉयस असिस्टेंट हूं। आप कैसे हैं?",
    balance: "आपके खाते में एक लाख चौबीस हजार पांच सौ रुपये हैं।",
    loan: "हम आठ दशमलव पांच प्रतिशत पर होम लोन देते हैं।",
    transfer: "आप NEFT, RTGS या IMPS से पैसे भेज सकते हैं।",
    default: "मैंने आपकी बात सुनी। हमारी टीम 24 घंटे उपलब्ध है।",
  },
  mr: {
    greeting: "नमस्कार! मी DSOUZA AI व्हॉइस असिस्टंट आहे.",
    balance: "तुमच्या खात्यात एक लाख चोवीस हजार पाचशे रुपये आहेत.",
    loan: "आम्ही आठ दशांश पाच टक्के दराने गृहकर्ज देतो.",
    transfer: "तुम्ही NEFT, RTGS किंवा IMPS द्वारे पैसे पाठवू शकता.",
    default: "मी तुमचे ऐकले. आमची टीम 24 तास उपलब्ध आहे.",
  },
  kn: {
    greeting: "ನಮಸ್ಕಾರ! ನಾನು DSOUZA AI ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್.",
    balance: "ನಿಮ್ಮ ಖಾತೆಯಲ್ಲಿ ಒಂದು ಲಕ್ಷ ಇಪ್ಪತ್ತನಾಲ್ಕು ಸಾವಿರ ರೂಪಾಯಿ ಇದೆ.",
    loan: "ನಾವು ಎಂಟು ದಶಮಾಂಶ ಐದು ಶೇಕಡಾ ದರದಲ್ಲಿ ಗೃಹ ಸಾಲ ನೀಡುತ್ತೇವೆ.",
    transfer: "NEFT, RTGS ಅಥವಾ IMPS ಮೂಲಕ ಹಣ ವರ್ಗಾಯಿಸಬಹುದು.",
    default: "ನಾನು ನಿಮ್ಮ ಮಾತು ಕೇಳಿದೆ. ನಮ್ಮ ತಂಡ 24 ಗಂಟೆ ಲಭ್ಯ.",
  },
  ta: {
    greeting: "வணக்கம்! நான் DSOUZA AI குரல் உதவியாளர்.",
    balance: "உங்கள் கணக்கில் ஒரு லட்சத்து இருபத்து நான்காயிரத்து ஐந்நூறு ரூபாய் உள்ளது.",
    loan: "நாங்கள் எட்டு புள்ளி ஐந்து சதவீதத்தில் வீட்டு கடன் வழங்குகிறோம்.",
    transfer: "NEFT, RTGS அல்லது IMPS மூலம் பணம் அனுப்பலாம்.",
    default: "நான் உங்கள் பேச்சை கேட்டேன். எங்கள் குழு 24 மணி நேரமும் கிடைக்கிறது.",
  },
  te: {
    greeting: "నమస్కారం! నేను DSOUZA AI వాయిస్ అసిస్టెంట్.",
    balance: "మీ ఖాతాలో ఒక లక్ష ఇరవై నాలుగు వేల ఐదు వందల రూపాయలు ఉన్నాయి.",
    loan: "మేము ఎనిమిది దశమాంశం ఐదు శాతం వడ్డీకి గృహ రుణం అందిస్తాము.",
    transfer: "NEFT, RTGS లేదా IMPS ద్వారా నిధులు బదిలీ చేయవచ్చు.",
    default: "నేను మీ మాట విన్నాను. మా బృందం 24 గంటలూ అందుబాటులో ఉంది.",
  },
  bn: {
    greeting: "নমস্কার! আমি DSOUZA AI ভয়েস অ্যাসিস্ট্যান্ট।",
    balance: "আপনার অ্যাকাউন্টে এক লক্ষ চব্বিশ হাজার পাঁচশো টাকা আছে।",
    loan: "আমরা আট দশমিক পাঁচ শতাংশে হোম লোন দিই।",
    transfer: "আপনি NEFT, RTGS বা IMPS এর মাধ্যমে অর্থ স্থানান্তর করতে পারেন।",
    default: "আমি আপনার কথা শুনেছি। আমাদের দল 24 ঘণ্টা উপলব্ধ।",
  },
};

function getVoiceResponse(text: string, lang: string): string {
  const lower = text.toLowerCase();
  const r = VOICE_RESPONSES[lang] || VOICE_RESPONSES['en'];
  if (
    lower.includes('balance') ||
    lower.includes('खाता') ||
    lower.includes('खाते') ||
    lower.includes('ಖಾತೆ') ||
    lower.includes('கணக்கு')
  )
    return r.balance;
  if (
    lower.includes('loan') ||
    lower.includes('कर्ज') ||
    lower.includes('ಸಾಲ') ||
    lower.includes('கடன்')
  )
    return r.loan;
  if (
    lower.includes('transfer') ||
    lower.includes('send') ||
    lower.includes('भेज') ||
    lower.includes('ವರ್ಗಾ') ||
    lower.includes('அனுப்')
  )
    return r.transfer;
  return r.default;
}

type VoiceStatus = 'idle' | 'listening' | 'processing' | 'speaking';

const VoiceAssistantDropdown: React.FC<VoiceAssistantDropdownProps> = ({ isOpen, onClose }) => {
  const { language: appLanguage } = useLanguage();
  const [status, setStatus] = useState<VoiceStatus>('idle');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);

  const langCode = LANG_CODES[appLanguage] || 'en-IN';
  const shortLang = appLanguage || 'en';

  const speak = useCallback(
    (text: string) => {
      if (!window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      setStatus('speaking');
      utterance.onend = () => setStatus('idle');
      utterance.onerror = () => setStatus('idle');
      window.speechSynthesis.speak(utterance);
    },
    [langCode]
  );

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.abort();
      recognitionRef.current = null;
    }
    setStatus('idle');
  }, []);

  const startListening = useCallback(() => {
    setError('');
    setTranscript('');
    setResponse('');

    const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) {
      setError('Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = langCode;
    recognition.interimResults = false;
    recognition.continuous = false;
    recognitionRef.current = recognition;

    recognition.onstart = () => setStatus('listening');

    recognition.onresult = (event: SpeechRecognitionEventLocal) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      setStatus('processing');
      setTimeout(() => {
        const reply = getVoiceResponse(text, shortLang);
        setResponse(reply);
        speak(reply);
      }, 500);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEventLocal) => {
      if (event.error !== 'aborted') {
        setError('Could not understand. Please try again.');
      }
      setStatus('idle');
    };

    recognition.onend = () => {
      setStatus(prev => (prev === 'listening' ? 'idle' : prev));
    };

    recognition.start();
  }, [langCode, shortLang, speak]);

  const handleMicClick = () => {
    if (status === 'listening') {
      stopListening();
    } else if (status === 'speaking') {
      window.speechSynthesis?.cancel();
      setStatus('idle');
    } else {
      startListening();
    }
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  // Cleanup on close
  useEffect(() => {
    if (!isOpen) {
      stopListening();
      window.speechSynthesis?.cancel();
      setStatus('idle');
      setTranscript('');
      setResponse('');
      setError('');
    }
  }, [isOpen, stopListening]);

  if (!isOpen) return null;

  const statusLabel: Record<VoiceStatus, string> = {
    idle: 'Tap mic to speak',
    listening: 'Listening...',
    processing: 'Processing...',
    speaking: 'Speaking...',
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        right: 0,
        width: '300px',
        zIndex: 9999,
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(200,200,220,0.45)',
        boxShadow: '0 8px 40px rgba(75,0,130,0.12), 0 2px 8px rgba(0,0,0,0.07)',
        animation: 'chatPanelSlideDown 0.22s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '12px 16px',
          borderBottom: '1px solid rgba(200,200,220,0.25)',
          background: 'rgba(255,255,255,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(75,0,130,0.15), rgba(100,20,160,0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 10px rgba(75,0,130,0.25)',
            }}
          >
            <Mic size={14} color="#4B0082" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#000000' }}>Voice Assistant</div>
            <div style={{ fontSize: '11px', color: '#111111', opacity: 0.65 }}>
              DSOUZA AI · {appLanguage?.toUpperCase() || 'EN'}
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '6px',
            color: '#111111',
            display: 'flex',
            alignItems: 'center',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.07)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'none')}
          aria-label="Close voice assistant"
        >
          <X size={15} />
        </button>
      </div>

      {/* Main area */}
      <div
        style={{
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        {/* Mic button */}
        <button
          onClick={handleMicClick}
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              status === 'listening'
                ? 'linear-gradient(135deg, #4B0082, #6A0DAD)'
                : status === 'speaking'
                ? 'linear-gradient(135deg, #1a6b3c, #2d9e5f)'
                : 'rgba(255,255,255,0.9)',
            boxShadow:
              status === 'listening'
                ? '0 0 0 0 rgba(75,0,130,0.4)'
                : '0 0 16px rgba(75,0,130,0.2), 0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.2s',
            animation: status === 'listening' ? 'voicePulse 1.5s ease-in-out infinite' : 'none',
          }}
          aria-label={status === 'listening' ? 'Stop listening' : 'Start listening'}
        >
          {status === 'processing' ? (
            <Loader2 size={26} color="#4B0082" style={{ animation: 'spin 1s linear infinite' }} />
          ) : status === 'speaking' ? (
            <Volume2 size={26} color="#ffffff" />
          ) : status === 'listening' ? (
            <MicOff size={26} color="#ffffff" />
          ) : (
            <Mic size={26} color="#4B0082" />
          )}
        </button>

        {/* Status */}
        <div
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color:
              status === 'listening' ? '#4B0082' : status === 'speaking' ? '#1a6b3c' : '#111111',
            letterSpacing: '0.02em',
          }}
        >
          {statusLabel[status]}
        </div>

        {/* Transcript */}
        {transcript && (
          <div
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '10px',
              background: 'rgba(75,0,130,0.06)',
              border: '1px solid rgba(75,0,130,0.15)',
              fontSize: '13px',
              color: '#111111',
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#4B0082',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              You said:
            </span>
            {transcript}
          </div>
        )}

        {/* Response */}
        {response && (
          <div
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(200,200,220,0.35)',
              fontSize: '13px',
              color: '#111111',
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#000000',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              DSOUZA AI:
            </span>
            {response}
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(220,50,50,0.07)',
              border: '1px solid rgba(220,50,50,0.2)',
              fontSize: '12px',
              color: '#c0392b',
            }}
          >
            {error}
          </div>
        )}

        {/* Hint */}
        <div
          style={{
            fontSize: '11px',
            color: '#111111',
            opacity: 0.55,
            textAlign: 'center',
            lineHeight: 1.4,
          }}
        >
          Try: "Check balance", "Apply for loan", "Transfer funds"
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistantDropdown;
