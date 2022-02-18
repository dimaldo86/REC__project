const activeMenu = (menuSelector) => {
    const menuItems = document.querySelectorAll('.menu__link');




    menuItems.forEach(item => {
        console.log(item);
        item.addEventListener('click', () => {
            const url = document.location.href;
            console.log(url);
            if(url === item.href) {
               item.classList.add('active-link');
            }
        })

    });


};
export default activeMenu;