/* 
1. First argument is selector , simialar to CSS selector
2. Second argument is {} , we give key - value pair 
3. Duration : The time it will take for running the duration
4. Delay : The time after which animation will start
5. gsap.to()   : This instructs to go to a final position ( I -> F )
6. gsap.from() : We give initial position of the HTML element ( F -> I ) 
7. we can give style also in the GSAP, that needs to be written in camel casing 
8. stagger property : It will apply the animation one by one. 
  8.1 : stagger can have postive and negative value both
  8.2 : positive stagger first child is coming first and vice-versa with negative stagger
9. poitive x-axis goes towards right side
10. positive y-axis goes towards downward direction
11. repeat property
    11.1 : repeat -1 ( it will run infinite times)
    11.2 : repeat  1 ( animation will run the 2 times )   
12. gsap easing : Research more about this
*/
// gsap.to("#box1", {
//   x: 1000,
//   y: 100,
//   duration: 2,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "red",
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box2", {
//   x: 1000,
//   y: -100,
//   duration: 2,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "blue",
//   repeat: -1,
//   yoyo: true,
//   // scale:2 : It will increase the by 2 times
// });

// gsap.from("h1", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   delay: 4,
//   stagger: 0.5,
// });

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 1000,
//   y: 100,
//   duration: 2,
//   delay: 2,
//   rotate: 360,
//   backgroundColor: "red",
//   repeat: -1,
//   yoyo: true,
// });

// tl.to("#box2", {
//   x: 1000,
//   y: -100,
//   duration: 2,
//   rotate: 360,
//   backgroundColor: "blue",
//   repeat: -1,
//   yoyo: true,
// });

// tl.from("h1", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.5,
//   repeat: -1,
//   yoyo: true,
// });

/* Mini GSAP animation Project */

var navTimeline = gsap.timeline();

navTimeline.from(".logo", {
  y: -20,
  opacity: 0,
  duration: 0.7,
  delay: 0.5,
});

navTimeline.from("#options h4", {
  y: -20,
  opacity: 0,
  duration: 0.4,
  stagger: 1,
});

navTimeline.from("h1", {
  y: -20,
  opacity: 0,
  duration: 0.7,
});
