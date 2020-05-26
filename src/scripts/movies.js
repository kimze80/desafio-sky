
function swiper(params, item) {
  const list = `<div class="swiper-slide"><img src="${item.images[0].url}"><i class="fas fa-shopping-cart"></i></div>`
  var params = new Swiper(`.${params}`, {
    slidesPerView: 'auto',
    slidesPerGroup: 3,
    spaceBetween: 10,
    resistance: false,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    breakpoints: {
      767: {
        slidesPerGroup: 5,
      },
    }
  });
  params.prependSlide(list);
}

$.get('https://sky-frontend.herokuapp.com/movies', data => {
  data[2].movies.forEach(item => {
    const horror = item.categories.indexOf("Terror");
    const thriller = item.categories.indexOf("Suspense");
    (horror != -1 || thriller != -1) && swiper('swiper2', item)
  });
})

$.get('https://sky-frontend.herokuapp.com/movies', data => {
  data[2].movies.forEach(item => {
    const adventure = item.categories.indexOf("Ação e Aventura");
    adventure != -1 && swiper('swiper3', item)
  });
})

$.get('https://sky-frontend.herokuapp.com/movies', data => {
  data[2].movies.forEach(item => {
    const comedy = item.categories.indexOf("Comédia");
    comedy != -1 && swiper('swiper4', item)
  });
})

$.get('https://sky-frontend.herokuapp.com/movies', data => {
  data[2].movies.forEach(item => {
    const drama = item.categories.indexOf("Drama");
    drama != -1 && swiper('swiper5', item)
  });
})
