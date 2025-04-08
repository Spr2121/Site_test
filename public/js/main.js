$(document).ready(function(){
  $('.product-slider').slick({
    slidesToShow: 3,         // Количество отображаемых карточек
    slidesToScroll: 1,       // Прокручивать по одной за раз
    autoplay: false,         // Автопрокрутка; можно включить true, если нужно
    arrows: true,            // Показывать стрелки навигации
    prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
    nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
