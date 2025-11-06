import iText from "./src/_includes/shortcodes/imageInspire.js";

export default (eleventyConfig) => {
  eleventyConfig.addShortcode("scii", iText);
  eleventyConfig.addPassthroughCopy("src/images");
  watch: ["dist/css/style.css"];
};

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    data: "_data",
    includes: "_includes",
    shortcodes: "_includes/shortcodes",
    output: "dist",
    images: "images",
  },
};
