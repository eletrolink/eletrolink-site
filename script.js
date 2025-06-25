// Slider automático
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const intervalTime = 3000; // tempo entre slides (em milissegundos)

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.display = 'none';
  });
  slides[index].classList.add('active');
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Inicializa o primeiro slide
showSlide(currentSlide);

// Troca automática
setInterval(nextSlide, intervalTime);
