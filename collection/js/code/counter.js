gsap.registerPlugin(ScrollTrigger);

sectionAnimation();

function sectionAnimation() {
    ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scrub: true,
        start: "100px 80%",
        end: "+=100",
        // markers: true,
    });

    var sections = document.querySelectorAll("section");

    sections.forEach(function (section, index) {
        // gsap.set(section, {
        //     y: 0,
        //     opacity: 0,
        // });

        gsap.to(section, {
            // y: 0,
            // opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: sections[index],
                onEnter: () => animText(sections, index),
                onLeave: () => resetAnimText(sections, index),
            },
        });
    });
}

function resetAnimText(sections, index) {
    if (sections[index].id === "fast-facts") {
        console.log("resetAnimText", sections[index].id);
    }
}

function animText(sections, index) {
    if (sections[index].id === "fast-facts") {
        console.log("called", sections[index].id);

        var animCounters = document.querySelectorAll(".count");

        animCounters.forEach(function (counter) {
            var countTo = parseInt(counter.getAttribute("data-count"));
            var startCount = 0;

            var duration = 3000;
            var startTime = null;

            function animateCount(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = timestamp - startTime;
                var current = Math.min(progress / duration, 1);
                var now = Math.ceil(current * countTo);

                counter.textContent = now.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                //+ "+"

                if (progress < duration) {
                    window.requestAnimationFrame(animateCount);
                }
            }

            window.requestAnimationFrame(animateCount);
        });
    }
}
