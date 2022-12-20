
const burgerBtn = document.querySelector('.nav-burger');
console.log(burgerBtn);
const navLinks = document.querySelector('.nav-links');
console.log(navLinks)

burgerBtn.addEventListener('click', burgerHandler);
navLinks.addEventListener('click', burgerHandler);

function burgerHandler() {
  console.log('clicked')
  navLinks.classList.toggle('visually-hidden');
}