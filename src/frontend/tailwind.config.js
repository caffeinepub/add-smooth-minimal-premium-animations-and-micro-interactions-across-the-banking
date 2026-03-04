/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "oklch(var(--success) / <alpha-value>)",
          foreground: "oklch(var(--success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "oklch(var(--warning) / <alpha-value>)",
          foreground: "oklch(var(--warning-foreground) / <alpha-value>)",
        },
        // Lavender palette tokens
        lavender: {
          50: "oklch(98% 0.008 280)",
          100: "oklch(96% 0.012 280)",
          200: "oklch(92% 0.02 280)",
          300: "oklch(85% 0.04 280)",
          400: "oklch(75% 0.08 280)",
          500: "oklch(60% 0.14 280)",
          600: "oklch(50% 0.18 280)",
          700: "oklch(40% 0.18 280)",
          800: "oklch(30% 0.15 280)",
          900: "oklch(20% 0.10 280)",
        },
        // High-contrast text tokens
        ink: {
          DEFAULT: "#000000",
          dark: "#1A1A1A",
          medium: "#222222",
          soft: "#333333",
        },
        // Legacy design tokens used across components
        "deep-navy": "#000000",
        "gold": "#C6A75E",
        "gold-light": "#D4B96E",
        "ice-blue": "#EAF4FF",
        "sage-green": "#E4F3EC",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        'soft': '0 2px 15px -3px oklch(45% 0.18 280 / 0.08), 0 10px 20px -2px oklch(45% 0.18 280 / 0.04)',
        'soft-md': '0 4px 20px -4px oklch(45% 0.18 280 / 0.12), 0 12px 30px -4px oklch(45% 0.18 280 / 0.06)',
        'soft-lg': '0 8px 30px -6px oklch(45% 0.18 280 / 0.15), 0 20px 40px -8px oklch(45% 0.18 280 / 0.08)',
        'soft-xl': '0 12px 40px -8px oklch(45% 0.18 280 / 0.18), 0 25px 50px -10px oklch(45% 0.18 280 / 0.10)',
        'glow': '0 0 20px oklch(45% 0.18 280 / 0.3)',
        'glow-lg': '0 0 40px oklch(45% 0.18 280 / 0.4)',
        'card': '0 1px 3px oklch(45% 0.18 280 / 0.06), 0 4px 12px oklch(45% 0.18 280 / 0.08)',
        'card-hover': '0 4px 16px oklch(45% 0.18 280 / 0.12), 0 8px 24px oklch(45% 0.18 280 / 0.08)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 0.5s ease-out forwards',
        'voice-pulse': 'voicePulse 1.5s ease-in-out infinite',
        'indigo-glow': 'indigoGlow 3s ease-in-out infinite',
        'typing-dot': 'typingDot 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
}
