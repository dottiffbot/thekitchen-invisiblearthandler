const instructions = document.querySelector(".boop");
const infoBtn = document.querySelector(".infoBtn");
const closeModal = document.querySelector(".close");
const body = document.querySelector("body");
const scroll = document.querySelector("scroll")

function infoDrop(){
  instructions.classList.toggle("beep");
  // body.classList.toggle("scroll")
  console.log('beep');
}

infoBtn.addEventListener('click', infoDrop);
closeModal.addEventListener('click', infoDrop);