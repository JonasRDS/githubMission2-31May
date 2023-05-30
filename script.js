// Backgroundd color white to default color 

const button = document.getElementById("colorButton");
const body = document.body;
let isWhite = false;

button.addEventListener("click", () => {
  if (isWhite) {
    body.style.backgroundColor = ""; 
    isWhite = false;
  } else {
    body.style.backgroundColor = "white";
    isWhite = true;
  }
});


// video play pause

var videoElement = document.getElementById("video-element");

videoElement.addEventListener("click", function () {
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
});

// loop audio play

var audio = document.getElementById("myAudio");

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  audio.play();
});

audio.pause();
