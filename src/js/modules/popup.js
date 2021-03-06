const popup = (popupSelector, triggerSelector, closeSelector, overlaySelector) => {

    const popup = document.querySelector(popupSelector),
        popupToggles = document.querySelectorAll(triggerSelector),
        popupClose = document.querySelector(closeSelector),
        popupOverlay = document.querySelector(overlaySelector);

    let width = window.innerWidth;


        const lockScroll = () => {
            document.body.classList.add('lock');
        };

        const unlockScroll = () => {
            document.body.classList.remove('lock');
        };

       if (width <= 575 ) {

            popupToggles.forEach(item => {
                item.addEventListener('click', () => {
                    popup.classList.add('active');
                    popupOverlay.classList.add('active');
                    popupClose.classList.add('active');
                    lockScroll();

                });
            });

            if (popupClose) {
                popupClose.addEventListener('click', () => {

                    popup.classList.remove('active');
                    popupOverlay.classList.remove('active');
                    popupClose.classList.remove('active');
                    unlockScroll();
                });
            }


            window.addEventListener('click', (e) => {
                if ( e.target === popupOverlay) {
                        popup.classList.remove('active');
                        popupOverlay.classList.remove('active');
                        popupClose.classList.remove('active');
                        unlockScroll();
                    }
                });
       }

}
export default popup;