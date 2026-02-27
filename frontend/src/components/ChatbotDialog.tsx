import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { LoadingDots } from './motion/LoadingDots';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type {
  SpeechRecognitionInterface,
  SpeechRecognitionEventLocal,
  SpeechRecognitionErrorEventLocal,
} from '@/lib/speechTypes';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatbotDialog() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Banking Assistant. How can I help you with Life-Based Banking today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const { t } = useLanguage();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      console.warn('Speech recognition not supported in this browser');
      return;
    }

    const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: SpeechRecognitionEventLocal) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEventLocal) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      if (event.error === 'no-speech') {
        toast.error('No speech detected. Please try again.');
      } else if (event.error === 'not-allowed') {
        toast.error('Microphone access denied.');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    synthRef.current = window.speechSynthesis;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('about') && (lowerMessage.includes('dsouza') || lowerMessage.includes('bank'))) {
      return 'DSOUZA BANK is a trusted financial institution pioneering Life-Based Banking. We provide personalized banking solutions tailored to your current life stage, from student life through retirement.';
    } else if (lowerMessage.includes('life') && (lowerMessage.includes('based') || lowerMessage.includes('stage'))) {
      return 'Life-Based Banking is our revolutionary approach that tailors financial solutions to your current life stage. We support you through Student Life, First Job, Family Planning, Business Growth, and Retirement with personalized products and guidance.';
    } else if (lowerMessage.includes('student')) {
      return 'Our Student Life banking solutions include zero-fee accounts, financial literacy resources, student loan guidance, and budgeting tools designed for students and young adults.';
    } else if (lowerMessage.includes('first job') || lowerMessage.includes('career')) {
      return 'Our First Job banking package helps you establish financial independence with career starter accounts, first credit cards, emergency fund planning, and first-time homebuyer support.';
    } else if (lowerMessage.includes('family') || lowerMessage.includes('planning')) {
      return "Our Family Planning solutions include family savings accounts, education fund planning, mortgage solutions, and comprehensive insurance plans to secure your family's future.";
    } else if (lowerMessage.includes('business') || lowerMessage.includes('entrepreneur')) {
      return "Our Business Growth banking provides business loans, merchant services, cash flow management tools, and investment opportunities to support your entrepreneurial journey.";
    } else if (lowerMessage.includes('retirement') || lowerMessage.includes('retire')) {
      return 'Our Retirement services include comprehensive planning, wealth management, estate planning, and senior banking benefits to help you enjoy your golden years.';
    } else if (lowerMessage.includes('neo')) {
      return 'NEO is our innovative digital banking subsidiary that brings Life-Based Banking to your smartphone with life stage-specific insights, smart budgeting, and instant advisor access.';
    } else if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return 'We offer comprehensive Life-Based Banking services organized by life stage: Student Life, First Job, Family Planning, Business Growth, and Retirement. Each stage has personalized solutions for your needs.';
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return 'You can contact us through our Contact page or visit our headquarters. Our team is ready to help you find the right banking solutions for your life stage.';
    } else if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
      return "I can help you with information about Life-Based Banking, our services for different life stages, NEO digital banking, and how to contact us. What would you like to know?";
    } else {
      return "I'm here to help with information about DSOUZA BANK's Life-Based Banking approach. You can ask me about our services for different life stages, NEO digital banking, or how to contact us.";
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const botResponse = getBotResponse(inputValue);

    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      speak(botResponse);
    }, 800);
  };

  const speak = (text: string) => {
    if (!synthRef.current) return;

    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    synthRef.current.speak(utterance);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast.error('Speech recognition is not supported in your browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      if (synthRef.current) {
        synthRef.current.cancel();
        setIsSpeaking(false);
      }

      try {
        recognitionRef.current.start();
        toast.info(t('chatbot.listening'));
      } catch (error) {
        console.error('Error starting recognition:', error);
        toast.error('Could not start voice recognition.');
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[500px]">
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 transition-all duration-base ease-premium ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-br from-primary to-teal text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className="mt-1 text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl bg-muted px-4 py-3">
                <LoadingDots />
              </div>
            </div>
          )}
          {isSpeaking && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Volume2 className={`h-4 w-4 ${prefersReducedMotion ? '' : 'animate-pulse'}`} />
              <span>{t('chatbot.speaking')}</span>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-border/40 p-4">
        <div className="flex gap-2">
          <Button
            variant={isListening ? 'destructive' : 'outline'}
            size="icon"
            onClick={toggleListening}
            className={`transition-all duration-base ease-premium ${isListening && !prefersReducedMotion ? 'animate-pulse' : ''}`}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('chatbot.placeholder')}
            className="flex-1 transition-all duration-base ease-premium focus:ring-2"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="bg-gradient-to-br from-primary to-teal hover:from-primary/90 hover:to-teal/90 premium-button"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
