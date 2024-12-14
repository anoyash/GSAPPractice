var mainDiv = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var myImg = document.querySelector("#myImage");

mainDiv.addEventListener("mousemove", (params) => {
  console.log("mouse event is called");
  gsap.to(cursor, {
    x: params.x,
    y: params.y,
  });
});

myImg.addEventListener("mouseenter", () => {
  console.log("mouse entered inside image");
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    height: "120px",
    width: "120px",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    /* instead of adding overlay image, we can have do pointer Events:none as well 
    the flicker effect happens due to multiple event listers working on the same time
    */
    pointerEvents: "none",
  });
});

myImg.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    height: "40px",
    width: "40px",
    scale: 1,
    opacity: 1,
    backgroundColor: "white",
  });
});
