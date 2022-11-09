// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateBodyBGcolor(color) {
  document.body.style.backgroundColor = color;
}

class ColorSwitcher {
  constructor(updateBodyBGcolor) {
    this.intervalID = null;
    this.isActive = false;
    this.updateBodyBGcolor = updateBodyBGcolor;
    refs.stopBtn.disabled = true;
  }

  startChangeBGcolor() {
    if (this.isActive) {
      return;
    }

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    this.isActive = true;
    this.intervalID = setInterval(
      () => updateBodyBGcolor(getRandomHexColor()),
      1000
    );
  }

  stopChangeBGcolor() {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    clearInterval(this.intervalID);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher();

refs.startBtn.addEventListener('click', () =>
  colorSwitcher.startChangeBGcolor()
);
refs.stopBtn.addEventListener('click', () => colorSwitcher.stopChangeBGcolor());