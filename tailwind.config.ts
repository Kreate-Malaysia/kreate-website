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
      fontSize: {
        "2xl": ["48px", { lineHeight: "52px", fontWeight: "bold" }],
        xl: ["36px", { lineHeight: "40px", fontWeight: "bold" }],
        lg: ["30px", { lineHeight: "36px", fontWeight: "bold" }],
        base: ["24px", { lineHeight: "32px", fontWeight: "semi-bold" }],
        sm: ["20px", { lineHeight: "28px", fontWeight: "semi-bold" }],
      },
    },
  },
  plugins: [],
};
export default config;
