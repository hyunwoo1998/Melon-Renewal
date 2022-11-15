$(document).ready(function () {
    // 메뉴바 밑줄 긋기
    let menu = $('.nav-underline');
    menu.hover(
        function () {
            $('.menuBar', this).stop().slideDown(200);
        },
        function () {
            $('.menuBar', this).stop().slideUp(200);
        }
    );
    // 인기 검색어 보기
    let icon = $('.recommend-icon');
    icon.click(function () {
        $('.recommend').stop().slideToggle(200);
        if ($('.icon').hasClass('fa-caret-down')) {
            $('.icon').removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
            $('.icon').removeClass('fa-caret-up').addClass('fa-caret-down');
        }
    });
    // 특정 위치에서 탑 버튼 활성화
    $(window).scroll(function () {
        if ($(this).scrollTop() > 130) {
            $('.top-btn').stop().fadeIn();
        } else {
            $('.top-btn').stop().fadeOut();
        }
    });
    // 탑 버튼 클릭시 스크롤 부드럽게 이동
    $('.top-btn').click(function () {
        $('html,body').stop().animate({ scrollTop: 0 }, 300);
        return false;
    });
})