$(document).ready(function () {
    var visualSwiper = new Swiper(".visual_swiper", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass, index, total) {
                return '<span class="' + currentClass + '">' + index + " </span>" + '&nbsp; / &nbsp;<span class="' + totalClass + '">' + total + " </span>";
            },
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        loop: false,
    });
    $(".list .wrap_box").hover(function () {
        $(".list .wrap_box").removeClass("active");
        $(this).addClass("active");
    });

    var cont = $(".list .wrap_box");
    var num = 0;
    var contL = cont.length - 1;
    var listLoop = null;

    $(".section_why .list .wrap_box").hover(
        function () {
            clearInterval(listLoop);
            listLoop = null;

            const ix = $(".section_why .list .wrap_box").index($(this));

            num = ix;

            process();
        },
        function () {
            if (listLoop == null) listLoop = setInterval(time, 3000);
        }
    );

    function time() {
        if (num < contL) {
            num++;
        } else {
            num = 0;
        }

        process();
    }

    function process() {
        cont.each(function (i) {
            if (i == num) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    listLoop = setInterval(time, 3000);
});
