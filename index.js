const btn = document.querySelector(".button");

const middleFinger = document.querySelector(".middle-finger");

btn.addEventListener("click", () => {
  middleFinger.classList.remove("hidden");
});

var butt = document.getElementById('kosesh').style.display = 'none';

setTimeout(() => {document.getElementById('kosesh').style.display = 'block';}, 4000);