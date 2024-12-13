var mainDiv = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var myImg = document.querySelector("#myImage");

mainDiv.addEventListener("mousemove", (params) => {
  gsap.to(cursor, {
    x: params.x,
    y: params.y,
    duration: 0.5,
  });
});

myImg.addEventListener("mouseenter", () => {
  console.log("mouse entered inside image");
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "white",
    duration: 0.1,
  });
});

myImg.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    opacity: 1,
    backgroundColor: "white",
  });
});
