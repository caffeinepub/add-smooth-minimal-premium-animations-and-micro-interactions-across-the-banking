// Shared Web Speech API type declarations
// Single source of truth to avoid duplicate global augmentations across components.

export interface SpeechRecognitionAlternativeLocal {
  transcript: string;
  confidence: number;
}

export interface SpeechRecognitionResultLocal {
  length: number;
  item(index: number): SpeechRecognitionAlternativeLocal;
  [index: number]: SpeechRecognitionAlternativeLocal;
  isFinal: boolean;
}

export interface SpeechRecognitionResultListLocal {
  length: number;
  item(index: number): SpeechRecognitionResultLocal;
  [index: number]: SpeechRecognitionResultLocal;
}

export interface SpeechRecognitionEventLocal extends Event {
  results: SpeechRecognitionResultListLocal;
  resultIndex: number;
}

export interface SpeechRecognitionErrorEventLocal extends Event {
  error: string;
  message: string;
}

export interface SpeechRecognitionInterface extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: ((this: SpeechRecognitionInterface, ev: Event) => void) | null;
  onresult: ((this: SpeechRecognitionInterface, ev: SpeechRecognitionEventLocal) => void) | null;
  onerror: ((this: SpeechRecognitionInterface, ev: SpeechRecognitionErrorEventLocal) => void) | null;
  onend: ((this: SpeechRecognitionInterface, ev: Event) => void) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInterface;
    webkitSpeechRecognition: new () => SpeechRecognitionInterface;
  }
}
