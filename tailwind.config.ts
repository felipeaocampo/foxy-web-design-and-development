import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-orange": "#d2643e",
      white: "#fff",
      black: "#000",
      choco: "#101010",
      "primary-gray": "#444",
      "light-gray": "#CBC9C9",
      "extra-light-gray": "#EBEBEB",
      "dull-pink": "#b6a29e",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        felipe: "url('/felipe2.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
