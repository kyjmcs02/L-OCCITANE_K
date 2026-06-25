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
    $('.arrow_right').click(function () {
        owlRoutine.trigger('next.owl.carousel');
    });
    $('.arrow_left').click(function () {
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

    /* heritage 섹션 */
$(document).ready(function() {
    // 1. Owl Carousel 초기화
    var owl = $('.heritage_img');
    
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,       // 기본 네비게이션 사용 안 함
        dots: false,      // 하단 점도 숨김
        items: 1,         // 한 번에 한 장씩
        autoplay: false,
        autoHeight: false
    });

    // 2. 화살표 클릭 이벤트
    $('.arrow_left').on('click', function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.arrow_right').on('click', function() {
        owl.trigger('next.owl.carousel');
    });
});

/* sub_Our_Commitments */    
$(document).ready(function(){
    var $owl = $(".commitments_img_wrap");

    $owl.owlCarousel({
        loop: true,           // 마우스로 계속 넘길 수 있게 설정
        mouseDrag: true,      // 마우스 드래그 활성화
        touchDrag: true,      // 터치 드래그 활성화
        dots: false,          // 기본 도트 제거
        items: 4,
        margin: 96,
        nav: false
    });

    // 1. 라인 생성
    if (!$(".progress-container").length) {
        $owl.after('<div class="progress-container"><div class="progress-bar-fill"></div></div>');
    }

    // 2. 바 위치 업데이트
    $owl.on('changed.owl.carousel', function(event) {
        if (!event.item) return;
        
        var total = event.item.count;
        var active = event.item.index;
        
        // loop 사용 시 복제본(clone)으로 인해 인덱스가 꼬이는 것을 방지
        // 실제 데이터 개수(total)를 기준으로 비율을 계산
        var ratio = (active % total) / (total - 1);
        
        var maxLeft = 470 - 140; // 330px 이동
        var newLeft = ratio * maxLeft;

        $(".progress-bar-fill").css("left", newLeft + "px");
    });
});





});
