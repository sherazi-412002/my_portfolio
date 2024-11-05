import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgColor: '#1f242d',
        fontColors: '#0ef'
      },
      fontFamily: {
        myFont:['Bebas Neue','sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
