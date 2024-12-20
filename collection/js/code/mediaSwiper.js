// swiper fraction 함수
function fractionActive(current, total, num, totalLength) {
    if (totalLength > 9) {
        total.innerText = totalLength;
    } else {
        total.innerText = "0" + totalLength;
    }

    if (num + 1 > 9) {
        current.innerText = num + 1;
    } else {
        current.innerText = "0" + (num + 1);
    }
}

// only mobile swiper_mo
let windowWidth;
let swiperMo = undefined;

function initPubSwiper() {
    windowWidth = window.innerWidth;

    // 분기점 수정
    if (windowWidth < 1200 && swiperMo == undefined) {
        swiperMo = new Swiper(".swiper_mo", {
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: " .swiper-button-prev",
            },
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            on: {
                init: function () {
                    let current = document.querySelector(".wrap_progress .swiper-pagination-current");
                    let total = document.querySelector(".wrap_progress .swiper-pagination-total");
                    fractionActive(current, total, this.realIndex, this.slides.length);
                },
                slideChange: function () {
                    let current = document.querySelector(".wrap_progress .swiper-pagination-current");
                    let total = document.querySelector(".wrap_progress .swiper-pagination-total");
                    fractionActive(current, total, this.realIndex, this.slides.length);
                },
            },
            slidesPerView: "auto",
            centeredSlides: true,
        });
    } else if (windowWidth >= 1200 && swiperMo != undefined) {
        swiperMo.destroy();
        swiperMo = undefined;
    }
    // 분기점 수정 완료
}
initPubSwiper();
window.addEventListener(
    "resize",
    function () {
        windowWidth = window.innerWidth;
        initPubSwiper();
    },
    true
);
