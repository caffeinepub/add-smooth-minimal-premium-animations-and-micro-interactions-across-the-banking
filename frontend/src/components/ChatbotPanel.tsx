import React, { useState, useRef, useEffect } from 'react';
import { X, ToggleLeft, ToggleRight, ChevronDown, Send } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

// Local language type for chatbot (includes Kannada which is not in app Language type)
type ChatLang = 'en' | 'hi' | 'mr' | 'kn' | 'ta';

const LANGUAGES: { code: ChatLang; label: string; name: string }[] = [
  { code: 'en', label: 'English', name: 'English' },
  { code: 'hi', label: 'हिंदी', name: 'Hindi' },
  { code: 'mr', label: 'मराठी', name: 'Marathi' },
  { code: 'kn', label: 'ಕನ್ನಡ', name: 'Kannada' },
  { code: 'ta', label: 'தமிழ்', name: 'Tamil' },
];

const RESPONSES: Record<ChatLang, Record<string, string>> = {
  en: {
    greeting: "Hello! I'm DSOUZA AI, your intelligent banking assistant. How can I help you today?",
    balance: "Your current account balance is ₹1,24,500. Savings account: ₹85,200. Fixed deposits: ₹2,50,000.",
    loan: "We offer Home Loans at 8.5% p.a., Personal Loans at 10.5% p.a., and Education Loans at 9% p.a. Would you like to apply?",
    transfer: "You can transfer funds via NEFT, RTGS, or IMPS. Daily limit is ₹10 lakhs. Shall I initiate a transfer?",
    default: "I understand your query. Our banking experts are available 24/7. Is there anything specific I can help you with?",
  },
  hi: {
    greeting: "नमस्ते! मैं DSOUZA AI हूं, आपका बैंकिंग सहायक। आज मैं आपकी कैसे मदद कर सकता हूं?",
    balance: "आपके खाते में ₹1,24,500 हैं। बचत खाता: ₹85,200। सावधि जमा: ₹2,50,000।",
    loan: "हम 8.5% पर होम लोन, 10.5% पर पर्सनल लोन और 9% पर एजुकेशन लोन देते हैं।",
    transfer: "आप NEFT, RTGS या IMPS से पैसे भेज सकते हैं। दैनिक सीमा ₹10 लाख है।",
    default: "मैं आपकी बात समझता हूं। हमारे विशेषज्ञ 24/7 उपलब्ध हैं।",
  },
  mr: {
    greeting: "नमस्कार! मी DSOUZA AI आहे, तुमचा बँकिंग सहाय्यक. आज मी तुम्हाला कशी मदत करू?",
    balance: "तुमच्या खात्यात ₹1,24,500 आहेत. बचत खाते: ₹85,200. मुदत ठेव: ₹2,50,000.",
    loan: "आम्ही 8.5% वर गृहकर्ज, 10.5% वर वैयक्तिक कर्ज देतो.",
    transfer: "तुम्ही NEFT, RTGS किंवा IMPS द्वारे पैसे पाठवू शकता.",
    default: "मी तुमची विनंती समजतो. आमचे तज्ञ 24/7 उपलब्ध आहेत.",
  },
  kn: {
    greeting: "ನಮಸ್ಕಾರ! ನಾನು DSOUZA AI, ನಿಮ್ಮ ಬ್ಯಾಂಕಿಂಗ್ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
    balance: "ನಿಮ್ಮ ಖಾತೆಯಲ್ಲಿ ₹1,24,500 ಇದೆ. ಉಳಿತಾಯ: ₹85,200. ಸ್ಥಿರ ಠೇವಣಿ: ₹2,50,000.",
    loan: "ನಾವು 8.5% ದರದಲ್ಲಿ ಗೃಹ ಸಾಲ, 10.5% ದರದಲ್ಲಿ ವೈಯಕ್ತಿಕ ಸಾಲ ನೀಡುತ್ತೇವೆ.",
    transfer: "ನೀವು NEFT, RTGS ಅಥವಾ IMPS ಮೂಲಕ ಹಣ ವರ್ಗಾಯಿಸಬಹುದು.",
    default: "ನಾನು ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ನಮ್ಮ ತಜ್ಞರು 24/7 ಲಭ್ಯ.",
  },
  ta: {
    greeting: "வணக்கம்! நான் DSOUZA AI, உங்கள் வங்கி உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவலாம்?",
    balance: "உங்கள் கணக்கில் ₹1,24,500 உள்ளது. சேமிப்பு: ₹85,200. நிலையான வைப்பு: ₹2,50,000.",
    loan: "நாங்கள் 8.5% வீட்டு கடன், 10.5% தனிநபர் கடன் வழங்குகிறோம்.",
    transfer: "NEFT, RTGS அல்லது IMPS மூலம் பணம் அனுப்பலாம்.",
    default: "உங்கள் கேள்வியை புரிந்துகொண்டேன். எங்கள் நிபுணர்கள் 24/7 கிடைக்கிறார்கள்.",
  },
};

