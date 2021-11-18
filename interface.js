const sound = document.getElementById("sound");


function playAudio (){
  sound.play();
}


const dropdown = document.getElementById("toolbox");
const menu = document.getElementById("dropdown");


function dripDrop(){
    menu.classList.toggle("show");
}

dropdown.addEventListener('click', dripDrop);


