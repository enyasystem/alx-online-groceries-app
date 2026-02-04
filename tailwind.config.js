/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#53B175',
          light: '#6CC788',
          dark: '#429D61',
        },
        secondary: {
          DEFAULT: '#F8A44C',
          light: '#F9B668',
          dark: '#E6933A',
        },
        background: '#FFFFFF',
        text: {
          primary: '#181725',
          secondary: '#7C7C7C',
          light: '#B3B3B3',
        },
        border: '#E2E2E2',
        error: '#F44336',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      fontFamily: {
        // Add custom fonts here after extracting from Figma
        regular: ['CustomFont-Regular'],
        medium: ['CustomFont-Medium'],
        semibold: ['CustomFont-SemiBold'],
        bold: ['CustomFont-Bold'],
      },
      spacing: {
        // Custom spacing if needed
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
