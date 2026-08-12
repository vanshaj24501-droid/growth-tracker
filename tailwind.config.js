/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        system: {
          bg: "#050811",
          card: "#0b1120",
          border: "#00f0ff",
          purple: "#9d4edd",
          accent: "#00f0ff",
          text: "#e2e8f0"
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.35)',
        'glow-purple': '0 0 15px rgba(157, 78, 221, 0.35)'
      },
      fontFamily: {
        system: ['Rajdhani', 'sans-serif']
      }
    },
  },
  plugins: [],
}