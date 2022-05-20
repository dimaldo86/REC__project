const modal = () => {

    const popup = document.querySelector('.modal__wrapper'),
        popupToggle = document.querySelector('.row__top .top__feedback-link'),
        popupToggleMenu = document.querySelector('.row__bottom .top__feedback-link'),
        popupClose = document.querySelector('.modal__close'),
        popupOverlay = document.querySelector('.modal__overlay');

    let width = window.innerWidth;



        const lockScroll = () => {
            document.body.classList.add('lock');
        };

        const unlockScroll = () => {
            document.body.classList.remove('lock');
        };

          
                popupToggle.addEventListener('click', () => {
                    popup.classList.add('active');
                    popupOverlay.classList.add('active');
                    popupClose.classList.add('active');
                    lockScroll();
                });




            popupClose.addEventListener('click', () => {
                popup.classList.remove('active');
                popupOverlay.classList.remove('active');
                popupClose.classList.remove('active');
                unlockScroll();

            });

            window.addEventListener('click', (e) => {
                if ( e.target === popupOverlay) {
                    popup.classList.remove('active');
                    popupOverlay.classList.remove('active');
                    popupClose.classList.remove('active');
                    unlockScroll();
                }
            });



    if(width <= 767) {
        popupToggleMenu.addEventListener('click', () => {
            popup.classList.add('active');
            popupOverlay.classList.add('active');
            popupClose.classList.add('active');
            lockScroll();
        });


        popupClose.addEventListener('click', () => {
            popup.classList.remove('active');
            popupOverlay.classList.remove('active');
            popupClose.classList.remove('active');
            unlockScroll();

        })

        window.addEventListener('click', (e) => {
            if ( e.target === popupOverlay) {
                popup.classList.remove('active');
                popupOverlay.classList.remove('active');
                popupClose.classList.remove('active');
                unlockScroll();
            }
        })

    }


};
export default modal;