// You don't need JavaScript for this if you're using CSS hover, but here it is for demonstration purposes
document.querySelectorAll('.image-container').forEach(container => {
    const text = container.querySelector('.textoverlay');
    const image = container.querySelector('img');
  
    image.addEventListener('mouseover', () => {
      text.style.display = "block";
    });
  
    image.addEventListener('mouseout', () => {
      text.style.display = "none";
    });
  });
  