let currentIndex = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;
const iframes = document.querySelectorAll("iframe");

function stopAllMusic() {
  iframes.forEach(iframe => {
    const src = iframe.src;
    iframe.src = src; // reload untuk stop musik
  });
}

function updateSlide() {
  stopAllMusic();
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
}
