const colors = ["green", "red", "blue", "yellow", "white", "black"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', () => {
  randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
