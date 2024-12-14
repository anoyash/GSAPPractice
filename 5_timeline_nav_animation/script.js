var navtl /* nav time line */ = gsap.timeline();
var navMenu = document.querySelector("#nav i");
var crossMenuitems = document.querySelector("#menu-items i");

navtl.to("#menu-items", {
  right: "0",
  duration: 0.5,
});

navtl.to("#menu-items h4", {
  marginLeft: "0%",
  duration: 0.5,
  stagger: 0.2,
  opacity: 1,
});

navtl.pause();

navMenu.addEventListener("click", () => {
  console.log("navigation menu expansion ordered");
  navtl.play();
});

crossMenuitems.addEventListener("click", () => {
  console.log("close the expanded items");
  navtl.reverse();
});
