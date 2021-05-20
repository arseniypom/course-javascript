/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let currentDrag,
  startX = 0,
  startY = 0;

document.addEventListener('mousemove', (e) => {
  if (currentDrag) {
    currentDrag.style.top = e.clientY - startY + 'px';
    currentDrag.style.left = e.clientX - startX + 'px';
  }
});

export function createDiv() {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('draggable-div');
  const divStyle = {
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    width: Math.floor(Math.random() * 500),
    height: Math.floor(Math.random() * 500),
    left: Math.floor(Math.random() * window.innerWidth),
    top: Math.floor(Math.random() * window.innerHeight),
  };

  resultDiv.addEventListener('mousedown', (e) => {
    currentDrag = resultDiv;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  resultDiv.addEventListener('mouseup', () => (currentDrag = false));

  resultDiv.setAttribute(
    'style',
    `top: ${divStyle.top}px; left: ${divStyle.left}px; background-color:${divStyle.color}; width: ${divStyle.width}px;  height: ${divStyle.height}px;`
  );

  return resultDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
