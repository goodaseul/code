let sectionEffect = document.getElementById("section_effect");
const aniFix = gsap.timeline();

aniFix
    .to("#section_effect .t1", {
        autoAlpha: 0,
    })
    .to(["#section_effect .t2", "#section_effect .i1"], {
        autoAlpha: 0,
    })
    .from("#section_effect .i2", {
        y: -100,
        autoAlpha: 0,
    })
    .from("#section_effect .i3", {
        y: 100,
        autoAlpha: 0,
    })
    .from("#section_effect .i4", {
        y: -100,
        autoAlpha: 0,
    });

ScrollTrigger.create({
    animation: aniFix,
    trigger: sectionEffect,
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1, // pin을 자연스럽게 만들어줌
    id: "section_effect",
});
