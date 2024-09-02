/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        montserrat: "montserrat",
        clashdisplay: "clashdisplay",
      },
      backgroundImage: {
        primary:
          "linear-gradient(var(--primary-dir),hsl(var(--primary-1)),hsl(var(--primary-2)))",
        "primary-btn":
          "linear-gradient(var(--primary-dir),hsl(var(--primary-2)) 0%,hsl(var(--primary-1)) 56%, #FF26B9 100%, #FF26B9 100%)",
      },

      colors: {
        accent: "hsl(var(--accent))",
        error: "hsl(var(--error))",
        "primary-1": "hsl(var(--primary-1))",
        "primary-2": "hsl(var(--primary-2))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [],
};
