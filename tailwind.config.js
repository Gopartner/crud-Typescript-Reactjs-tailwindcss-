// tailwind.config.js

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Path untuk proses purging CSS
  darkMode: false, // Atur ke 'media' atau 'class' untuk mode gelap
  theme: {
    extend: {
      colors: {
        primary: '#ff9900',
        secondary: '#3366cc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Atur ukuran tambahan, padding, margin, dan lainnya di sini
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

