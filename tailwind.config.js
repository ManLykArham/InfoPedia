/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg-layout': 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        'custom-bg-navbar': 'linear-gradient(180deg, rgba(255,200,145,1) 0%, rgba(255,153,155,1) 50%, rgba(255,155,194,1) 100%)',
      },
    },
  },
  plugins: [],
}

