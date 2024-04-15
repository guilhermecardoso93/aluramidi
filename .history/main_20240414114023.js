function playSound(soundId) {
  document.querySelector(soundId).play();
}

const listKeys = document.querySelectorAll(".tecla");

listKeys[0].onclick = playPom;

let counter = 0;

while (counter < listKeys.length) {
const instrument = listKeys[counter].classList[1]

  listKeys[counter].onclick = function() {
    playSound()
  };

  counter = counter + 1;
}
