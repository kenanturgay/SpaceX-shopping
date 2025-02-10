module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7B47",
        secondary: "#252B42",
        fgray: "#737373",
        lightGray: "#FAFAFA",
        primary_color: "#23A6F0",
        contact_text:"#FFFFFF",
        header_bg_color:"#252B42",
        footer_text_color:"#252B42",
        footer_icon_color:"#23A6F0",
        footer_button:"#23A6F0",
        footer_second_text_color:"#737373",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Montserrat fontu
      },
      fontSize: {
        h1: "3rem",
        h2: "2.5rem",
        h3: "2rem",
        h4: "1.5rem",
        h5: "1.25rem",
        h6: "1.125rem",
      },
      fontWeight: {
        h1: "700",
        h2: "600",
        h3: "500",
        h5: "700",
        h6: "700",
      },
      lineHeight: {
        h1: "1.2",
        h2: "1.3",
        h3: "1.4",
        h5: "24px",
        h6: "20px",
      },
    },
  },
  plugins: [],
};