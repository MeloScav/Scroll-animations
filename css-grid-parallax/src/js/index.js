import simpleParallax from "simple-parallax-js";

// Section 1
const building1 = document.getElementsByClassName('img-anim1');
new simpleParallax(building1, {
    scale: 1.4,
    delay: 0.5,
    orientation: "left"
});

const explore = document.getElementsByClassName('img-explore-anim');
new simpleParallax(explore, {
    scale: 1.8,
    delay: 0.5,
    orientation: "left"
});

// Section 2
const building2 = document.getElementsByClassName('img-anim2');
new simpleParallax(building2, {
    scale: 1.4,
    delay: 0.5,
    orientation: "up"
});

const inspire = document.getElementsByClassName('img-inspire-anim');
new simpleParallax(inspire, {
    scale: 1.6,
    delay: 0.5,
    orientation: "left"
});

// Section 3
const building3 = document.getElementsByClassName('img-anim3');
new simpleParallax(building3, {
    scale: 1.4,
    delay: 0.5,
    orientation: "left"
});

const decouvre = document.getElementsByClassName('img-decouvre-anim');
new simpleParallax(decouvre, {
    scale: 1.6,
    delay: 0.5,
    orientation: "right"
});
