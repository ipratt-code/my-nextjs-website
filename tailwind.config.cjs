module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: "#072a3e",
      secondary: "#0284c7",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};