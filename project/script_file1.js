function locomotive_scroll_aniamtion() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },

        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
locomotive_scroll_aniamtion();


function nav_animation() {

    gsap.to("#nav-part1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: 1.5
        }
    });
    gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: 1.5
        }
    });
}
nav_animation();


function videoplaybtanimation() {
    var vc = document.querySelector("#video-container");
    var playbt = document.querySelector("#play");
    vc.addEventListener("mouseenter", function () {
        gsap.to(playbt, {
            scale: 1,
            opacity: 1
        });
    });
    vc.addEventListener("mouseleave", function () {
        gsap.to(playbt, {
            scale: 0,
            opacity: 0
        });

    });
    vc.addEventListener("mousemove", function (dets) {
        gsap.to(playbt, {
            left: dets.x - 20,
            top: dets.y - 30
        });
    });
}
videoplaybtanimation();


function headingorvideo() {

    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    });
    gsap.from("#page1 #video-container", {
        scale: 0.8,
        opacity: 0,
        delay: 0.8,
        duration: 0.9,

    });
}
headingorvideo();


function mousebgcolor() {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        });
    });




    var a = document.querySelector("#child1");
    a.addEventListener("mouseenter", function () {
        cursor.style.backgroundColor = " beige";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1)"
        });
    });
    a.addEventListener("mouseleave", function () {
        cursor.style.backgroundColor = " #F7F7F7";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)"
        });
    });


    var b = document.querySelector("#child2");
    b.addEventListener("mouseenter", function () {
        cursor.style.backgroundColor = "white";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1)"
        });
    });
    b.addEventListener("mouseleave", function () {
        cursor.style.backgroundColor = " #F7F7F7";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)"
        });
    });



    var c = document.querySelector("#child3");
    c.addEventListener("mouseenter", function () {
        cursor.style.backgroundColor = " rgb(230, 223, 216)";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1)"
        });
    });
    c.addEventListener("mouseleave", function () {
        cursor.style.backgroundColor = " #F7F7F7";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)"
        });
    });



    var d = document.querySelector("#child4");
    d.addEventListener("mouseenter", function () {
        cursor.style.backgroundColor = " rgb(183, 180, 177)";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1)"
        });
    });
    d.addEventListener("mouseleave", function () {
        cursor.style.backgroundColor = " #F7F7F7";
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)"
        });
    });

}
mousebgcolor();
