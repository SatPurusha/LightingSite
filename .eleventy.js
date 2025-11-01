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
  }
}

// configuration

module.exports = config => {

  //dev server
  config.setServerOptions({
    watch: ["./src/sass/"]
  })

  // file pass through to output
  config.addPassthroughCopy('src/images')

  // directory config
  return dirConfig
}
