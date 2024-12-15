window.addEventListener("wheel", (dets) => {
  console.log(dets.deltaY);
  /* deltaY will be poisitive if user scolls down */
  /* deltaY will be negative if user scrolls up */

  if (dets.deltaY > 0) {
    gsap.to(".marquee", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marquee img", {
      duration: 0.5,
      rotate: 180,
    });
  } else {
    gsap.to(".marquee", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".marquee img", {
      duration: 0.5,
      rotate: 0,
    });
  }
});
