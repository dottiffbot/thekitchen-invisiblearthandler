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

window.addEventListener('load', () => {
        // noinspection JSUnresolvedVariable
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'audio-autoplay.wav');
        xhr.responseType = 'arraybuffer';
        xhr.addEventListener('load', () => {
          let playsound = (audioBuffer) => {
            let source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioCtx.destination);
            source.loop = true;
            source.start();

          }

          //   setTimeout(function () {
          //     let t = document.createElement('p');
          //     t.appendChild(document.createTextNode((new Date()).toLocaleString() + ': Sound played'));
          //     document.querySelector('.output').appendChild(t);
          //     playsound(audioBuffer);
          //   }, 1000 + Math.random()*2500);
          // };

        //   audioCtx.decodeAudioData(xhr.response).then(playsound);
        // });
      //   xhr.send();
      // });