// Coded by Biplab Prasad Gajurel 25024641
let currentSlide = 0;
function showSlide(n) {
  const slides = document.querySelectorAll('.slider img');
  slides.forEach((img, index) => {
    img.style.display = index === n ? 'block' : 'none';
  });
}

function nextSlide() {
  const slides = document.querySelectorAll('.slider img');
  if (slides.length === 0) return;
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000);
});

function validateForm() {
  const name = document.forms["contactForm"]["name"].value.trim();
  const email = document.forms["contactForm"]["email"].value.trim();
  const message = document.forms["contactForm"]["message"].value.trim();

  if (!name || !email || !message) {
    alert("All fields must be filled out!");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  return true;
}

function validateEmail(email) {
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return re.test(email.toLowerCase());
}
