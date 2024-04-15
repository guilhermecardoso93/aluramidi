function playSound(soundId) {
  document.querySelector(soundId).play();
}

const listKeys = document.querySelectorAll(".tecla");

for (let counter = 0; counter < listKeys.length; counter++) {
  const key = listKeys[counter];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  console.log(instrument);

  key.onclick = function () {
    playSound(idAudio);
  };
}
