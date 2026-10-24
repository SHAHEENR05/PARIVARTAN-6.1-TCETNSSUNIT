/** @type {import('tailwindcss').Config} */
// Parivartan design tokens — light theme drawn from the two logos:
// NSS navy + NSS red, with a leaf green for "Prakriti" and a warm marigold for highlights.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F7FB",   // page background (cool off-white)
        surface: "#FFFFFF",  // cards
        wash: "#EEF0F8",     // tinted panels
        line: "#E3E6EF",     // borders
        ink: "#151833",      // headings / primary text (navy-black)
        body: "#3D4260",     // running text
        muted: "#6A7090",    // secondary text
        navy: { DEFAULT: "#2C3082", soft: "#E8E9F6" },
        red: { DEFAULT: "#D42A3C", soft: "#FBE9EB" },
        leaf: { DEFAULT: "#1F7A4D", soft: "#E6F3EC" },
        marigold: { DEFAULT: "#C9780A", soft: "#FDF1E0" },
      },
      fontFamily: {
        hindi: ['"Rozha One"', "serif"],
        deva: ['"Mukta"', '"Nirmala UI"', "sans-serif"],
        display: ['"Fraunces Variable"', "Georgia", "serif"],
        sans: ['"Manrope Variable"', "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      maxWidth: { page: "1160px", read: "700px" },
      boxShadow: {
        card: "0 1px 2px rgba(21,24,51,.04), 0 8px 24px -12px rgba(21,24,51,.10)",
        lift: "0 2px 4px rgba(21,24,51,.04), 0 22px 44px -18px rgba(44,48,130,.28)",
        photo: "0 30px 60px -30px rgba(21,24,51,.35)",
      },
    },
  },
  plugins: [],
};
