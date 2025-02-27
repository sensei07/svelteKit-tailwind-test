import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [sharedConfig]
};

export default config;
