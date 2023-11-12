/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			"2xs": "321px",
			xs: "426px",
			...defaultTheme.screens
		},
		extend: {
			colors: {
				"primary-color": colors.amber[500],
				"secondary-color": colors.purple[500],
				"white-color": colors.neutral[100],
				"dark-color": colors.neutral[800],
				"danger-color": colors.red[500],
				"warning-color": colors.yellow[500]
			}
		}
	},
	plugins: []
};
