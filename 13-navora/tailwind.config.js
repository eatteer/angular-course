/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     {
  //       navora: {
  //         primary: "#e02125",
  //         "--rounded-btn": "0.3rem",
  //       },
  //     },
  //   ],
  // },
};
