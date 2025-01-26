import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      borderRadius: {
        '7xl': '3.5rem',
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'], // Ensure quotes around "Bodoni Moda"
      },
    },
  },
  plugins: [],
};
export default config;
