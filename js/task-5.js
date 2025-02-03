function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnElem = document.querySelector('.change-color');
const myElem = document.querySelector('.color');
btnElem.addEventListener('click', onBtnClick);
function onBtnClick() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}