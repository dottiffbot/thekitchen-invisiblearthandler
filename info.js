const instructions = document.querySelector(".boop");
const infoBtn = document.querySelector(".infoBtn");
const closeModal = document.querySelector(".close");

function infoDrop(){
  instructions.classList.toggle("beep");
  console.log('beep');
}

infoBtn.addEventListener('click', infoDrop);
closeModal.addEventListener('click', infoDrop);