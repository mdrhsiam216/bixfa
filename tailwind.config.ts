import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF1B7E",
          50: "#FFE5F0",
          100: "#FFBFDA",
          200: "#FF99C5",
          300: "#FF66A7",
          400: "#FF3D90",
          500: "#FF1B7E", // DEFAULT
          600: "#DB166D",
          700: "#B7125C",
          800: "#930E4B",
          900: "#5C062F",
        },
        secondary: {
          DEFAULT: "#0E61C7",
          50: "#E3F0FF",
          100: "#BAD9FF",
          200: "#8DC0FF",
          300: "#5FA6FF",
          400: "#358FFF",
          500: "#0E61C7", // DEFAULT
          600: "#0B51A6",
          700: "#084185",
          800: "#063165",
          900: "#041E3D",
        },
        dark: {
          DEFAULT: "#1F2937",
          50: "#F3F4F6",
          100: "#E5E7EB",
          200: "#D1D5DB",
          300: "#9CA3AF",
          400: "#6B7280",
          500: "#4B5563",
          600: "#374151",
          700: "#1F2937", // DEFAULT
          800: "#111827",
          900: "#0B0F17",
        },
        black: {
          DEFAULT: "#2B2B2B",
          50: "#F2F2F2",
          100: "#D9D9D9",
          200: "#BFBFBF",
          300: "#A6A6A6",
          400: "#8C8C8C",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#2B2B2B", // DEFAULT
          900: "#1A1A1A",
        },
        white: {
          DEFAULT: "#ffffff",
          50: "#ffffff", // Lightest
          100: "#fafafa",
          200: "#f5f5f5", // Your base color
          300: "#f0f0f0",
          400: "#e0e0e0",
          500: "#d0d0d0",
          600: "#b0b0b0",
          700: "#909090",
          800: "#707070",
          900: "#505050", // Darkest
        },
        green: {
          DEFAULT: "#079455",
          50: "#E3F7EE",
          100: "#C7EFDD",
          200: "#8FDFBB",
          300: "#57CF99",
          400: "#1FBF77",
          500: "#079455", // DEFAULT
          600: "#067A47",
          700: "#046039",
          800: "#03462B",
          900: "#022C1D",
        },
        danger: {
          DEFAULT: "#D92D20",
          50: "#FEE7E5",
          100: "#FDD0CC",
          200: "#FBA199",
          300: "#F97266",
          400: "#F74333",
          500: "#D92D20", // DEFAULT
          600: "#B0251A",
          700: "#861C14",
          800: "#5C130D",
          900: "#320A07",
        },
        gray: {
          DEFAULT: '#D5D7DA',
          50: '#F8F8F9',
          100: '#F1F2F3',
          200: '#E4E6E9',
          300: '#D5D7DA', // DEFAULT
          400: '#B8BBC1',
          500: '#9B9FA8',
          600: '#7E838F',
          700: '#616776',
          800: '#444B5D',
          900: '#272F44',
        },
        custom:{
          primary: '#818181',
        }
      },
      fontSize: {
        tn: "9px", // 10px
        xs: "11px", // 12px
        sm: "13px", // 14px
        md: "15px", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.75rem", // 28px
        "4xl": "2rem", // 32px
        "5xl": "2.25rem", // 36px
        "6xl": "2.5rem", // 40px
        "7xl": "2.75rem", // 44px
        "8xl": "3rem", // 48px
        "9xl": "3.25rem", // 52px
        xxl: "3.5rem", // 56px
        "xxl-2": "3.75rem", // 60px
      },
      borderRadius: {
        sm: "0.125rem", // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        "2lg": "0.625rem", // 10px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.25rem", // 20px
        "4xl": "1.5rem", // 24px
        full: "100%", // 100%
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
