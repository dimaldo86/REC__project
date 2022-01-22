
import './index.html';
// подключение стилей
import './scss/style.scss';
import './js/main';
import 'bootstrap';
import { createPopper } from '@popperjs/core';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip, {
  placement: 'top',
});



