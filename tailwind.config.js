/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        glass:
          "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.10) 100%)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        glow: "0 0 8px rgba(72, 209, 217, 0.8)",
      },
    },
  },
  plugins: [],
};
