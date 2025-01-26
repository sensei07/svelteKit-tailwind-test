import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      borderRadius: {
        '7xl': '3.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
