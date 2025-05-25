import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkUnwrapImages from "remark-unwrap-images";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    remarkPlugins: [remarkUnwrapImages],
  },
});
