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
        bg: '#0f0e0c',
        surface: '#1a1916',
        'surface-elevated': '#242320',
        border: '#2e2d28',
        text: '#e8e4dc',
        'text-secondary': '#a39e91',
        'text-muted': '#6b6760',
        accent: '#c4a265',
        'accent-hover': '#d4b275',
        success: '#5a8a5c',
        warning: '#c4a265',
        error: '#b85450',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
