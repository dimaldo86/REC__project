
import accordion from './modules/accordion';
import redBurger from './modules/redBurger';
import menuBurger from './modules/menuBurger';
import scrollHeader from './modules/scrollHeader';
import popup from './modules/popup';
import tabs from './modules/tabs';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import { swiper, swiperGalery, swiper2, swiper3 } from './modules/swiper';
import showCard from './modules/showCard';
import modal from './modules/modal';
import arrowShow from './modules/arrowShow';





window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};

    accordion('.submenu__link');

    accordion('.portfolio__list-header');

    redBurger();

    menuBurger();

    scrollHeader();

    popup('.popup__wrapper', '.benefit__item-circle', '.popup__close', '.popup__overlay');

    popup('.popup__wrapper', '.map__item-tag', '.popup__close', '.popup__overlay');

    tabs('.portfolio__list-title', '.portfolio__list-content', 'active');


    checkTextInputs('[name="name"]');
    checkTextInputs('[name="msg"]');


    forms(modalState);


    swiper;
    swiperGalery;
    swiper2;
    swiper3;

    showCard('.portfolio__item.hidden', '.portfolio__btn');

    modal();

    arrowShow('[data-bs-toggle="dropdown"]', '.bottom__arrow');

});