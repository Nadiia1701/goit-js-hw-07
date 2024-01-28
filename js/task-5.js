"use strict"

const changeColorButton = document.querySelector(".change-color");

function changeBodyColor() {
  const bodyElement = document.querySelector('body');
  const colorElement = document.querySelector('.color');
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  colorElement.innerText = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener("click", changeBodyColor)


