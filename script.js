const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  const image = container.querySelector('img');
  const imageRatio = image.naturalWidth / image.naturalHeight;

  if (imageRatio > 1) {
    // Image is wider than taller
    image.style.width = '100%';
    image.style.height = 'auto';
  } else if (imageRatio < 1) {
    // Image is taller than wider
    image.style.width = 'auto';
    image.style.height = '100%';
  }
});