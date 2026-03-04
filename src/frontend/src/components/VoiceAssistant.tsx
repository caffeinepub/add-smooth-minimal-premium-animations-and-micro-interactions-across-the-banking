import { Button } from "@/components/ui/button";
import type {
  SpeechRecognitionErrorEventLocal,
  SpeechRecognitionEventLocal,
  SpeechRecognitionInterface,
} from "@/lib/speechTypes";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

interface VoiceAssistantProps {
  className?: string;
}

export default function VoiceAssistant({
  className = "",
}: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<SpeechRecognitionInterface | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      console.warn("Speech recognition not supported in this browser");
      return;
    }

    const SpeechRecognitionCtor =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: SpeechRecognitionEventLocal) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      handleVoiceCommand(result);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEventLocal) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
      if (event.error === "no-speech") {
        toast.error("No speech detected. Please try again.");
      } else if (event.error === "not-allowed") {
        toast.error(
          "Microphone access denied. Please enable microphone permissions.",
        );
      } else {
        toast.error("Speech recognition error. Please try again.");
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

  const handleVoiceCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    let response = "";

    if (
      lowerCommand.includes("about") &&
      (lowerCommand.includes("dsouza") || lowerCommand.includes("bank"))
    ) {
      response =
        "DSOUZA BANK is a trusted financial institution pioneering Life-Based Banking. We provide personalized banking solutions tailored to your current life stage, from student life through retirement.";
    } else if (
      lowerCommand.includes("life") &&
      (lowerCommand.includes("based") || lowerCommand.includes("stage"))
    ) {
      response =
        "Life-Based Banking tailors financial solutions to your current life stage — student, first job, family planning, business growth, or retirement.";
    } else if (lowerCommand.includes("student")) {
      response =
        "Our Student Life banking solutions include zero-fee accounts, financial literacy resources, student loan guidance, and budgeting tools.";
    } else if (
      lowerCommand.includes("first job") ||
      lowerCommand.includes("career")
    ) {
      response =
        "Our First Job banking package helps you establish financial independence with career starter accounts, first credit cards, and emergency fund planning.";
    } else if (
      lowerCommand.includes("family") ||
      lowerCommand.includes("planning")
    ) {
      response =
        "Our Family Planning solutions include family savings accounts, education fund planning, mortgage solutions, and comprehensive insurance plans.";
    } else if (
      lowerCommand.includes("business") ||
      lowerCommand.includes("entrepreneur")
    ) {
      response =
        "Our Business Growth banking provides business loans, merchant services, cash flow management tools, and investment opportunities.";
    } else if (
      lowerCommand.includes("retirement") ||
      lowerCommand.includes("retire")
    ) {
      response =
        "Our Retirement services include comprehensive planning, wealth management, estate planning, and senior banking benefits.";
    } else if (lowerCommand.includes("neo")) {
      response =
        "NEO is our innovative digital banking subsidiary bringing Life-Based Banking to your smartphone with life stage-specific insights and smart budgeting.";
    } else if (
      lowerCommand.includes("service") ||
      lowerCommand.includes("offer")
    ) {
      response =
        "We offer Life-Based Banking services for Student Life, First Job, Family Planning, Business Growth, and Retirement — each with personalized solutions.";
    } else if (
      lowerCommand.includes("contact") ||
      lowerCommand.includes("reach")
    ) {
      response =
        "You can contact us through our Contact page or visit our headquarters. Our team is ready to help you.";
    } else if (
      lowerCommand.includes("help") ||
      lowerCommand.includes("assist")
    ) {
      response =
        "I can help with Life-Based Banking information, our services for different life stages, NEO digital banking, and how to contact us.";
    } else {
      response =
        "I'm here to help with DSOUZA BANK's Life-Based Banking. Ask me about our services, NEO digital banking, or how to contact us.";
    }

    if (response) {
      speak(response);
    }
  };

  const speak = (text: string) => {
    if (!synthRef.current) return;

    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast.error("Speech recognition is not supported in your browser.");
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
        toast.info("Listening...");
      } catch (error) {
        console.error("Error starting recognition:", error);
        toast.error("Could not start voice recognition.");
      }
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <Button
        variant={isListening ? "destructive" : "outline"}
        size="icon"
        onClick={toggleListening}
        className={`h-12 w-12 rounded-full transition-all ${isListening ? "animate-pulse" : ""}`}
        aria-label={isListening ? "Stop listening" : "Start voice assistant"}
      >
        {isListening ? (
          <MicOff className="h-5 w-5" />
        ) : (
          <Mic className="h-5 w-5" />
        )}
      </Button>

      {transcript && (
        <p className="text-sm text-center max-w-xs text-[#000000]">
          <span className="font-medium text-[#000000]">You said: </span>
          {transcript}
        </p>
      )}

      {isSpeaking && (
        <div className="flex items-center gap-2 text-sm text-[#000000]">
          <Volume2 className="h-4 w-4 animate-pulse" />
          <span>Speaking...</span>
        </div>
      )}
    </div>
  );
}
