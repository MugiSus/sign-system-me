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
        "slide-in-r": "slide-in-r 100ms cubic-bezier(0.15, 0.75, 0.4, 1)",
        "slide-in-rb": "slide-in-rb 100ms cubic-bezier(0.15, 0.75, 0.4, 1)",
        "slide-in-b": "slide-in-b 100ms cubic-bezier(0.15, 0.75, 0.4, 1)",
      },
      keyframes: {
        "slide-in-r": {
          "0%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-rb": {
          "0%": { transform: "translateY(2%) translateX(3%)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        "slide-in-b": {
          "0%": { transform: "translateY(5%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
