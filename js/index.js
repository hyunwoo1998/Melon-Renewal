$(document).ready(function () {
    // 1번째 캐러셀
    let owl1 = $('#main-carousel');
    owl1.owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    // 2번째 캐러셀
    let owl2 = $('#sub-carousel-1');
    owl2.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });
    // 3번째 캐러셀
    let owl3 = $('#sub-carousel-2');
    owl3.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    });

    $('.item').click(() => {
        location.replace('album.html');
    })

})