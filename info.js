const instructions = document.querySelector(".boop");
const infoBtn = document.querySelector(".infoBtn");
const closeModal = document.querySelector(".close");

// const scroll = document.querySelector("scroll")

function infoDrop(){
  instructions.classList.toggle("beep");
  document.body.style.overflow = "hidden";
  console.log('beep');
}

infoBtn.addEventListener('click', infoDrop);
closeModal.addEventListener('click', infoDrop);