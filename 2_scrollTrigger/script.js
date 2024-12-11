gsap.from("#box1", {
  opacity: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
  borderRadius: "50%",
});

gsap.from("#box2", {
  opacity: 0,
  rotate: 360,
  duration: 2,
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    start: "top 60%",
    end: "top 35%",
    scrub: 3,
  },
});

gsap.from("#page3 h1", {
  opacity: 0,
  x: -500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    start: "top 50%",
    end: "top 45%",
    scrub: 3,
  },
});

gsap.from("#page3 h2", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    start: "top 50%",
    end: "top 45%",
    scrub: 1,
  },
});
// whenver we are doing pin a container and want animation on child
// , always trigger the parent container
gsap.to("#page4 h1", {
  transform: "translateX(-160%)",
  scrollTrigger: {
    trigger: "#page4",
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    markers: true,
    pin: true,
  },
});
