import langChange from './modules/lang-header';
import accordion from './modules/accordion';
import redBurger from './modules/redBurger';
import menuBurger from './modules/menuBurger';
import scrollHeader from './modules/scrollHeader';
import popup from './modules/popup';
import tabs from './modules/tabs';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import activeMenu from './modules/activeMenu';
import { swiper, swiperGalery } from './modules/swiper';
import showCard from './modules/showCard';


window.addEventListener('DOMContentLoaded', () => {

    langChange('.top__flag');

    accordion('.submenu__link');

    // accordion('.portfolio__list-header');

    redBurger();

    menuBurger();

    scrollHeader();

    popup('.popup__wrapper', '.benefit__item-circle', '.popup__close', '.popup__overlay');

    popup('.popup__wrapper', '.map__item-tag', '.popup__close', '.popup__overlay');

    tabs('.portfolio__list-title', '.portfolio__list-content', 'active');


    checkTextInputs('[name="name"]');
    checkTextInputs('[name="msg"]');

    forms();

    activeMenu();
    swiper;
    swiperGalery;

    showCard('.gallery__item.hidden', '.gallery__btn');
});