import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#82a2dd",
          secondary: "#e514d0",
          accent: "#127eea",
          neutral: "#16191d",
          "base-100": "#e7ecf3",
          info: "#87c6e3",
          success: "#0f8a48",
          warning: "#a47a0e",
          error: "#df3064",
          body: {
            "background-color": "#e7ecf3",
          },
        },
      },
    ],
  },
};
export default config;
