let btn = document.querySelector('.btn');
let audio = document.querySelector('#audio');
let body = document.querySelector('body');

btn.onclick = function () {
    
    body.classList.toggle('on');
    
    // Playing the audio
    audio.currentTime = 0; // Reset audio to the start on each click
    audio.play();
};
