const viewer = document.querySelector(".viewer");
const nbFrames = 14;
const shiftImage = 100;

const controller = new ScrollMagic.Controller({
    globalSceneOptions : {
        triggerHook: 0,
        reverse: true
    }
})

new ScrollMagic.Scene({
    triggerElement: "#sticky",
    duration: (nbFrames * shiftImage) + "px"
})
.setPin("#sticky")
.addIndicators()
.addTo(controller);

for ( let i = 1; i <= nbFrames; i++) {
    new ScrollMagic.Scene({
        triggerElement: '#sticky',
        offset: i * shiftImage
    })
    .setClassToggle(viewer, 'frame' + i)
    .addIndicators()
    .addTo(controller);
}