var myHeading = document.querySelector("h1");
var splittedText = myHeading.textContent.split("");
var spanedText = "";

splittedText.forEach((char) => {
  spanedText += "<span>" + char + "</span>";
});

console.log(spanText);

myHeading.innerHTML = spanedText;
