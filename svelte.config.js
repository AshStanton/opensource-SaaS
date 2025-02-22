import adapter from '@sveltejs/adapter-netlify';  // Import the Netlify adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';  // Import the Svelte preprocessing plugin

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the Netlify adapter for deployment
    adapter: adapter(),
    // Allow up to 150kb of styles to be inlined with the HTML
    inlineStyleThreshold: 150000,
  },
  preprocess: vitePreprocess(), // Enable Svelte preprocess with Vite
};

export default config;
