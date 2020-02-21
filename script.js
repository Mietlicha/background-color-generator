const color1 = document.querySelector('#value1');
const color2 = document.querySelector('#value2');
const cssCode = document.querySelector('#cssCode');
const body = document.querySelector('body');
const button = document.getElementById('button');

let setGradient = () => {
  body.style.background = `linear-gradient(220deg, ${color1.value}, ${color2.value}) no-repeat`;
  cssCode.textContent = body.style.background;
};

setGradient();

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let randomColor = () => {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
};

button.addEventListener('click', randomColor);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);
