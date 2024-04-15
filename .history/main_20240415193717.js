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

  key.onkeydown = function (event) {
    if (event.code === "Enter" || event.code === "Espace") {
      key.classList.add("ativa");
    }
  };

  key.onkeyup = function () {
    key.classList.remove("ativa");
  };
}
