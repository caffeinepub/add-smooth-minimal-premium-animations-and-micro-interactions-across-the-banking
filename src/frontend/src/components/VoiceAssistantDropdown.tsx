import { ChevronDown, Mic, MicOff, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import type {
  SpeechRecognitionErrorEventLocal,
  SpeechRecognitionEventLocal,
  SpeechRecognitionInterface,
} from "../lib/speechTypes";

const languageCodeMap: Record<string, string> = {
  en: "en-IN",
  hi: "hi-IN",
  mr: "mr-IN",
  ta: "ta-IN",
  te: "te-IN",
  bn: "bn-IN",
};

const greetings: Record<string, string> = {
  en: "Hello! I'm your DSOUZA Bank voice assistant. How can I help you today?",
  hi: "नमस्ते! मैं आपका DSOUZA बैंक वॉयस असिस्टेंट हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
  mr: "नमस्कार! मी तुमचा DSOUZA बँक व्हॉइस असिस्टंट आहे. आज मी तुम्हाला कशी मदत करू शकतो?",
  ta: "வணக்கம்! நான் உங்கள் DSOUZA வங்கி குரல் உதவியாளர். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
  te: "నమస్కారం! నేను మీ DSOUZA బ్యాంక్ వాయిస్ అసిస్టెంట్. ఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
  bn: "নমস্কার! আমি আপনার DSOUZA ব্যাংক ভয়েস অ্যাসিস্ট্যান্ট। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?",
};

export default function VoiceAssistantDropdown() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);

  const hasSpeechRecognition =
    typeof window !== "undefined" &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const startListening = () => {
    if (!hasSpeechRecognition) {
      setError("Speech recognition not supported in this browser.");
      return;
    }
    setError("");
    setTranscript("");
    setResponse("");

    const SpeechRecognitionCtor =
      (window as Window & typeof globalThis).SpeechRecognition ||
      (window as Window & typeof globalThis).webkitSpeechRecognition;

    const recognition: SpeechRecognitionInterface = new SpeechRecognitionCtor();
    recognition.lang = languageCodeMap[language] || "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (e: SpeechRecognitionErrorEventLocal) => {
      setIsListening(false);
      setError(`Error: ${e.error}`);
    };
    recognition.onresult = (e: SpeechRecognitionEventLocal) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      generateResponse(text);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const generateResponse = (text: string) => {
    const lower = text.toLowerCase();
    let reply = greetings[language] || greetings.en;

    if (lower.includes("balance") || lower.includes("account")) {
      reply =
        language === "hi"
          ? "आपका खाता शेष देखने के लिए कृपया नेट बैंकिंग में लॉगिन करें।"
          : "To check your account balance, please log in to net banking or visit your nearest branch.";
    } else if (lower.includes("loan") || lower.includes("emi")) {
      reply =
        language === "hi"
          ? "हमारे लोन उत्पादों के बारे में जानने के लिए सेवाएं पेज देखें।"
          : "Explore our loan products on the Services page. We offer home, personal, and business loans at competitive rates.";
    } else if (lower.includes("branch") || lower.includes("location")) {
      reply =
        language === "hi"
          ? "हमारी शाखाएं पूरे भारत में हैं। संपर्क पेज पर जाएं।"
          : "We have branches across India. Visit our Contact page for the nearest branch location.";
    } else if (lower.includes("help") || lower.includes("support")) {
      reply =
        language === "hi"
          ? "हमारी सहायता टीम 24/7 उपलब्ध है। 1800-XXX-XXXX पर कॉल करें।"
          : "Our support team is available 24/7. Call us at 1800-XXX-XXXX or use the DSOUZA AI chatbot.";
    }

    setResponse(reply);
    speakResponse(reply);
  };

  const speakResponse = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCodeMap[language] || "en-IN";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-xl border transition-all duration-200 text-xs font-bold ${
          isOpen || isListening
            ? "bg-lavender-100 border-lavender-400 text-[#000000] voice-glow"
            : "bg-lavender-50 border-lavender-200/60 text-[#000000] hover:bg-lavender-100 hover:text-[#000000]"
        }`}
        aria-label="Voice Assistant"
        title="Voice Assistant"
      >
        <Mic
          className={`w-3.5 h-3.5 ${isListening ? "text-lavender-600 voice-pulse" : "text-[#1A1A1A]"}`}
        />
        <span className="text-[#000000] font-bold">Voice</span>
        <ChevronDown
          className={`w-3 h-3 text-[#1A1A1A] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 glass-strong rounded-2xl shadow-soft-lg border border-lavender-200/60 z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-lavender-200/40 bg-lavender-50/60">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isListening ? "bg-red-500 animate-pulse" : isSpeaking ? "bg-green-500 animate-pulse" : "bg-lavender-400"}`}
              />
              <span className="text-xs font-bold text-[#000000]">
                Voice Assistant
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-lavender-100 text-[#1A1A1A] hover:text-[#000000] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={isListening ? stopListening : startListening}
                disabled={!hasSpeechRecognition}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isListening
                    ? "bg-red-50 border border-red-200 text-red-700 hover:bg-red-100"
                    : "bg-lavender-600 text-white hover:bg-lavender-700 shadow-soft hover:shadow-glow"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isListening ? (
                  <>
                    <MicOff className="w-3.5 h-3.5" />
                    <span>Stop</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-3.5 h-3.5" />
                    <span>Speak</span>
                  </>
                )}
              </button>

              {isSpeaking && (
                <button
                  type="button"
                  onClick={stopSpeaking}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold hover:bg-amber-100 transition-colors"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                </button>
              )}
              {!isSpeaking && response && (
                <button
                  type="button"
                  onClick={() => speakResponse(response)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-xs font-bold hover:bg-green-100 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status */}
            {isListening && (
              <div className="flex items-center gap-2 px-3 py-2 bg-red-50 rounded-xl border border-red-100">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-medium text-red-700">
                  Listening...
                </span>
              </div>
            )}

            {/* Transcript */}
            {transcript && (
              <div className="px-3 py-2 bg-lavender-50 rounded-xl border border-lavender-200/60">
                <p className="text-[10px] font-semibold text-[#1A1A1A] mb-1">
                  You said:
                </p>
                <p className="text-xs text-[#000000] font-medium">
                  {transcript}
                </p>
              </div>
            )}

            {/* Response */}
            {response && (
              <div className="px-3 py-2 bg-white rounded-xl border border-lavender-200/60 shadow-soft">
                <p className="text-[10px] font-semibold text-[#1A1A1A] mb-1">
                  Response:
                </p>
                <p className="text-xs text-[#000000] leading-relaxed">
                  {response}
                </p>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="px-3 py-2 bg-red-50 rounded-xl border border-red-100">
                <p className="text-xs text-red-700 font-medium">{error}</p>
              </div>
            )}

            {/* Hint */}
            {!transcript && !response && !isListening && (
              <p className="text-[10px] text-[#333333] text-center font-medium">
                Tap "Speak" and ask about accounts, loans, branches, or support.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
