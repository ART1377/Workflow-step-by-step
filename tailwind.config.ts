import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        reject: "var(--reject)",
        success: "var(--success)",
        upload: "var(--upload)",
        "primary-light": "var(--primary-light)",
        "primary-main": "var(--primary-main)",
        "primary-dark": "var(--primary-dark)",
        "gray-light": "var(--gray-light)",
        "gray-main": "var(--gray-main)",
        "gray-dark": "var(--gray-dark)",
        light: "var(--light)",
        dark: "var(--dark)",
        body: "var(--body)",
      },
      borderRadius: {
        "radius-small": "var(--radius-small)",
        "radius-main": "var(--radius-main)",
        "radius-large": "var(--radius-large)",
      },
      screens: {
        320: "320px",
        480: "480px",
        850: "850px",
        950: "950px",
        1100: "1100px",
        1400: "1400px",
        1800: "1800px",
      },
    },
  },
  plugins: [],
};
export default config;
