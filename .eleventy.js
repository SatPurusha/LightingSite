// *********
// VARIABLES
// *********

// directory config
const dirConfig = {
  markdownTemplateEngine: 'njk', 
  dataTemplateEngine: 'njk', 
  htmlTemplateEngine: 'njk', 
  dir: {
    data: '_data', 
    input: 'src', 
    layouts: '_includes/layouts', 
    includes: '_includes',
    output: 'dist',
    images: 'images'
  }}

// css minify config
  const CleanCSS = require("clean-css")

// html minify config
const htmlmin = require("html-minifier-terser")

// *************
// CONFIGURATION
// *************

module.exports = config => {

  //dev server
  config.setServerOptions({
    watch: ["./src/sass/"]
  })

  // File pass through to output
  config.addPassthroughCopy('src/images')

  // css minify config
  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  })

  // html minify config
  config.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Directory config
  return dirConfig
}
