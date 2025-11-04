export default function (config) {
  config.addShortcode("image", function (imageName, caption) {
    return `<div class="inspiration-image">
              <picture>
                <source 
                  type="image/jpeg"
                  srcset="/images/${imageName}-1800.jpg"
                  media="(min-width: 675px)"
                />
                <source 
                  type="image/jpeg"
                  srcset="/images/${imageName}-1350.jpg"
                  media="(min-width: 450px)"
                />
                <source 
                  type="image/jpeg"
                  srcset="/images/${imageName}-900.jpg"
                />
                <img 
                  src="/images/${imageName}.jpg" 
                  alt="${caption}"
                />
              </picture>
              <p class="caption">Image: ${caption}</p>
            </div>`;
  });

  config.addPassthroughCopy("src/images");

  config.setServerOptions({
    watch: ["dist/css/style.css"],
  });
}

export const config = {
  markdownTemplateEngine: "njk",
  dataTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    data: "_data",
    input: "src",
    layouts: "_includes",
    output: "dist",
    images: "images",
  },
};
