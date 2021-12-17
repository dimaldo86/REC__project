const popup = () => {

    const popup = document.querySelector('.popup__wrapper'),
        popupToggles = document.querySelectorAll('.benefit__item-circle'),
        popupClose = document.querySelector('.popup__close'),
        popupOverlay = document.querySelector('.popup__overlay');
    

        const lockScroll = () => {
            document.body.classList.add('lock');
        };
        
        const unlockScroll = () => {
            document.body.classList.remove('lock');
        };

        

        let width = window.innerWidth;

       if (width <= 575 ) {
  
            popupToggles.forEach(item => {
                item.addEventListener('click', () => {
                    popup.classList.add('active');
                    popupOverlay.classList.add('active');
                    popupClose.classList.add('active');
                    lockScroll();
                    
                });
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
       } 

}
export default popup;