import langChange from './modules/lang-header';
import accordion from './modules/accordion';
import redBurger from './modules/redBurger';
import menuBurger from './modules/menuBurger';
import scrollHeader from './modules/scrollHeader';



window.addEventListener('DOMContentLoaded', () => {

    langChange('.top__flag');

    accordion('.submenu__link');

    redBurger();

    menuBurger();

    scrollHeader();

});