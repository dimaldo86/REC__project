import langChange from './modules/lang-header';
import accordion from './modules/accordion';
import redBurger from './modules/redBurger';
import menuBurger from './modules/menuBurger';
import scrollHeader from './modules/scrollHeader';
import popup from './modules/popup';
import tabs from './modules/tabs';
import splide from './modules/splide'






window.addEventListener('DOMContentLoaded', () => {

    langChange('.top__flag');

    accordion('.submenu__link');

    // accordion('.portfolio__list-header');

    redBurger();

    menuBurger();

    scrollHeader();
    
    popup();

    tabs('.portfolio__list-title', '.portfolio__list-content', 'active');

    splide();
});