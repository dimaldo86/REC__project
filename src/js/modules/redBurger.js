const redBurger = () => {
    const burger = document.querySelector('.burger-red'), 
            triggerBurger = document.querySelector('.burger__icon'), 
            submenu = document.querySelector('.submenu');

    const lockScroll = () => {
        document.body.classList.add('lock');
    }

    const unlockScroll = () => {
        document.body.classList.remove('lock');
    }



    triggerBurger.addEventListener('click', (e) => {

        burger.classList.add('open');
        submenu.classList.add('show');
        lockScroll();

    });


    };

export default redBurger;
    