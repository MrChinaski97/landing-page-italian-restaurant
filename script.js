'use strict';

const btnElement = document.getElementById('btnElement');
btnElement.addEventListener('click', () => {
  setTimeout(console.log('Hello World'), 3000);
});
