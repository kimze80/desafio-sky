
$(document).ready(function(){
  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      600: {
        // slidesPerView: 1,
        spaceBetween: 30,
      },

      1024: {
        spaceBetween: 48,
      }
    }
    
  });
});
