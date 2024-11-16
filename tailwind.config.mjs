/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "329px" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        typing: "typing 2s steps(20, end) forwards",
        blink: "blink 0.5s step-end infinite",
      },
      fontFamily: {
        sans: ["sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        Satisfy: ["Satisfy", "sans-serif"],
      },
    },
  },
};
