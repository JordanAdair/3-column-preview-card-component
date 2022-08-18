/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				"bright-orange": "#e38826",
				"dark-cyan": "#006970",
				"very-dark-cyan": "#004241",
			},
			fontFamily: {
				lexendDeca: ["Lexend Deca", "sans-serif"],
				bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
			},
		},
	},
	plugins: [],
};
