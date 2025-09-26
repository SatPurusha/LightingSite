// *********
// VARIABLES
// *********

// Customize Markdown library & toc:
const markdownIt = require('markdown-it')
const markdownItOptions = {html: true}
const markdownItAnchor = require('markdown-it-anchor')
const markdownItAnchorOptions = {permalink: false, level: [2,3], tabIndex: false}

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

  // Customize Markdown library &toc
  let markdownLibrary = markdownIt(markdownItOptions)
  .use(markdownItAnchor, markdownItAnchorOptions)
  config.setLibrary('md', markdownLibrary)

  //dev server
  config.setServerOptions({
    watch: ["./src/sass/"]
  })

  // File pass through to output
  config.addPassthroughCopy('src/images/*.jpg')
  config.addPassthroughCopy('src/images/*.png')
  config.addPassthroughCopy('src/_headers')

  // nunjucks limit filter
  config.addFilter('limit', function(array, limit) {
    return array.slice(0, limit)
  })

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
