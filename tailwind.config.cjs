import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: { preset: ['crimson'] }
		}),
		require('@tailwindcss/forms'),
	]
};

module.exports = config;
