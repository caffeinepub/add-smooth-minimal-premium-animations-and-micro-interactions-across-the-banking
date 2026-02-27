/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // DSOUZA BANK custom tokens
        'ice-blue': '#EAF4FF',
        'sage-green': '#E4F3EC',
        'deep-navy': '#1C2E4A',
        'gold': '#C6A75E',
        'gold-light': '#E8D5A3',
        'gold-dark': '#A8893E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(28, 46, 74, 0.06)',
        'soft-md': '0 4px 24px rgba(28, 46, 74, 0.1)',
        'soft-lg': '0 8px 40px rgba(28, 46, 74, 0.14)',
        'gold': '0 4px 20px rgba(198, 167, 94, 0.3)',
        'gold-lg': '0 8px 32px rgba(198, 167, 94, 0.4)',
        'navy': '0 4px 20px rgba(28, 46, 74, 0.25)',
        'glass': '0 4px 24px rgba(28, 46, 74, 0.08)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.6s ease forwards',
        'blob-float': 'blobFloat 8s ease-in-out infinite',
        'count-up': 'countUp 0.5s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'dot-bounce': 'dotBounce 1.4s ease-in-out infinite',
        'emergency-pulse': 'emergencyPulse 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-ice': 'linear-gradient(135deg, #EAF4FF 0%, #E4F3EC 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1C2E4A 0%, #2a4a7a 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C6A75E 0%, #E8D5A3 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
