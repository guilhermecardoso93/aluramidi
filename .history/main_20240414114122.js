function playSound(soundId) {
  document.querySelector(soundId).play();
}

const listKeys = document.querySelectorAll(".tecla");


let counter = 0;

while (counter < listKeys.length) {
  const instrument = listKeys[counter].classList[1];

  console.log(instrument)

  listKeys[counter].onclick = function () {
    playSound();
  };

  counter = counter + 1;
}
