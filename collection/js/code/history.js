const headerHeight = document.querySelector("header").clientHeight;
const navigation = document.querySelector(".hash_navigation .inner");
const navigationHeight = document.querySelector(".hash_navigation").offsetHeight;
const navigationLink = document.querySelectorAll(".hash_navigation li");
const navigationLinkA = document.querySelectorAll(".hash_navigation li a");
const sectors = document.querySelectorAll(".l_sub .year");
const year_conts = document.querySelectorAll(".year_cont");
window.onload = function () {
    ActiveMenu();
    window.addEventListener("scroll", ActiveMenu);

    DisplayContent();
    window.addEventListener("scroll", DisplayContent);

    ClickContent();
    window.addEventListener("click", ClickContent);
};

function ClickContent() {
    navigationLinkA.forEach((item, index) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let contentHref = e.currentTarget.getAttribute("href").split("#")[1];
            sectors[index].getAttribute(contentHref);
            if (sectors[index].getAttribute("id") == contentHref) {
                window.scroll({
                    behavior: "smooth",
                    top: sectors[index].offsetTop - navigationHeight - headerHeight,
                });
            }
        });
    });
}

function ActiveMenu() {
    let len = sectors.length;
    while (--len && window.scrollY < sectors[len].offsetTop - navigationHeight - headerHeight) {}

    navigationLink.forEach((item) => item.classList.remove("active"));
    navigationLink[len].classList.add("active");

    const navigationLeft = navigationLink[len].offsetLeft;
    const navigationWidth = Math.floor(navigationLink[len].clientWidth) * 1.5;
    const wW = window.innerWidth;
    navigation.scrollLeft = navigationLeft - wW + navigationWidth;
}

function DisplayContent() {
    const TriggerBottom = window.innerHeight / 3;
    year_conts.forEach((year_cont) => {
        year_conts[0].classList.add("active");
        const topBox = year_cont.getBoundingClientRect().top;
        if (topBox < TriggerBottom) {
            year_cont.classList.add("active");
        } else {
            year_cont.classList.remove("active");
        }
    });
}

const createCarousel = (carouselArray, instanceName, container, options) => {
    carouselArray.forEach((element, index) => {
        element.classList.add(instanceName + index);
        container[index] = new Swiper("." + instanceName + index, options);
    });
};

const carousels = [];
const carouselArray = Array.from(document.querySelectorAll(".swiper_history"));
const carouselOption = {
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 1,
    spaceBetween: 40,
    watchOverflow: true,
};
window.addEventListener("load", () => {
    createCarousel(carouselArray, "instance-", carousels, carouselOption);
    carouselBool = true;
});
