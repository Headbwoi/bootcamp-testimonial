const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {

  let slides = document.querySelectorAll(".slide");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(slide => {
    slide.style.display = "none"
  })

  slides[slideIndex - 1].style.display = "flex";
}

prev.onclick = () => moveSlide(-1);
next.onclick = () => moveSlide(1);

document.body.addEventListener("keydown", e => {
  let key = e.keyCode
  console.log(key);

  if (key === 37) {
    moveSlide(-1)
  }
  if (key === 39) {
    moveSlide(1)
  }
})