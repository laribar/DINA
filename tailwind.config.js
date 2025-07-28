module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Electric intelligence, premium AI energy
        primary: {
          DEFAULT: "#8b5cf6", // violet-500
          50: "#f5f3ff", // violet-50
          100: "#ede9fe", // violet-100
          200: "#ddd6fe", // violet-200
          300: "#c4b5fd", // violet-300
          400: "#a78bfa", // violet-400
          500: "#8b5cf6", // violet-500
          600: "#7c3aed", // violet-600
          700: "#6d28d9", // violet-700
          800: "#5b21b6", // violet-800
          900: "#4c1d95", // violet-900
        },
        // Secondary Colors - Trustworthy cyan, financial stability accent
        secondary: {
          DEFAULT: "#06b6d4", // cyan-500
          50: "#ecfeff", // cyan-50
          100: "#cffafe", // cyan-100
          200: "#a5f3fc", // cyan-200
          300: "#67e8f9", // cyan-300
          400: "#22d3ee", // cyan-400
          500: "#06b6d4", // cyan-500
          600: "#0891b2", // cyan-600
          700: "#0e7490", // cyan-700
          800: "#155e75", // cyan-800
          900: "#164e63", // cyan-900
        },
        // Accent Colors - Success highlights, profit moments
        accent: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          200: "#fde68a", // amber-200
          300: "#fcd34d", // amber-300
          400: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
          900: "#78350f", // amber-900
        },
        // Background Colors
        background: "#0a0a0a", // gray-950 - Deep space focus, premium darkness
        surface: {
          DEFAULT: "#1f2937", // gray-800 - Subtle elevation, card backgrounds
          light: "#374151", // gray-700
          lighter: "#4b5563", // gray-600
        },
        // Text Colors
        text: {
          primary: "#f9fafb", // gray-50 - Clear readability, high contrast
          secondary: "#9ca3af", // gray-400 - Hierarchy support, secondary information
          muted: "#6b7280", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#10b981", // emerald-500 - Positive performance, growth indicators
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500 - Attention without alarm, important notices
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          600: "#d97706", // amber-600
        },
        error: {
          DEFAULT: "#ef4444", // red-500 - Clear concern, helpful problem indication
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
        },
        // Border Colors
        border: {
          DEFAULT: "#374151", // gray-700
          light: "#4b5563", // gray-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'dramatic': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow-primary': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-secondary': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-accent': '0 0 20px rgba(245, 158, 11, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}