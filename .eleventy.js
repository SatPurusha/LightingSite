import imageInspire from "./src/_includes/shortcodes/imageInspire.js";

export default (eleventyConfig) => {
  eleventyConfig.addShortcode("imageInspire", imageInspire);
  eleventyConfig.addPassthroughCopy("src/images")
    watch: ["dist/css/style.css"];
};

export const config = {
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    data: "_data",
    input: "src",
    includes: "_includes",
    layouts: "_includes/layouts",
    shortcodes: "_includes/shortcodes",
    output: "dist",
    images: "images",
  },
};
