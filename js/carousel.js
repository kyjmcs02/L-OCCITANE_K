$(document).ready(function () {
    
    /* best_seller */
    var owl = $('.best_contents_wrap');
    owl.owlCarousel({
        margin: 20, /* 아이템사이간격 */
        loop: true, /* 무한 반복 */
        dots: false, /* 아래 점 숨기기 */
        nav: false, /* 화살표 숨기기 */
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        /* 아이템 3.5개 보이기 설정 */
        responsive: {
          0: { items: 1.5, center: true },
        480: { items: 2.5, center: false },
        600: { items: 2.5, center: false },
        768: { items: 2.5, center: false },
        1024: { items: 3.5, center: false },
        1280: { items: 3.5, center: false },
        1920: { items: 3.5, center: false },
        2400: { items: 5, center: false }
        }
    })

   /* routine 섹션*/
    var owlRoutine = $('.routine_slider');
    owlRoutine.owlCarousel({
        items: 1,           
        loop: true, /* 무한 반복 */       
        margin: 0,
        nav: false,         
        dots: true,        
        smartSpeed: 500     
    });

   /* arrow */
    $('.arrow_right').click(function() {
        owlRoutine.trigger('next.owl.carousel');
    });
    $('.arrow_left').click(function() {
        owlRoutine.trigger('prev.owl.carousel');
    });



    /* gift_selection 섹션 */
    var owlGift = $('.gift_contents_wrap');

    owlGift.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: false,
        dots: true,
        dotsEach: 2,
        slideBy: 1,
        smartSpeed: 500
    });












});
