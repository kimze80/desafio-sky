fetch('https://sky-frontend.herokuapp.com/movies')
  .then(res => res.json())
  .then(json => {
    json[2].movies.forEach(item => {
      const horror = item.categories.indexOf("Terror");
      const thriller = item.categories.indexOf("Suspense");
      const list = `<div class="swiper-slide"><img src="${item.images[0].url}"></div>`
      if (horror != -1 || thriller != -1) {
        var swiper2 = new Swiper('.swiper2', {
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
        swiper2.prependSlide(list);
      }
    });
  })
  .catch(() => {
    $('#horror').html('Não há nenhum filme nessa categoria');
  });


fetch('https://sky-frontend.herokuapp.com/movies')
  .then(res => res.json())
  .then(json => {
    json[2].movies.forEach(item => {
      const adventure = item.categories.indexOf("Ação e Aventura");
      const list = `<div class="swiper-slide"><img src="${item.images[0].url}"></div>`
      if (adventure != -1) {
        var swiper3 = new Swiper('.swiper3', {
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
        swiper3.prependSlide(list);
      }
    });
  })
  .catch(() => {
    $('#adventure').html('Não há nenhum filme nessa categoria');
  });


fetch('https://sky-frontend.herokuapp.com/movies')
  .then(res => res.json())
  .then(json => {
    json[2].movies.forEach(item => {
      const comedy = item.categories.indexOf("Comédia");
      const list = `<div class="swiper-slide"><img src="${item.images[0].url}"></div>`
      if (comedy != -1) {
        var swiper4 = new Swiper('.swiper4', {
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
        swiper4.prependSlide(list);
      }
    });
  })
  .catch(() => {
    $('#comedy').html('Não há nenhum filme nessa categoria');
  });

  fetch('https://sky-frontend.herokuapp.com/movies')
  .then(res => res.json())
  .then(json => {
    json[2].movies.forEach(item => {
      const drama = item.categories.indexOf("Drama");
      const list = `<div class="swiper-slide"><img src="${item.images[0].url}"></div>`
      if (drama != -1) {
        var swiper5 = new Swiper('.swiper5', {
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
        swiper5.prependSlide(list);
      }
    });
  })
  .catch(() => {
    $('#drama').html('Não há nenhum filme nessa categoria');
  });