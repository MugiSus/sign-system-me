import type { Config } from "tailwindcss";

export default {
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
      },
      animation: {
        "slide-in-r": "slide-in-r 150ms cubic-bezier(0.15, 0.75, 0.4, 1)",
        "slide-in-rb": "slide-in-rb 150ms cubic-bezier(0.15, 0.75, 0.4, 1)",
        "slide-in-b": "slide-in-b 150ms cubic-bezier(0.15, 0.75, 0.4, 1)",
      },
      keyframes: {
        "slide-in-r": {
          "0%": { transform: "translateX(5%) scale(101%)" },
          "100%": { transform: "translateX(0) scale(100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
