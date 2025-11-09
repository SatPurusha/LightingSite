import iText from "./src/_includes/shortcodes/imageInspire.js";
import {eleventyImageTransformPlugin} from "@11ty/eleventy-img";

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addShortcode("scii", iText);
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.setServerOptions({
    liveReload: true,
    watch: ["dist/css/style.css"],
  })
};

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    data: "_data",
    includes: "_includes",
    layouts: "_includes/layouts",
    shortcodes: "_includes/shortcodes",
    layouts: "_includes/layouts",
    output: "dist",
    images: "images",
  },
};
