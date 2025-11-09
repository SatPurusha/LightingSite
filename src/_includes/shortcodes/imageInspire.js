export default (position, imageName, caption) => {
  return `
    <div class="inspiration inspiration__${position}">
      <img class="inspiration__image aspect" src="/images/${imageName}.jpg" alt="${caption}"/>
      <div class="inspiration__image-caption">
        Image: ${caption}
      </div>
    </div>
  `}