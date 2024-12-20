window.addEventListener("load", function () {
    // quick
    quickScroll();
    window.addEventListener("resize", quickScroll);
    const btnPlus = document.querySelector(".btns .btn_plus");
    btnPlus.addEventListener("click", quickOpen);
});
//quick 함수
function quickScroll() {
    const quick = document.querySelector(".wrap_quick");
    const headerH = document.querySelector("header").offsetHeight;
    const mainSection = document.querySelector("main .section:nth-of-type(1)");
    const footer = document.querySelector("footer");
    const mainSectionH = mainSection.offsetHeight;

    window.addEventListener("scroll", function (e) {
        const pos = window.scrollY;
        const footerVal = window.innerHeight + pos;
        // on
        if (pos + mainSectionH - headerH >= mainSectionH) {
            quick.classList.add("on");
        }
        //fix
        if (footerVal >= footer.offsetTop) {
            quick.classList.add("fix");
        } else {
            quick.classList.remove("fix");
        }
    });
}

function quickOpen() {
    const quick = document.querySelector(".wrap_quick");

    quick.classList.toggle("open");
}
