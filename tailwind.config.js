/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        olivedrab: "#80a948",
        gray: {
          "100": "#1d2939",
          "200": "#101828",
          "300": "#111",
        },
        gainsboro: {
          "100": "#e4e7ec",
          "200": "#d8d8d8",
        },
        darkgray: "#98a2b3",
        whitesmoke: "#f2f4f7",
        slategray: "#667085",
        orange: {
          "100": "#ffba00",
          "200": "#ffb900",
        },
        darkslategray: {
          "100": "#475467",
          "200": "#344154",
        },
        darkgoldenrod: "#cc8500",
      },
      spacing: {},
      fontFamily: {
        "sf-pro-text": "'SF Pro Text'",
        "sf-title-2-regular": "'SF Pro Display'",
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      sm: "14px",
      smi: "13px",
      mid: "17px",
      xl: "20px",
      mini: "15px",
      base: "16px",
      "17xl": "36px",
      "29xl": "48px",
      "5xl": "24px",
      lg: "18px",
      "20xl": "39px",
      "3xl": "22px",
      "10xl": "29px",
      "19xl": "38px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
