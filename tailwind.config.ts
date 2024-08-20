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
        'clr-green-200': 'hsl(148, 38%, 91%)',
        'clr-green-600': 'hsl(169, 82%, 27%)',
        'clr-red': 'hsl(0, 66%, 54%)',
        'clr-grey-500': 'hsl(186, 15%, 59%)',
        'clr-grey-900': 'hsl(187, 24%, 22%)',
      },
    },
  },
  plugins: [],
};

export default config;