/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        keyframes: {
          appear: {
            "0%": {
              opacity: "0",
            },
            "100%": {
              opacity: "1",
            },
         },
         animation: {
           appear: "appear 0.5s ease-in-out",
         }
      }
    },
    colors: {
      'white': '#EBF0F1',
      'blue': '#6E85C4',
    },
    fontFamily: {
      'Roboto': ['Roboto'],
      'CapsuleSemiExpanded': ['H74 Capsule SemiExpanded'],
      'HCapsuleBlack': ['H74 Capsule'],
    },
  },
  plugins: [],
}