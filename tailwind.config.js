module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {

    extend: {
      with: {
        'w-item-header': '121px',
        'w-line-vertical': '1px'
      },
      colors: {
        'ct-bg-color': '#fafafa'
      },

    },
  },
  plugins: [],
};
