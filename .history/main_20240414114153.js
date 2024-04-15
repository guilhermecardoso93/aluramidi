function playSound(soundId) {
  document.querySelector(soundId).play();
}

const listKeys = document.querySelectorAll(".tecla");

let counter = 0;

while (counter < listKeys.length) {
  const key = listKeys[counter];
  const instrument = key.classList[1];

  console.log(instrument);

  key.onclick = function () {
    playSound();
  };

  counter = counter + 1;
}
