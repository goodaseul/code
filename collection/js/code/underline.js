let contents;

// hover line
function hoverLine(objs) {
    objs.forEach((obj) => {
        let chkNum = obj.querySelectorAll(".under");

        if (chkNum.length > 0) {
            // mouse on
            obj.addEventListener("mouseover", function () {
                obj.querySelector(".under").classList.add("on");
            });
            // mouse off
            obj.addEventListener("mouseout", function () {
                obj.querySelector(".under").classList.remove("on");
            });
        } else if (chkNum.length <= 0) {
            return;
        }
    });
}

window.addEventListener("load", function () {
    // sub
    // swiper / content hover 시 underline
    contents = document.querySelectorAll(".content");
    swiperSlides = document.querySelectorAll(".swiper-slide");

    hoverLine(contents);
    hoverLine(swiperSlides);
});
