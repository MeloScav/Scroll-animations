const project = document.querySelectorAll(".project");
const controller = new ScrollMagic.Controller();

project.forEach(el => {
    let overlay = el.querySelector(".overlay");
    let projectInfo = el.querySelector(".project-info");
    let smallTitle = el.querySelector(".small-title");
    let projectLink = el.querySelector(".project-link");
    let title = el.querySelector("h4");

    // Animation
    let TL = new TimelineMax();

    TL
    .fromTo(overlay, 2, {skewX: 30, scale: 1.5}, {skewX: 0, xPercent: 100, transformOrigin: "0% 100%", ease: Power4.easeOut})
    .from(projectInfo, 1, {scaleY: 0, transformOrigin: "bottom left"}, "-=1.5")
    .from(smallTitle, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8")
    .from(projectLink, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8")
    .from(title, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=0.8")

    // ScrollMagic
    let scene = new ScrollMagic.Scene({
        triggerElement: el
    })
    .addIndicators()
    .setTween(TL)
    .reverse(false)
    .addTo(controller);

});
