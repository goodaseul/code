function bgChange() {
    const bg2 = document.querySelector("#bg2");
    const bg3 = document.querySelector("#bg3");
    const bg4 = document.querySelector("#bg4");
    if (bg2.classList.contains("screening")) {
        document.querySelector("body").classList.add("bg2");
    } else {
        document.querySelector("body").classList.remove("bg2");
    }

    if (bg3.classList.contains("screening")) {
        document.querySelector("body").classList.add("bg3");
    } else {
        document.querySelector("body").classList.remove("bg3");
    }

    if (bg4.classList.contains("screening")) {
        document.querySelector("body").classList.add("bg4");
    } else {
        document.querySelector("body").classList.remove("bg4");
    }
}

function bgChangeM() {
    const tabActive1 = document.querySelector(".wrap_tab .tabActive1");
    const tabActive2 = document.querySelector(".wrap_tab .tabActive2");
    const tabActive3 = document.querySelector(".wrap_tab .tabActive3");
    let bg2, bg3, bg4;
    if (tabActive1.classList.contains("show")) {
        bg2 = tabActive1.querySelector(".bgChange2");
        bg3 = tabActive1.querySelector(".bgChange3");
        bg4 = tabActive1.querySelector(".bgChange4");

        if (bg2.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg2");
        } else {
            document.querySelector("body").classList.remove("bg2");
        }
        if (bg3.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg3");
        } else {
            document.querySelector("body").classList.remove("bg3");
        }
        if (bg4.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg4");
        } else {
            document.querySelector("body").classList.remove("bg4");
        }
    } else if (tabActive2.classList.contains("show")) {
        bg2 = tabActive2.querySelector(".bgChange2");
        bg3 = tabActive2.querySelector(".bgChange3");
        bg4 = tabActive2.querySelector(".bgChange4");
        if (bg2.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg2");
        } else {
            document.querySelector("body").classList.remove("bg2");
        }
        if (bg3.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg3");
        } else {
            document.querySelector("body").classList.remove("bg3");
        }
        if (bg4.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg4");
        } else {
            document.querySelector("body").classList.remove("bg4");
        }
    } else if (tabActive3.classList.contains("show")) {
        bg2 = tabActive3.querySelector(".bgChange2");
        bg3 = tabActive3.querySelector(".bgChange3");
        bg4 = tabActive3.querySelector(".bgChange4");
        if (bg2.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg2");
        } else {
            document.querySelector("body").classList.remove("bg2");
        }
        if (bg3.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg3");
        } else {
            document.querySelector("body").classList.remove("bg3");
        }
        if (bg4.classList.contains("screening")) {
            document.querySelector("body").classList.add("bg4");
        } else {
            document.querySelector("body").classList.remove("bg4");
        }
    }
}

infoShow();
function infoShow() {
    const induce = document.querySelector(".induce");

    setTimeout(() => {
        induce.classList.add("hide");
    }, 3000);
}
const swiperPc = new Swiper(".pc_cont.swiper-container", {
    slidesPerView: "auto",
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: true,
    },
    speed: 100,

    pagination: {
        el: ".progress",
        type: "progressbar",
    },
    mousewheel: {
        releaseOnEdges: true,
        enabled: true,
        sensitivity: 1,
    },
    direction: "horizontal",

    init: false,

    on: {
        slideChange: function () {
            bgChange();
        },
    },
});

swiperPc.init();

const controller = new ScrollMagic.Controller({ vertical: false });
const spyEls = document.querySelectorAll(".item");
const spyElsLast = document.querySelectorAll(".last");

spyEls.forEach(function (spyEl) {
    const tween = TweenMax.from(spyEl, 1, {});

    const scene = new ScrollMagic.Scene({
        triggerElement: spyEl,
        // triggerHook: 0.36,
        triggerHook: 0.77,
    })
        .setTween(tween)
        .setClassToggle(spyEl, "screening")
        // .addIndicators()
        .addTo(controller);
});

spyElsLast.forEach(function (spyEl) {
    const tween = TweenMax.from(spyEl, 1, {});

    const scene = new ScrollMagic.Scene({
        triggerElement: spyEl,

        triggerHook: 0.87,
    })
        .setTween(tween)
        .setClassToggle(spyEl, "screening")
        // .addIndicators()
        .addTo(controller);
});

//tab
const tabWrapper = document.querySelector(".topic ul");
const tabActive = document.querySelectorAll(".topic ul li");
const tabCont = document.querySelector(".mo_cont .wrapper");

const tabCont1 = document.querySelector(".wrap_tab .tabActive1");
const tabCont2 = document.querySelector(".wrap_tab .tabActive2");
const tabCont3 = document.querySelector(".wrap_tab .tabActive3");

tabActive.forEach((item, index) => {
    item.addEventListener("click", () => {
        swiperTab1.slideTo(0);
        swiperTab2.slideTo(0);
        swiperTab3.slideTo(0);

        document.querySelector("body").classList.remove("bg2");
        document.querySelector("body").classList.remove("bg3");
        document.querySelector("body").classList.remove("bg4");
        tabActive.forEach((item) => {
            item.classList.remove("active");
        });
        tabActive[index].classList.add("active");

        if (index === 0) {
            tabCont1.classList.add("show");
            tabCont2.classList.remove("show");
            tabCont3.classList.remove("show");

            tabWrapper.classList.remove("tabActive2");
            tabWrapper.classList.remove("tabActive3");
            tabWrapper.classList.add("tabActive1");
        } else if (index === 1) {
            tabCont2.classList.add("show");
            tabCont1.classList.remove("show");
            tabCont3.classList.remove("show");

            tabWrapper.classList.remove("tabActive1");
            tabWrapper.classList.remove("tabActive3");
            tabWrapper.classList.add("tabActive2");
        } else if (index === 2) {
            tabCont3.classList.add("show");
            tabCont1.classList.remove("show");
            tabCont2.classList.remove("show");

            tabWrapper.classList.remove("tabActive1");
            tabWrapper.classList.remove("tabActive2");
            tabWrapper.classList.add("tabActive3");
        }
    });
});

const swiperTab1 = new Swiper(".mo_cont.tabActive1", {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: true,
    },
    speed: 100,

    pagination: {
        el: ".progress",
        type: "progressbar",
    },
    mousewheel: {
        releaseOnEdges: true,
        enabled: true,
        sensitivity: 1,
    },
    direction: "horizontal",
    on: {
        slideChange: function () {
            bgChangeM();
        },
    },
});

const swiperTab2 = new Swiper(".mo_cont.tabActive2", {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: true,
    },
    speed: 100,

    pagination: {
        el: ".progress",
        type: "progressbar",
    },
    mousewheel: {
        releaseOnEdges: true,
        enabled: true,
        sensitivity: 1,
    },
    direction: "horizontal",
    on: {
        slideChange: function () {
            bgChangeM();
        },
    },
});

const swiperTab3 = new Swiper(".mo_cont.tabActive3", {
    observer: true,
    observeParents: true,
    slidesPerView: "auto",
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: true,
    },
    speed: 100,

    pagination: {
        el: ".progress",
        type: "progressbar",
    },
    mousewheel: {
        releaseOnEdges: true,
        enabled: true,
        sensitivity: 1,
    },
    direction: "horizontal",
    on: {
        slideChange: function () {
            bgChangeM();
        },
    },
});
