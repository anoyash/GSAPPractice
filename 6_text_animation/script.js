var myHeading = document.querySelector("h1");
var splittedText = myHeading.textContent.split("");
var spanedText = "";
var leftText = "";
var rightText = "";

splittedText.forEach((char, idx) => {
  // spanedText += "<span>" + char + "</span>";
  if (idx < myHeading.textContent.length / 2)
    leftText += `<span class="left-half">${char}</span>`;
  else rightText += `<span class="right-half">${char}</span>`;
});

console.log(leftText);
console.log(rightText);

myHeading.innerHTML = leftText + rightText;

// gsap.from("h1 span", {
//   y: 50,
//   opacity: 0,
//   duration: 0.8,
//   stagger: 0.3,
// });

gsap.from(".left-half", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

gsap.from(".right-half", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: -0.3 /** for one element at a time in reverse order */,
});
