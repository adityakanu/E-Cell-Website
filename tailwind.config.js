/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
                Poppins: ["Poppins", "sans-serif"],
            },
            fontSize: {
                vsm: "0.8vw",
                vbase: "1vw",
                vxl: "1.25vw",
                "2vl": "2.5vw",
                "3vl": "4vw",
                "4vl": "6vw",
                "5vl": "50vw",
            },
        },
    },
    plugins: [],
};
