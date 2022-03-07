module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'lg': '1200px',
    },
    extend: {
      fontFamily: {
        'sans': ['Cormorant Garamond'],
        'calligraphy': ['Khodijah']
      },
      colors: {
				primary: '#ffffeb',
				secondary: '#0a5948',
			}
    }
  },
  plugins: []
};