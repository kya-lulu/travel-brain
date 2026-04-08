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
        bg: '#faf8f5',
        surface: '#ffffff',
        'surface-elevated': '#ffffff',
        border: '#e8e4de',
        'border-strong': '#d4cfc6',
        text: '#2c2825',
        'text-secondary': '#6b6560',
        'text-muted': '#9b948a',
        accent: '#c45d3e',
        'accent-hover': '#a84e33',
        'accent-soft': '#fdf0ec',
        success: '#3d8b5e',
        'success-soft': '#edf7f0',
        warning: '#c4913e',
        'warning-soft': '#fdf5ec',
        error: '#c45050',
        'error-soft': '#fdf0f0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};
export default config;
