import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: {
          DEFAULT: "rgb(var(--foreground))",
          secondary: "rgb(var(--foreground-secondary))",
        },
        border: "rgb(var(--border))",
      },
    },
  },
  plugins: [],
};
export default config;
