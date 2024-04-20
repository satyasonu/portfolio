/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slideIn : {
          "0%" : {transform: 'translateY(-700px) scale(2)'},
          '100%': {transform: 'translateY(0px) scale(1)'}
        },
        slideUp : {
          '0%' : {transform: 'translateY(300px)'},
          '100%' :{transform: 'translateY(0px)'}
        },
        marquee : {
          '0%': { transform : 'translateX(100%)'},
          '100%' : { transform : 'translateX(-100%)'}
        },
        justSlideUp: {
          '0%' : {transform: 'translateY(100px)'},
          '100%' :{transform: 'translateY(0px)'}
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        slideIn: "slideIn 1.5s ease-in-out forwards .9s",
        slideUp : "slideUp .8s ease forwards .5s",
        marquee : 'marquee 10s linear infinite',
        justSlideUp : "slideUp .8s ease forwards .5s",
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-conic-gradient"),
  ],
};
