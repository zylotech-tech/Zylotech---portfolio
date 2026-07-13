/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#060B14',
        deepblue: '#0A2540',
        deepblue2: '#0F3057',
        cyan: {
          DEFAULT: '#00F5FF',
          soft: '#5FF6FF',
        },
        coral: '#FF7A45',
        slate: {
          150: '#E7ECF3',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, rgba(6,11,20,0) 0%, #060B14 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(0,245,255,0.16), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0,245,255,0.25)',
        'glow-coral': '0 0 40px rgba(255,122,69,0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}