import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.neo': 'NEO',
    'nav.contact': 'Contact',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.marathi': 'मराठी',
    'lang.tamil': 'தமிழ்',
    'lang.telugu': 'తెలుగు',
    'lang.bengali': 'বাংলা',
    
    // Chatbot
    'chatbot.title': 'AI Banking Assistant',
    'chatbot.subtitle': 'Ask me anything about Life-Based Banking',
    'chatbot.placeholder': 'Type your question or click the microphone...',
    'chatbot.listening': 'Listening...',
    'chatbot.speaking': 'Speaking...',
    'chatbot.send': 'Send',
    'chatbot.close': 'Close',
    'chatbot.tooltip': 'Chat with AI Assistant',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.services': 'सेवाएं',
    'nav.about': 'हमारे बारे में',
    'nav.neo': 'NEO',
    'nav.contact': 'संपर्क करें',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.marathi': 'मराठी',
    'lang.tamil': 'தமிழ்',
    'lang.telugu': 'తెలుగు',
    'lang.bengali': 'বাংলা',
    
    // Chatbot
    'chatbot.title': 'एआई बैंकिंग सहायक',
    'chatbot.subtitle': 'लाइफ-बेस्ड बैंकिंग के बारे में मुझसे कुछ भी पूछें',
    'chatbot.placeholder': 'अपना प्रश्न टाइप करें या माइक्रोफ़ोन पर क्लिक करें...',
    'chatbot.listening': 'सुन रहा हूं...',
    'chatbot.speaking': 'बोल रहा हूं...',
    'chatbot.send': 'भेजें',
    'chatbot.close': 'बंद करें',
    'chatbot.tooltip': 'एआई सहायक से चैट करें',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
  },
  mr: {
    // Navigation
    'nav.home': 'मुख्यपृष्ठ',
    'nav.services': 'सेवा',
    'nav.about': 'आमच्याबद्दल',
    'nav.neo': 'NEO',
    'nav.contact': 'संपर्क',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.marathi': 'मराठी',
    'lang.tamil': 'தமிழ்',
    'lang.telugu': 'తెలుగు',
    'lang.bengali': 'বাংলা',
    
    // Chatbot
    'chatbot.title': 'एआय बँकिंग सहाय्यक',
    'chatbot.subtitle': 'लाइफ-बेस्ड बँकिंगबद्दल मला काहीही विचारा',
    'chatbot.placeholder': 'तुमचा प्रश्न टाइप करा किंवा मायक्रोफोनवर क्लिक करा...',
    'chatbot.listening': 'ऐकत आहे...',
    'chatbot.speaking': 'बोलत आहे...',
    'chatbot.send': 'पाठवा',
    'chatbot.close': 'बंद करा',
    'chatbot.tooltip': 'एआय सहाय्यकाशी चॅट करा',
    
    // Common
    'common.loading': 'लोड होत आहे...',
    'common.error': 'त्रुटी',
    'common.success': 'यश',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.services': 'சேவைகள்',
    'nav.about': 'எங்களை பற்றி',
    'nav.neo': 'NEO',
    'nav.contact': 'தொடர்பு',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.marathi': 'मराठी',
    'lang.tamil': 'தமிழ்',
    'lang.telugu': 'తెలుగు',
    'lang.bengali': 'বাংলা',
    
    // Chatbot
    'chatbot.title': 'AI வங்கி உதவியாளர்',
    'chatbot.subtitle': 'வாழ்க்கை அடிப்படையிலான வங்கி பற்றி என்னிடம் கேளுங்கள்',
    'chatbot.placeholder': 'உங்கள் கேள்வியை தட்டச்சு செய்யவும் அல்லது மைக்ரோஃபோனை கிளிக் செய்யவும்...',
    'chatbot.listening': 'கேட்கிறது...',
    'chatbot.speaking': 'பேசுகிறது...',
    'chatbot.send': 'அனுப்பு',
    'chatbot.close': 'மூடு',
    'chatbot.tooltip': 'AI உதவியாளருடன் அரட்டை',
    
    // Common
    'common.loading': 'ஏற்றுகிறது...',
    'common.error': 'பிழை',
    'common.success': 'வெற்றி',
  },
  te: {
    // Navigation
    'nav.home': 'హోమ్',
    'nav.services': 'సేవలు',
    'nav.about': 'మా గురించి',
    'nav.neo': 'NEO',
    'nav.contact': 'సంప్రదించండి',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.marathi': 'मराठी',
    'lang.tamil': 'தமிழ்',
    'lang.telugu': 'తెలుగు',
    'lang.bengali': 'বাংলা',
    
    // Chatbot
    'chatbot.title': 'AI బ్యాంకింగ్ సహాయకుడు',
    'chatbot.subtitle': 'లైఫ్-బేస్డ్ బ్యాంకింగ్ గురించి నన్ను అడగండి',
    'chatbot.placeholder': 'మీ ప్రశ్నను టైప్ చేయండి లేదా మైక్రోఫోన్‌ను క్లిక్ చేయండి...',
    'chatbot.listening': 'వింటోంది...',
    'chatbot.speaking': 'మాట్లాడుతోంది...',
    'chatbot.send': 'పంపండి',
    'chatbot.close': 'మూసివేయండి',
    'chatbot.tooltip': 'AI సహాయకుడితో చాట్ చేయండి',
    
    // Common
    'common.loading': 'లోడ్ అవుతోంది...',
    'common.error': 'లోపం',
    'common.success': 'విజయం',
  },
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.services': 'সেবা',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.neo': 'NEO',
    'nav.contact': 'যোগাযোগ',
    
    // Language names
    'lang.english': 'English',
    'lang.hindi': 'हिंदी',
    'lang.marathi': 'मराठी',
    'lang.tamil': 'தமிழ்',
    'lang.telugu': 'తెలుగు',
    'lang.bengali': 'বাংলা',
    
    // Chatbot
    'chatbot.title': 'AI ব্যাংকিং সহায়ক',
    'chatbot.subtitle': 'লাইফ-বেসড ব্যাংকিং সম্পর্কে আমাকে জিজ্ঞাসা করুন',
    'chatbot.placeholder': 'আপনার প্রশ্ন টাইপ করুন বা মাইক্রোফোনে ক্লিক করুন...',
    'chatbot.listening': 'শুনছি...',
    'chatbot.speaking': 'বলছি...',
    'chatbot.send': 'পাঠান',
    'chatbot.close': 'বন্ধ করুন',
    'chatbot.tooltip': 'AI সহায়কের সাথে চ্যাট করুন',
    
    // Common
    'common.loading': 'লোড হচ্ছে...',
    'common.error': 'ত্রুটি',
    'common.success': 'সফলতা',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('dsouza-bank-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('dsouza-bank-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
