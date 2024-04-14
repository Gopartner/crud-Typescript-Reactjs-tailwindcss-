// tailwind.config.js

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Menyesuaikan dengan struktur proyek Anda
    './public/index.html',
  ],
  darkMode: 'media',
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

