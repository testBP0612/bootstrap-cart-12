const carouselSwiper = new Swiper("#carousel-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    effect: "fade",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 常數 定義好後不會再去改動的 用 const
// 題目：原始情況                3 欄位
//                  <= 992px 變 2 欄位
//                  <= 768px 變 1 欄位
const productSwiper = new Swiper("#product-swiper", {
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 769px
        769: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 993px
        993: {
          slidesPerView: 3,
          spaceBetween: 30
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});