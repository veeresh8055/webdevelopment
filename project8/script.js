var menu = document.querySelector(".nav i ");
var cross = document.querySelector(".full i ");

var tl = gsap.timeline({ paused: true });

tl.to(".full", {
  right: 0,
  duration: 0.6,
});
tl.from(".full h4", {
  opacity: 0,
  x: 150,
  stagger: 0.25,
  duration: 0.7,
});
tl.from(".full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
  menu.style.display ='none'
});
cross.addEventListener("click", function () {
  tl.reverse();
  menu.style.display ='block'

});
