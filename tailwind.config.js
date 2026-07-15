/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/components/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#006A4E',       // Bangladesh Green
          blue: '#0033A0',        // Malaysia Blue
          red: '#D62828',         // Accent Malaysia Red
          gold: '#D4AF37',        // Premium Gold Highlight
          darkGreen: '#004D39'    // Dark green for hover states
        },
        neutral: {
          bg: '#FFFFFF',          // Base Canvas
          bgSecondary: '#F8FAFC', // Sleek background layouts
          border: '#E2E8F0',      // Soft visual dividers
        },
        text: {
          dark: '#0F172A',        // Slate 900
          body: '#475569',        // Slate 600
          muted: '#94A3B8',       // Slate 400
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1440px',
        'content': '1200px',
      },
      borderRadius: {
        'sm': '10px',
        'md': '16px',
        'lg': '24px',
        'hero': '28px',
        'btn': '14px',
        'input': '14px',
      },
      boxShadow: {
        'card': '0px 4px 20px rgba(15, 23, 42, 0.03)',
        'floating': '0px 10px 30px rgba(15, 23, 42, 0.06)',
        'glass': '0px 8px 32px 0 rgba(15, 23, 42, 0.04)',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '30': '120px'
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '400ms',
        'premium': '700ms',
      }
    },
  },
  plugins: [],
}
