const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        russonOne: ['Russon One'],
        inter: ["Inter"],
        petit: ['Petit Formal Script'],
      },
    },
  },
  plugins: [],
});
