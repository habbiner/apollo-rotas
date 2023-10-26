let currentSlide = 0;
showSlide(currentSlide);

function plusSlides(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel__slide');
  if (n < 0) currentSlide = slides.length - 1;
  if (n >= slides.length) currentSlide = 0;
  
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}
