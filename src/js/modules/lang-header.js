const langChange = (selector) => {
    const top = document.querySelector('.top');
    const topFlag = document.querySelector('.top__flag');
    const ukFlag = document.querySelector('#uk');
    const rusFlag = document.querySelector('#rus');
    const bottomArrow = document.querySelector('.bottom__arrow');

    topFlag.addEventListener('click', function(e) {
        if (e.target.classList.contains('bottom__arrow')) {
            e.target.classList.toggle('bottom__arrow--active');
            top.style.marginBottom = '30px';
        }
    });

    topFlag.forEach((item) => {
        item.addEventListener('click', () => {
            
        });
    });

   
}
export default 'langChange';