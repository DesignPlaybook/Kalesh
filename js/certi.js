let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const intervalTime = 5000; // Change slide every 5 seconds

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Show first slide initially
showSlide();

// Auto advance slides
setInterval(nextSlide, intervalTime);
