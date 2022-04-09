
 import Swiper from 'swiper/bundle';


const swiper = new Swiper(".my-swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });

  const swiperGalery = new Swiper(".my__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      950: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
    navigation: {
      nextEl: ".bi-arrow-right",
      prevEl: ".bi-arrow-left",
    },
  });

  const swiper3 = new Swiper(".description__swiper", {

    spaceBetween: 16,
    slidesPerView: 5,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  const swiper2 = new Swiper(".description__swiper2", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper3,
    },
  });

  export  { swiper, swiperGalery, swiper2, swiper3 };