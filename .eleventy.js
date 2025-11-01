// config

const dirConfig = {
  markdownTemplateEngine: 'njk', 
  dataTemplateEngine: 'njk', 
  htmlTemplateEngine: 'njk', 
  dir: {
    data: '_data', 
    input: 'src', 
    layouts: '_includes', 
    output: 'dist',
    images: 'images'
  }
}

// export

module.exports = function(config) {

  config.setServerOptions({
    watch: ["./src/sass/"]
  })

  config.addPassthroughCopy('src/images')

  return dirConfig
}
