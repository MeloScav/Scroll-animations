const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: ".event2",
  triggerHook: "onEnter",
  duration: "100%",
})
  .setPin(".event1 .pinSection")
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".event2",
  triggerHook: "onEnter",
  duration: "200%",
})
  .setPin(".event2 .pinSection")
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".event3",
  triggerHook: "onEnter",
  duration: "200%",
})
  .setPin(".event3 .pinSection")
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".event4",
  triggerHook: "onEnter",
  duration: "100%",
})
  .setPin(".event4 .pinSection")
  .addIndicators()
  .addTo(controller);
