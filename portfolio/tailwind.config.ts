import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca'
        }
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 700ms ease-out both',
        shimmer: 'shimmer 2s linear infinite'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
}

export default config