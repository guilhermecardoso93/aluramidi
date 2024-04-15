function playSound(soundId) {
  const element = document.querySelector(soundId);

  if (element === null) {
    alert("Elemento não encontrado!");
    return;
  } else if (element !== null) {
    if ((element.localName = "audio")) {
      element.play();
    }
  }
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

  key.onkeyup = function (event) {
    if (event.code === "Enter" || event.code === "Espace") {
      key.classList.remove("ativa");
    }
  };
}
