export default (position, imageName, caption) => {
  return `
    <div class="inspiration inspiration__${position}">
      <div class="inspiration__image">
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
      </div>
      <div class="inspiration__image-caption">
        Image: ${caption}
      </div>
    </div>
  `}