import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      pink: '#C035A2',
      bgAdmin:'#1E1E30',
      bgInput:'#5A5B70',
      purple:'#C74FEB',
       bgClient:'#EB5757',
       lightRed: '#FFE7E7',
      mainBlack:'#181617',
      mainWhite: "#F3F4F6",
      gray: "#828282",
      mainRed:"#D63626",
      cardText: " #4F4F4F",

      
    },
    
  },
  plugins: [],
};
export default config;
