/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/style.css", // Ensure this path is correct
	],
	theme: {
		extend: {
			animation: {
				"rotate-around": "rotateAround 15s linear infinite",
			},
			keyframes: {
				rotateAround: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
	},
	plugins: [],
};
