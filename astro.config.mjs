// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://danielphilipjohnson.github.io/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss({ config: { content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'] } })],
  },
});
