/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif'],
            },
            colors: {
                bg: "#140D0D",
                primary: "#F1EBC8",
            },
        },
    },
    plugins: [],
};
