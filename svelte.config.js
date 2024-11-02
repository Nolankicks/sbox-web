import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import autoImport from 'sveltekit-autoimport';

const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            precompress: false,
            strict: true,
            fallback: '404.html',
        }),
        paths: {
            base: process.env.NODE_ENV === 'development' ? '' : '/sveltekit-autoimport'
        },
        prerender: {
            handleMissingId: ({ event, resolve }) => {
                return;
            }
        }
    },
    extensions: ['.svelte', '.md', '.svx'],
    preprocess: [
        vitePreprocess(),
        autoImport({
            include: ['**/*.(svelte)'],
            components: ['./src/lib/components/', { name: './src' }]
        })
    ],
};

export default config;