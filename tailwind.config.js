import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "repeat-gradient-to-r":
          "repeating-linear-gradient(to right, var(--tw-gradient-stops))",
        "repeat-gradient-to-br":
          "repeating-linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
      keyframes: {
        stroke: {
          from: {
            "stroke-dasharray": "1000",
          },
          to: {
            "stroke-dasharray": "1000",
            "stroke-dashoffset": "2000",
          },
        },
      },
      animation: {
        stroke: "stroke 5s linear infinite",
      },
    },
  },
  presets: [createPreset({ preset: "ocean" })],
};
