/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0b1220",           // deep slate
          primary: "#22d3ee",      // cyan glow
          secondary: "#34d399",    // emerald glow
          accent: "#f59e0b",       // amber pop
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(34,211,238,0.25)",
        glow2: "0 0 40px rgba(52,211,153,0.25)",
      },
    },
  },
  plugins: [],
};
