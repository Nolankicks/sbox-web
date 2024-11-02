import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			}
		},

		colors: {
			background: 'hsl(220deg 36.84% 11.18%)',
			primary: 'hsl(218.92deg 82.22% 55.88%)',
			white: 'hsl(0deg 0% 100%)',
		}
		
	},
  
} satisfies Config;
