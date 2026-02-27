import { useLanguage } from "../contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिंदी" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-lavender-50 border border-lavender-200/60 text-[#000000] hover:bg-lavender-100 hover:text-[#000000] transition-all duration-200 text-xs font-bold"
          aria-label="Select language"
        >
          <Globe className="w-3.5 h-3.5 text-[#1A1A1A]" />
          <span className="text-[#000000] font-bold">{currentLang.code.toUpperCase()}</span>
          <ChevronDown className="w-3 h-3 text-[#1A1A1A]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 bg-white/95 backdrop-blur-md border-lavender-200/60 shadow-soft-md">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as "en" | "hi" | "mr" | "ta" | "te" | "bn")}
            className={`flex items-center justify-between cursor-pointer text-[#1A1A1A] hover:text-[#000000] ${
              language === lang.code ? "bg-lavender-50 font-semibold text-[#000000]" : ""
            }`}
          >
            <span className="text-sm font-medium text-[#1A1A1A]">{lang.native}</span>
            <span className="text-xs text-[#333333] font-medium">{lang.code.toUpperCase()}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
