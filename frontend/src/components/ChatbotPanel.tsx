import { useState, useRef, useEffect } from "react";
import { X, Bot, Send, Minus, Plus, ToggleLeft, ToggleRight, ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface ChatbotPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type ChatLang = "en" | "hi" | "mr" | "kn" | "ta";
type ChatFontSize = "small" | "medium" | "large";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: Date;
}

const LANG_LABELS: Record<ChatLang, string> = {
  en: "English",
  hi: "हिंदी",
  mr: "मराठी",
  kn: "ಕನ್ನಡ",
  ta: "தமிழ்",
};

const GREETINGS: Record<ChatLang, string> = {
  en: "Hello! I'm DSOUZA AI, your personal banking assistant. How can I help you today?",
  hi: "नमस्ते! मैं DSOUZA AI हूँ, आपका व्यक्तिगत बैंकिंग सहायक। आज मैं आपकी कैसे मदद कर सकता हूँ?",
  mr: "नमस्कार! मी DSOUZA AI आहे, तुमचा वैयक्तिक बँकिंग सहाय्यक. आज मी तुम्हाला कशी मदत करू शकतो?",
  kn: "ನಮಸ್ಕಾರ! ನಾನು DSOUZA AI, ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಬ್ಯಾಂಕಿಂಗ್ ಸಹಾಯಕ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
  ta: "வணக்கம்! நான் DSOUZA AI, உங்கள் தனிப்பட்ட வங்கி உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவலாம்?",
};

const RESPONSES: Record<ChatLang, Record<string, string>> = {
  en: {
    default: "Thank you for your message. Our team will assist you shortly. For urgent matters, please call our 24/7 helpline.",
    balance: "To check your account balance, please log in to your DSOUZA BANK account or visit the nearest branch.",
    loan: "We offer home loans, personal loans, and business loans at competitive rates. Would you like to know more?",
    transfer: "You can transfer funds via NEFT, RTGS, or IMPS through our secure online banking portal.",
    help: "I can help you with account information, loans, transfers, and more. What do you need?",
  },
  hi: {
    default: "आपके संदेश के लिए धन्यवाद। हमारी टीम जल्द ही आपकी सहायता करेगी।",
    balance: "अपना खाता शेष जांचने के लिए, कृपया अपने DSOUZA BANK खाते में लॉग इन करें।",
    loan: "हम प्रतिस्पर्धी दरों पर होम लोन, पर्सनल लोन और बिजनेस लोन प्रदान करते हैं।",
    transfer: "आप हमारे सुरक्षित ऑनलाइन बैंकिंग पोर्टल के माध्यम से NEFT, RTGS या IMPS द्वारा फंड ट्रांसफर कर सकते हैं।",
    help: "मैं खाता जानकारी, ऋण, स्थानांतरण और अधिक में आपकी सहायता कर सकता हूँ।",
  },
  mr: {
    default: "आपल्या संदेशाबद्दल धन्यवाद. आमची टीम लवकरच आपल्याला मदत करेल.",
    balance: "आपल्या खात्याची शिल्लक तपासण्यासाठी, कृपया आपल्या DSOUZA BANK खात्यात लॉग इन करा.",
    loan: "आम्ही स्पर्धात्मक दरांवर गृहकर्ज, वैयक्तिक कर्ज आणि व्यवसाय कर्ज देतो.",
    transfer: "आपण आमच्या सुरक्षित ऑनलाइन बँकिंग पोर्टलद्वारे NEFT, RTGS किंवा IMPS द्वारे निधी हस्तांतरित करू शकता.",
    help: "मी खाते माहिती, कर्ज, हस्तांतरण आणि अधिकमध्ये मदत करू शकतो.",
  },
  kn: {
    default: "ನಿಮ್ಮ ಸಂದೇಶಕ್ಕೆ ಧನ್ಯವಾದಗಳು. ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    balance: "ನಿಮ್ಮ ಖಾತೆ ಬ್ಯಾಲೆನ್ಸ್ ಪರಿಶೀಲಿಸಲು, ದಯವಿಟ್ಟು ನಿಮ್ಮ DSOUZA BANK ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ.",
    loan: "ನಾವು ಸ್ಪರ್ಧಾತ್ಮಕ ದರಗಳಲ್ಲಿ ಗೃಹ ಸಾಲ, ವೈಯಕ್ತಿಕ ಸಾಲ ಮತ್ತು ವ್ಯಾಪಾರ ಸಾಲ ನೀಡುತ್ತೇವೆ.",
    transfer: "ನೀವು ನಮ್ಮ ಸುರಕ್ಷಿತ ಆನ್‌ಲೈನ್ ಬ್ಯಾಂಕಿಂಗ್ ಪೋರ್ಟಲ್ ಮೂಲಕ NEFT, RTGS ಅಥವಾ IMPS ಮೂಲಕ ಹಣ ವರ್ಗಾಯಿಸಬಹುದು.",
    help: "ನಾನು ಖಾತೆ ಮಾಹಿತಿ, ಸಾಲ, ವರ್ಗಾವಣೆ ಮತ್ತು ಹೆಚ್ಚಿನದರಲ್ಲಿ ಸಹಾಯ ಮಾಡಬಲ್ಲೆ.",
  },
  ta: {
    default: "உங்கள் செய்திக்கு நன்றி. எங்கள் குழு விரைவில் உங்களுக்கு உதவும்.",
    balance: "உங்கள் கணக்கு இருப்பை சரிபார்க்க, உங்கள் DSOUZA BANK கணக்கில் உள்நுழையவும்.",
    loan: "நாங்கள் போட்டி விகிதங்களில் வீட்டு கடன், தனிப்பட்ட கடன் மற்றும் வணிக கடன் வழங்குகிறோம்.",
    transfer: "நீங்கள் எங்கள் பாதுகாப்பான ஆன்லைன் வங்கி போர்டல் மூலம் NEFT, RTGS அல்லது IMPS மூலம் நிதி மாற்றலாம்.",
    help: "நான் கணக்கு தகவல், கடன்கள், பரிமாற்றங்கள் மற்றும் பலவற்றில் உதவ முடியும்.",
  },
};

