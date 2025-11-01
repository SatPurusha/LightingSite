export default function(config) {
  config.addPassthroughCopy('src/images')
  config.addWatchTarget("dist/css/style.css")
  config.setServerOptions({
    watch: ["dist/css/style.css"]
  })
}
  
export const config = {
  markdownTemplateEngine: 'njk', 
  dataTemplateEngine: 'njk', 
  htmlTemplateEngine: 'njk', 
  dir: {
    data: '_data', 
    input: 'src', 
    layouts: '_includes', 
    output: 'dist',
    images: 'images',
  }
}