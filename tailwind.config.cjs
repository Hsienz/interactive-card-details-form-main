/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Primary

				gradient_from: "hsl(249, 99%, 64%)",
				gradient_to: "hsl(278, 94%, 30%)",
				Red: "hsl(0, 100%, 66%)",

				// Neutral

				White: "hsl(0, 0%, 100%)",
				Light_grayish_violet: "hsl(270, 3%, 87%)",
				Dark_grayish_violet: "hsl(279, 6%, 55%)",
				Very_dark_violet: "hsl(278, 68%, 11%)",
			},
			fontFamily: {
        sans: [ 'Space Grotesk', 'sans-serif' ],
      },
		},
	},
	plugins: [],
};
