// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

const drill = document.getElementById("drill");
const pallet = document.getElementById("pallet")

function playAudio (){
  drill.play();
}

function playAudioPallet(){
  pallet.play();
}

const dropdown = document.getElementById("toolbox")
const menu = document.getElementById("dropdown")
const instructions = document.querySelector(".boop")
const infoBtn = document.querySelector(".infoBtn")
const close = document.querySelector(".close")

function dripDrop(){
    menu.classList.toggle("show")
}

dropdown.addEventListener('click', dripDrop)

function infoDrop(){
  instructions.classList.toggle("beep")
  console.log('beep')
}

infoBtn.addEventListener('click', infoDrop)
close.addEventListener('click', infoDrop)
