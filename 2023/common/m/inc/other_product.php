<div class="wrap_other">
    <h3 class="tit inner">기타제품</h3>
    <div class="other">
        <div class="swiper-container swiper_other">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Column EPS Endurance Test</p>
                </div>
                <div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Column EPS Gearbox Endurance Test</p>
                </div>
                <div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">ABS Test</p>
                </div>
                <div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">EV Component Test</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Column EPS System Endurance Test</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">EPS System Mechanical Test</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Motor Endurance Test</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Aircraft Systems Testing</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Column EPS System EOL Test Suite</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Belt Drive EPS System EOL Test Suite, 2 lines</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">Rack MDPS System EOL Test Suite, 2 lines</p>
                </div>
				<div class="swiper-slide">
                    <p class="desc">스티어링 및 조향 관련 제품</p>
                    <p class="name">NVH Wheel-to-Wheel Steering System Testing</p>
                </div>
            </div>
            <div class="inner">
                <div class="swiper-pagination"></div>
                <div class="swiper-scrollbar">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    var swiperOther;
    var swiperOtherBarWidth = 0;
    $(document).ready(function(){
        var swiperOther = new Swiper(".swiper_other", {
            slidesPerView: "auto",
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper_other .swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass, index, total) {
                    return '<span class="' + currentClass + '">'+ index +' </span>' + ' / ' +'<span class="' + totalClass + '"> '+ total +' </span>';
                },
            },
            loop: true,
            spaceBetween: 50,
            init:false,
            on:{
                init : function(){
                    var length = $(".swiper_other .swiper-slide").not(".swiper-slide-duplicate").length;

                    swiperOtherBarWidth = $(".swiper-scrollbar").width() / length;
                    
                    $( ".swiper-scrollbar .bar").width( swiperOtherBarWidth );

                },
                activeIndexChange: function () {
                    try{
                        $(".swiper-scrollbar .bar").animate({left:swiperOtherBarWidth * swiperOther.realIndex});
                    }catch(e){}
                },
            }
        });
        swiperOther.init();
    })
</script>