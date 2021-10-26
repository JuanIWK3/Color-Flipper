const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');
let hexColor = '#';

btn.addEventListener("click", () => {
  for (let i = 0; i < 6; i++) {
    randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
  hexColor = '#'

})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}