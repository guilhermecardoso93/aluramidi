function playPom() {
  document.querySelector("#som_tecla_pom").play();
}

const listKeys = document.querySelectorAll(".tecla");
listKeys[0].onclick = playPom;
