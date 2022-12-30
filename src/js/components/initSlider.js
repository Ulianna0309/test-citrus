import Swiper from 'swiper/bundle';


export const initSlider = () => {
    const swiper = new Swiper("[data-slider]", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });
}