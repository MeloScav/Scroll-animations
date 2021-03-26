// import {gsap} from "gsap";
// import "scrollmagic";
// import "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js";
// import "scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

const path = [{x: 2500, y: 400}];
const path2 = [{x: 0, y:500}, {x: 0, y:200}, {x: 600, y:100}, {x: 2000, y:100}];

const plane = document.getElementById("plane");

// GreenSock
const TL = new TimelineMax();

TL
.to(plane, 2.5, {bezier: {values: path, autoRotate: true}, scale: 2, ease:Power1.easeInOut})
.to(plane, 3, {bezier: {values: path2, autoRotate: true}, scale: 1, ease:Power1.easeInOut});

// ScrollMagic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: "#trigger",
    duration: 3000,
    triggerHook: 0.4
})
.setPin(plane)
.setTween(TL)
.addIndicators()
.addTo(controller);