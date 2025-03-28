// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://Codex22Paradox.github.io',
    base: '/tap_system',
    vite: {
        plugins: [tailwindcss()],
    },
});