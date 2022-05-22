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
        let target = e.target;

        console.log(target);

        if (target.matches('.menu__link')) {
            burger.classList.toggle('open');
            submenu.classList.toggle('show');

            lockScroll();
        } else {
            unlockScroll();
        }
        unlockScroll();
    });




    };

export default redBurger;
