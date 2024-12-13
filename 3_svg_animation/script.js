var initialPath = `M 10 300 Q 950 300 1900 300`;

var finalPath = `M 10 300 Q 950 300 1900 300`;

var myString = document.querySelector("#string");

myString.addEventListener("mousemove", (dets) => {
  console.log("entered...");
  path = `M 10 300 Q 950 ${dets.y} 1900 300`;

  console.log(path);

  gsap.to("svg path", {
    // here we are going to change the attribute of the HTML element using attr key
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

myString.addEventListener("mouseleave", (dets) => {
  console.log("leaved...");

  gsap.to("svg path", {
    // here we are going to change the attribute of the HTML element using attr key
    attr: { d: initialPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
