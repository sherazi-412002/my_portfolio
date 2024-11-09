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
        fontColors: '#0ef',
        bgColorDrk:'#32363f',
        bgGray:'#cccccc'
      },
      fontFamily: {
        myFont:['Bebas Neue','sans-serif'],
        logoFont:['Bebas Neue']
      }
    },
  },
  plugins: [],
};
export default config;