function getBotResponse(input: string, lang: ChatLang): string {
  const lower = input.toLowerCase();
  const r = RESPONSES[lang];
  if (lower.includes('balance') || lower.includes('खाता') || lower.includes('खाते') || lower.includes('ಖಾತೆ') || lower.includes('கணக்கு')) return r.balance;
  if (lower.includes('loan') || lower.includes('कर्ज') || lower.includes('ಸಾಲ') || lower.includes('கடன்')) return r.loan;
  if (lower.includes('transfer') || lower.includes('send') || lower.includes('भेज') || lower.includes('ವರ್ಗಾ') || lower.includes('அனுப்')) return r.transfer;
  return r.default;
}

const PLACEHOLDERS: Record<ChatLang, string> = {
  en: 'Type a message...',
  hi: 'संदेश लिखें...',
  mr: 'संदेश लिहा...',
  kn: 'ಸಂದೇಶ ಬರೆಯಿರಿ...',
  ta: 'செய்தி எழுதுங்கள்...',
};

const ChatbotPanel: React.FC<ChatbotPanelProps> = ({ isOpen, onClose }) => {
  const [chatLang, setChatLang] = useState<ChatLang>('en');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [seniorMode, setSeniorMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [langDropOpen, setLangDropOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const effectiveFontSize = seniorMode ? 'lg' : fontSize;

  const fontSizeMap: Record<'sm' | 'md' | 'lg', string> = {
    sm: '12px',
    md: '14px',
    lg: '16px',
  };

  const effectiveFontPx = fontSizeMap[effectiveFontSize];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          text: RESPONSES[chatLang].greeting,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const botText = getBotResponse(userMsg.text, chatLang);
      setMessages(prev => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: 'assistant', text: botText, timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const changeLang = (code: ChatLang) => {
    setChatLang(code);
    setLangDropOpen(false);
    setMessages([{ id: Date.now().toString(), role: 'assistant', text: RESPONSES[code].greeting, timestamp: new Date() }]);
  };

  const currentLang = LANGUAGES.find(l => l.code === chatLang) || LANGUAGES[0];

  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="chatbot-panel-container"
      style={{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        right: 0,
        width: '380px',
        maxHeight: '560px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        border: '1px solid rgba(200,200,220,0.45)',
        boxShadow: '0 8px 40px rgba(60,60,120,0.13), 0 2px 8px rgba(0,0,0,0.07)',
        animation: 'chatPanelSlideDown 0.22s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '14px 16px 12px',
          borderBottom: '1px solid rgba(200,200,220,0.3)',
          background: 'rgba(255,255,255,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src="/assets/generated/chatbot-icon-transparent.dim_64x64.png"
            alt="DSOUZA AI"
            style={{ width: '28px', height: '28px', objectFit: 'contain' }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#000000', letterSpacing: '0.02em' }}>
              DSOUZA AI
            </div>
            <div style={{ fontSize: '11px', color: '#111111', opacity: 0.7 }}>Intelligent Banking Assistant</div>
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
          aria-label="Close chatbot"
        >
          <X size={16} />
        </button>
      </div>

      {/* Controls bar */}
      <div
        style={{
          padding: '8px 16px',
          borderBottom: '1px solid rgba(200,200,220,0.2)',
          background: 'rgba(248,248,255,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        {/* Language selector */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setLangDropOpen(v => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '6px',
              border: '1px solid rgba(100,100,180,0.25)',
              background: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              fontSize: '12px',
              color: '#111111',
              fontWeight: 500,
              transition: 'all 0.15s',
            }}
          >
            {currentLang.label}
            <ChevronDown size={12} />
          </button>
          {langDropOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(200,200,220,0.4)',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                zIndex: 10,
                minWidth: '130px',
                overflow: 'hidden',
              }}
            >
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => changeLang(l.code)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 12px',
                    background: chatLang === l.code ? 'rgba(75,0,130,0.08)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: '#111111',
                    fontWeight: chatLang === l.code ? 600 : 400,
                    transition: 'background 0.12s',
                  }}
                  onMouseEnter={e => { if (chatLang !== l.code) (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.04)'; }}
                  onMouseLeave={e => { if (chatLang !== l.code) (e.currentTarget as HTMLElement).style.background = 'none'; }}
                >
                  {l.label} <span style={{ opacity: 0.6, fontSize: '11px' }}>({l.name})</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Font size */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '11px', color: '#111111', opacity: 0.7, marginRight: '2px' }}>A</span>
          {(['sm', 'md', 'lg'] as const).map(s => (
            <button
              key={s}
              onClick={() => setFontSize(s)}
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '4px',
                border: fontSize === s && !seniorMode ? '1.5px solid rgba(75,0,130,0.5)' : '1px solid rgba(150,150,180,0.3)',
                background: fontSize === s && !seniorMode ? 'rgba(75,0,130,0.08)' : 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontSize: s === 'sm' ? '9px' : s === 'md' ? '11px' : '13px',
                color: '#111111',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.12s',
              }}
            >
              A
            </button>
          ))}
        </div>

        {/* Senior Mode */}
        <button
          onClick={() => setSeniorMode(v => !v)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 8px',
            borderRadius: '6px',
            border: seniorMode ? '1.5px solid rgba(75,0,130,0.5)' : '1px solid rgba(150,150,180,0.3)',
            background: seniorMode ? 'rgba(75,0,130,0.1)' : 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            fontSize: '11px',
            color: '#111111',
            fontWeight: seniorMode ? 600 : 400,
            transition: 'all 0.15s',
          }}
        >
          {seniorMode ? <ToggleRight size={14} color="#4B0082" /> : <ToggleLeft size={14} />}
          Senior
        </button>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          minHeight: '200px',
          maxHeight: '300px',
          fontSize: effectiveFontPx,
        }}
      >
        {messages.map(msg => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div
              style={{
                maxWidth: '82%',
                padding: seniorMode ? '10px 14px' : '8px 12px',
                borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                background: msg.role === 'user'
                  ? 'linear-gradient(135deg, rgba(75,0,130,0.85), rgba(100,20,160,0.9))'
                  : 'rgba(255,255,255,0.85)',
                color: msg.role === 'user' ? '#ffffff' : '#111111',
                fontSize: 'inherit',
                lineHeight: 1.5,
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                border: msg.role === 'assistant' ? '1px solid rgba(200,200,220,0.3)' : 'none',
                fontWeight: seniorMode ? 500 : 400,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div
              style={{
                padding: '8px 14px',
                borderRadius: '14px 14px 14px 4px',
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(200,200,220,0.3)',
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#4B0082',
                    opacity: 0.6,
                    animation: `typingDot 1.2s ${i * 0.2}s infinite`,
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        style={{
          padding: '10px 14px',
          borderTop: '1px solid rgba(200,200,220,0.25)',
          background: 'rgba(248,248,255,0.6)',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDERS[chatLang]}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '10px',
            border: '1px solid rgba(150,150,200,0.3)',
            background: 'rgba(255,255,255,0.8)',
            fontSize: effectiveFontPx,
            color: '#111111',
            outline: 'none',
            transition: 'border-color 0.15s',
          }}
          onFocus={e => ((e.target as HTMLInputElement).style.borderColor = 'rgba(75,0,130,0.4)')}
          onBlur={e => ((e.target as HTMLInputElement).style.borderColor = 'rgba(150,150,200,0.3)')}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            border: 'none',
            background: input.trim() ? 'linear-gradient(135deg, #4B0082, #6A0DAD)' : 'rgba(150,150,180,0.3)',
            color: input.trim() ? '#ffffff' : '#888',
            cursor: input.trim() ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s',
            flexShrink: 0,
          }}
          aria-label="Send message"
        >
          <Send size={15} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotPanel;