function getBotResponse(text: string, lang: ChatLang): string {
  const lower = text.toLowerCase();
  const responses = RESPONSES[lang];
  if (lower.includes("balance") || lower.includes("शेष") || lower.includes("शिल्लक") || lower.includes("ಬ್ಯಾಲೆನ್ಸ್") || lower.includes("இருப்பு")) return responses.balance;
  if (lower.includes("loan") || lower.includes("ऋण") || lower.includes("कर्ज") || lower.includes("ಸಾಲ") || lower.includes("கடன்")) return responses.loan;
  if (lower.includes("transfer") || lower.includes("ट्रांसफर") || lower.includes("हस्तांतरण") || lower.includes("ವರ್ಗಾವಣೆ") || lower.includes("மாற்றம்")) return responses.transfer;
  if (lower.includes("help") || lower.includes("मदद") || lower.includes("मदत") || lower.includes("ಸಹಾಯ") || lower.includes("உதவி")) return responses.help;
  return responses.default;
}

const FONT_SIZE_CLASS: Record<ChatFontSize, string> = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-base",
};

export default function ChatbotPanel({ isOpen, onClose }: ChatbotPanelProps) {
  const { language } = useLanguage();
  const [chatLang, setChatLang] = useState<ChatLang>("en");
  const [chatFontSize, setChatFontSize] = useState<ChatFontSize>("medium");
  const [seniorMode, setSeniorMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync language from app context
  useEffect(() => {
    const map: Record<string, ChatLang> = { en: "en", hi: "hi", mr: "mr", kn: "kn", ta: "ta" };
    if (map[language]) setChatLang(map[language] as ChatLang);
  }, [language]);

  // Initialize greeting when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: "greeting",
        role: "bot",
        text: GREETINGS[chatLang],
        timestamp: new Date(),
      }]);
    }
  }, [isOpen]);

  // Update greeting when language changes
  useEffect(() => {
    if (messages.length > 0 && messages[0].id === "greeting") {
      setMessages(prev => [{ ...prev[0], text: GREETINGS[chatLang] }, ...prev.slice(1)]);
    }
  }, [chatLang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: getBotResponse(trimmed, chatLang),
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const effectiveFontSize: ChatFontSize = seniorMode ? "large" : chatFontSize;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel - slides in from right */}
      <div
        className="fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 flex flex-col"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderLeft: "1px solid rgba(99,102,241,0.15)",
          boxShadow: "-8px 0 40px rgba(99,102,241,0.12)",
          animation: "chatPanelSlideIn 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: "rgba(99,102,241,0.15)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#000000] leading-tight">DSOUZA AI</h2>
              <p className="text-[10px] text-[#111111] leading-tight">Banking Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-lavender-50 transition-colors"
            aria-label="Close chatbot"
          >
            <X size={16} className="text-[#111111]" />
          </button>
        </div>

        {/* Controls Bar */}
        <div
          className="flex items-center gap-3 px-5 py-3 border-b flex-wrap"
          style={{ borderColor: "rgba(99,102,241,0.1)", background: "rgba(248,247,255,0.8)" }}
        >
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[#111111] text-xs font-medium hover:bg-white transition-colors"
              style={{ borderColor: "rgba(99,102,241,0.2)" }}
            >
              <span>{LANG_LABELS[chatLang]}</span>
              <ChevronDown size={12} />
            </button>
            {langMenuOpen && (
              <div className="absolute top-9 left-0 bg-white border border-lavender-200 rounded-xl shadow-lg p-1 z-10 min-w-[120px]">
                {(Object.keys(LANG_LABELS) as ChatLang[]).map((code) => (
                  <button
                    key={code}
                    onClick={() => { setChatLang(code); setLangMenuOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs text-[#111111] hover:bg-lavender-50 transition-colors ${chatLang === code ? "bg-indigo-50 font-semibold text-indigo-700" : ""}`}
                  >
                    {LANG_LABELS[code]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Font Size */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setChatFontSize("small")}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${chatFontSize === "small" && !seniorMode ? "bg-indigo-100 text-indigo-700" : "text-[#111111] hover:bg-lavender-50"}`}
              title="Small font"
            >A</button>
            <button
              onClick={() => setChatFontSize("medium")}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${chatFontSize === "medium" && !seniorMode ? "bg-indigo-100 text-indigo-700" : "text-[#111111] hover:bg-lavender-50"}`}
              title="Medium font"
            >A</button>
            <button
              onClick={() => setChatFontSize("large")}
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-base font-bold transition-colors ${chatFontSize === "large" && !seniorMode ? "bg-indigo-100 text-indigo-700" : "text-[#111111] hover:bg-lavender-50"}`}
              title="Large font"
            >A</button>
          </div>

          {/* Senior Mode */}
          <button
            onClick={() => setSeniorMode(!seniorMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${seniorMode ? "bg-indigo-100 border-indigo-300 text-indigo-700" : "border-lavender-200 text-[#111111] hover:bg-lavender-50"}`}
          >
            {seniorMode ? <ToggleRight size={14} /> : <ToggleLeft size={14} />}
            Senior
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "bot" && (
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <Bot size={14} className="text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${FONT_SIZE_CLASS[effectiveFontSize]} ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white rounded-tr-sm"
                    : "bg-white text-[#111111] rounded-tl-sm border"
                }`}
                style={msg.role === "bot" ? { borderColor: "rgba(99,102,241,0.15)", boxShadow: "0 1px 4px rgba(99,102,241,0.08)" } : {}}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                <Bot size={14} className="text-white" />
              </div>
              <div
                className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white border"
                style={{ borderColor: "rgba(99,102,241,0.15)" }}
              >
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="px-5 py-4 border-t"
          style={{ borderColor: "rgba(99,102,241,0.15)", background: "rgba(248,247,255,0.8)" }}
        >
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={chatLang === "en" ? "Type your message..." : chatLang === "hi" ? "अपना संदेश लिखें..." : chatLang === "mr" ? "तुमचा संदेश लिहा..." : chatLang === "kn" ? "ನಿಮ್ಮ ಸಂದೇಶ ಟೈಪ್ ಮಾಡಿ..." : "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்..."}
              className={`flex-1 px-4 py-2.5 rounded-xl border text-[#111111] bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all ${FONT_SIZE_CLASS[effectiveFontSize]}`}
              style={{ borderColor: "rgba(99,102,241,0.2)" }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 flex-shrink-0"
              aria-label="Send message"
            >
              <Send size={16} className="text-white" />
            </button>
          </div>
          <p className="text-[10px] text-[#111111] mt-2 text-center opacity-60">
            DSOUZA AI · Powered by DSOUZA BANK
          </p>
        </div>
      </div>
    </>
  );
}
