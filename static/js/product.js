import commonEvents from "./common";

commonEvents();

const productEvents = () => {
  console.log('Product page');
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

};

productEvents();