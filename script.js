const logo = document.querySelector(".logo");
const cloudElem = document.querySelector(".cloudElem");
const cloudElemText = document.querySelector(".cloudElemText");
const buttonElemPink = document.querySelector(".buttonElem__pink");
const buttonElemBlue = document.querySelector(".buttonElem__blue");
const buttonTextPink = document.querySelector(".buttonText__pink");
const buttonTextBlue = document.querySelector(".buttonText__blue");

const animatedElems = document.querySelectorAll(".animatedElems");

window.addEventListener("scroll", function () {
  if (logo.getBoundingClientRect().top < 50) {
    animatedElems.forEach((elem) => elem.classList.add("visibility"));
    cloudElem.style.transitionDelay = "1s";
    cloudElemText.style.transitionDelay = "1.5s";
    buttonElemPink.style.transitionDelay = "2s";
    buttonElemBlue.style.transitionDelay = "2s";
    buttonTextPink.style.transitionDelay = "2.5s";
    buttonTextBlue.style.transitionDelay = "2.5s";
  } else {
    animatedElems.forEach((elem) => elem.classList.remove("visibility"));
    buttonTextPink.style.transitionDelay = "1s";
    buttonTextBlue.style.transitionDelay = "1s";
    buttonElemPink.style.transitionDelay = "1.5s";
    buttonElemBlue.style.transitionDelay = "1.5s";
    cloudElemText.style.transitionDelay = "2s";
    cloudElem.style.transitionDelay = "2.5s";
  }
});
