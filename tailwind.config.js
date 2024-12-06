/** @type {import('tailwindcss').Config} */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        smd: '900px', // Define the custom breakpoint
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

