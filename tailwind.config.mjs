/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				accent: 'var(--accent-color)',
				secondary: 'var(--secondary-color)',
				foreign: 'var(--foreign-color)',
				background: 'var(--background-color)',
			},
			fontFamily: {
				fredoka : "'Fredoka', Poppins"
			}
		},
	},
	plugins: [],
}
