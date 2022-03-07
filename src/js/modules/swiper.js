
import Swiper from 'swiper';

const swiper = new Swiper(".my-swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

  export default swiper;