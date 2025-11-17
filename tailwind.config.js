export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  safelist: ["border-tag-1", "border-tag-2"],
  theme: {
    extend: {
      fontFamily: {
        messina: ["MessinaSans", "sans-serif"],
      },
    },
  },
};
