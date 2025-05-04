const images = document.querySelectorAll('.carousel img');
let current = 0;

function showSlide(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current);
}

const captions = [
  "Alien Dreams: Un viaje entre columnas de luz y memoria.",
  "Sueño Nebular: Nebulosas internas que guían sueños perdidos.",
  "Luz Interna: Un reflejo solar desde adentro.",
  "Bosque Azul: Donde los árboles escuchan.",
  "Fantasía Solar: Luz cálida en mundos inexistentes.",
  "Otra versión: Variación de fantasía solar."
];

function openLightbox(index) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxText = document.getElementById("lightbox-text");
  lightboxImg.src = images[index].src;
  lightboxText.textContent = captions[index];
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

showSlide(current);  // Initialize
