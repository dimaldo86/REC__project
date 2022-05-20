const menuBurger = () => {
    const blueBurger = document.querySelector('.burger-blue'),
            menu = document.querySelector('.menu'),
            overlay = document.querySelector('.overlay');

    const lockScroll = () => {
                document.body.classList.toggle('lock');
            }

    const unlockScroll = () => {
                document.body.classList.remove('lock');
            }

    blueBurger.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
        blueBurger.classList.toggle('open-blue');
        overlay.classList.toggle('active');
        lockScroll();
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('show-menu');
        blueBurger.classList.remove('open-blue');
        overlay.classList.remove('active');
        unlockScroll();
    });
};

export default menuBurger;