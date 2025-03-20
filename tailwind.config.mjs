/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "575px",
      md: "768px",
      lg: "991px",
      xl: "1200px",
    },
    colors: {
      'primary':'#646464',
      'mainBlack': '#000',
      'black': '#1A1A1A',
      'white':'#fff',
      'lightGold':'#FFFDF8',
      'gold':'#99742B',
      'grey':'#F7F3EA',
      'transparent':'transparent'
    },
    fontFamily: {
      inter: ['Inter', 'serif'],
      fh: ['FH Total Display'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        xl: '8.542vw',
      },
      center:'true'
    },
    extend: {
      keyframes: {
        scale: {
          "0%": { width: 0, },
          "100%": { width: "100%",  },
        },
     
      },
      animation: {
        scale: "scale 3s .5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
