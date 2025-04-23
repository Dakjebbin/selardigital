// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
			'hero-pattern': "url('/stelar-1.jpg')",
  		},
      },
    },
    plugins: [],
  }
  