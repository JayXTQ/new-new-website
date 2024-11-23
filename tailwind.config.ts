import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Mono', 'monospace'],
				mono: ['IBM Plex Mono', 'monospace'],
			}
		}
	},

	plugins: [typography]
} satisfies Config;
