$(function () {
    $(".btn_menu").click(function () {
        $(".header").toggleClass("open");
        $(".header_full").slideToggle(400);
    });
    $(".header .header_full .depth1").click(function () {
        var _this = this;

        $(".header .header_full .depth1").each(function (j, v2) {
            if ($(_this).index() == $(this).index()) {
                $(_this).toggleClass("active");
                $(_this).find(".depth2_list").stop().slideToggle();
            } else {
                $(v2).removeClass("active");
                $(v2).find(".depth2_list").stop().slideUp();
            }
        });
    });
    /* header active */
    if (window.location.href.indexOf("/about") > -1) {
        $(".depth1_list > .depth1").eq(0).addClass("active");
    } else if (window.location.href.indexOf("/product") > -1 || window.location.href.indexOf("/product/view") > -1) {
        $(".depth1_list > .depth1").eq(1).addClass("active");
    }
    /* header active */
});
/* header scroll */
function scrollHeaderHandler() {
    if ($(document).scrollTop() > 10) {
        $(".header").addClass("on");
    } else {
        $(".header").removeClass("on");
    }
}
