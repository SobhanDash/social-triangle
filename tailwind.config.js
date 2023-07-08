/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "450px",
      xxxs: "480px",
      xs: "550px",
      // nav_logo: "550px",
      sm: "640px",
      sm1: "700px",
      md: "768px",
      base: "870px",
      md_link: "980px",
      lg: "1024px",
      lg1: "1180px",
      xl: "1280px",
      xl1: "1400px",
      "2xl": "1536px",
      "3xl": "1650px",
      "4xl": "1850px",
      "5xl": "2140px",
    },
    radialGradients: {
      industriesGradient:
        "radial-gradient(at top left, #0a0a0ac9 60%, #ffffff00 100%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mainBg: "url(/assets/mainBg.png)",
        industriesBg: "url(/assets/industriesBg.jpg)",
      },
      dropShadow: {
        faqShadow: "0.15rem 0.15rem lightgray",
      },
      boxShadow: {
        menuShadow: "0px 1px 2px 0px #9099ff",
        btnShadow: "0px 1px 3px 0px #5b65d1",
      },
      fontSize: {
        "8xl": "100px", // Add a custom text size with the class "text-8xl"
      },
    },
  },
  plugins: [],
};
