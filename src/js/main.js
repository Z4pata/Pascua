import "../css/style.css";

document.getElementById('magicButton').addEventListener('click', function() {
  const rabbit = document.getElementById('rabbit');
  rabbit.classList.toggle('hidden');  // Toggle visibility

  // Reproducir sonido al hacer clic (puedes personalizar el sonido si lo deseas)
  const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
  audio.play();
});
