module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints
      screens: {
        desktop: '1280px',
      },
    },
    extend: {
      backgroundColor: {
        'primary': '#7F56D9',
      },
      borderColor: {
        'primary': '#dddddd',
        'secondary': '#F2F4F7',
        'tertiary': '#7F56D9',
      },
      colors: {
        'primary': '#475467',
        'secondary': '#101828',
        'tertiary': '#6941C6',
      },
      screens: {
        '2xl': '1536px', // Extra extra large screens
        'lg': '1024px', // Large screens
        'md': '768px', // Medium screens
        'sm': '640px', // Small screens
        'xl': '1280px', // Extra large screens
      },
    },
  },
};
