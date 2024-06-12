$(function () {
    $(window).scroll(function () {
        $(".header").css({ left: 0 - $(this).scrollLeft() });
    });
    /* header scroll */

    if ($(".header").length > 0) {
        scrollHeaderHandler();
        $(window).scroll(scrollHeaderHandler);
    }

    /* //gnb 펼쳐지는
    $(".gnb").hover(function(){
        $(".gnb_bg").css({display:"block"})
        $(".depth2_list").css({display:"block"})
    },
    function(){
        $(".gnb_bg").css({display:"none"})
        $(".depth2_list").css({display:"none"})
    })
    $(".gnb_bg").hover(function(){
        $(".gnb_bg").css({display:"block"})
        $(".depth2_list").css({display:"block"})
    },
    function(){
        $(".gnb_bg").css({display:"none"})
        $(".depth2_list").css({display:"none"})
    })
    */

    /* header active */
    if (window.location.href.indexOf("/about") > -1) {
        $(".gnb > .depth1").eq(0).addClass("active");
    } else if (window.location.href.indexOf("/product") > -1 || window.location.href.indexOf("/product/view") > -1) {
        $(".gnb > .depth1").eq(2).addClass("active");
    }

    /* scrollmagic 효과 */
    var controller = new ScrollMagic.Controller();
    $(".effect").each(function (target) {
        var tween = TweenMax.from($(this), 1, {
            autoAlpha: 0,
            opacity: 0,
            y: "50",
            // ease: Expo.easeInOut,
        });
        // build a scene
        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "100%",
            // scrub: 1,
            // triggerHook: 1,
            // reverse: false,
        })
            .setTween(tween) // trigger a TweenMax.to tween
            .addTo(controller);
    });

    /* tab */
    let wrapTab = document.querySelectorAll(".tab li");
    let wrapCont = document.querySelectorAll(".wrap_tab_cont .cont");
    wrapTab.forEach((item, index) => {
        item.addEventListener("click", () => {
            wrapTab.forEach((item) => {
                item.classList.remove("active");
            });
            wrapTab[index].classList.add("active");
            wrapCont.forEach((item) => {
                item.classList.remove("active");
            });
            wrapCont[index].classList.add("active");
        });
    });

    /* marquee */
    var $marquee = $(".marquee");
    var $marqueeTarget = $marquee.find(".txt");
    var marqueeFx = function (direction, target) {
        $marqueeTarget.css({ "background-position": "-=1" });
    };
    var marqueeInterval = setInterval(marqueeFx, 15);

    marqueeInterval;
});
/* header scroll */
function scrollHeaderHandler() {
    if ($(document).scrollTop() > 10) {
        $(".header").addClass("on");
    } else {
        $(".header").removeClass("on");
    }
}
