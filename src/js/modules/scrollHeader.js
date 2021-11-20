const scrollHeader = () => {
    window.addEventListener('scroll', () =>  {
        const header = document.querySelector('.header'),
              windowScroll = window.pageYOffset;
    
        
        if (windowScroll > 80) {
            header.classList.add('header__fixed');
        }  else {
            header.classList.remove('header__fixed');
        }   
    }) ; 
}
export default scrollHeader;