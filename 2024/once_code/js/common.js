window.addEventListener("load", function () {
    // 헤더
    const header = document.querySelector("header"),
        depth1 = document.querySelectorAll(".header .depth1"),
        ham = document.querySelector(".menu_btn"),
        moDepth1 = document.querySelectorAll(".ham_menu  .depth1"),
        bg = document.querySelector(".bg"),
        moNav = document.querySelector(".ham_menu");

    let page_number;
    // page active
    if (window.location.href.indexOf("/effect") > -1) {
        page_number = 0;
    }
    if (depth1[page_number] !== undefined) {
        depth1[page_number].classList.add("active");
        moDepth1[page_number].classList.add("active");
    }

    window.addEventListener("scroll", function () {
        const sct = window.scrollY;
        if (sct >= header.clientHeight) {
            header.classList.add("on");
        } else {
            header.classList.remove("on");
        }
    });

    bg.addEventListener("mouseenter", function () {
        header.classList.add("open");
    });
    bg.addEventListener("mouseleave", function () {
        header.classList.remove("open");
    });

    depth1.forEach(function (el, i) {
        el.addEventListener("mouseenter", function () {
            header.classList.add("open");
        });
        el.addEventListener("mouseleave", function () {
            header.classList.remove("open");
        });
    });

    //mo
    ham.addEventListener("click", function () {
        if (moNav.classList.contains("open")) {
            header.classList.remove("open");
            moNav.classList.remove("open");
            document.querySelector("body").classList.remove("m_open");
        } else {
            document.querySelector("body").classList.add("m_open");
            header.classList.add("open");
            moNav.classList.add("open");
        }
    });

    // 모바일 헤더
    depth1List = document.querySelectorAll(".ham_menu .depth1");
    for (let i = 0; i < depth1List.length; i++) {
        depth1List[i].onclick = function () {
            if (this.lastElementChild.style.maxHeight) {
                hidePanels();
            } else {
                showPanel(this);
            }
        };
    }

    // 공통 스크롤 모션
    const controller = new ScrollMagic.Controller({});
    const target = document.querySelectorAll(".effect");

    target.forEach((item, index) => {
        var tween = TweenMax.from(item, 0.5, {
            opacity: 0,
        });
        var scene = new ScrollMagic.Scene({
            triggerElement: item,
            offset: "-100%",
        })
            .setTween(tween)
            .addTo(controller);
    });
    scrollActive();
    window.addEventListener("scroll", scrollActive);
});

function showPanel(elem) {
    hidePanels();
    elem.classList.add("on");
    elem.lastElementChild.style.maxHeight = elem.lastElementChild.scrollHeight + "px";
}

function hidePanels() {
    const depth2List = document.querySelectorAll(".ham_menu .depth2_list");
    for (let i = 0; i < depth2List.length; i++) {
        depth2List[i].style.maxHeight = null;
        depth1List[i].classList.remove("on");
    }
}

// header scroll
let lastScrollY = 0;
window.addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;

    const BrowserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;

    const scrollDown = scrollY > lastScrollY;

    if (BrowserScrollY > -1) {
        if (scrollDown) {
            document.querySelector("body").classList.add("scrollDown");
        } else {
            document.querySelector("body").classList.remove("scrollDown");
        }
    }
    lastScrollY = scrollY;
});
function scrollActive() {
    window.addEventListener("scroll", function (e) {
        const footerVal = window.pageYOffset + window.innerHeight;
        if (footerVal >= document.querySelector("main").offsetTop + document.querySelector("main").offsetHeight) {
            document.querySelector("body").classList.add("fix");
        } else {
            document.querySelector("body").classList.remove("fix");
        }
    });
}

//marquee
function Marquee(selector, speed, reverse) {
    const parentSelector = document.querySelector(selector);
    const firstElement = parentSelector.firstElementChild;
    let i = 0;

    if (reverse) parentSelector.classList.add("reverse");

    const moveItem = () => {
        if (reverse) {
            firstElement.style.marginRight = `-${i}px`;
        } else {
            firstElement.style.marginLeft = `-${i}px`;
        }
        if (i > firstElement.clientWidth) i = 0;
        i += speed;
        requestAnimationFrame(moveItem);
    };
    requestAnimationFrame(moveItem);
}

window.addEventListener("load", function () {
    Marquee(".marquee", 2, false);
});
