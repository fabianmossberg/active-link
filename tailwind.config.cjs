const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui]
};

module.exports = config;
