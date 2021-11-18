const sound = document.getElementById("sound");


function playAudio (){
  sound.play();
}


const dropdown = document.getElementById("toolbox");
const menu = document.getElementById("dropdown");
const instructions = document.querySelector(".boop");
const infoBtn = document.querySelector(".infoBtn");
const closeModal = document.querySelector(".close");

function dripDrop(){
    menu.classList.toggle("show");
}

dropdown.addEventListener('click', dripDrop);

function infoDrop(){
  instructions.classList.toggle("beep");
  console.log('beep');
}

infoBtn.addEventListener('click', infoDrop);
closeModal.addEventListener('click', infoDrop);
