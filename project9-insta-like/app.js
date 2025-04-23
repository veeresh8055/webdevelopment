var img = document.querySelector("img");
var botLike = document.querySelector(".bot-like ");
var midLike = document.querySelector(".mid-like ");

img.addEventListener("dblclick", function () {
  console.log("helllo");
  botLike.style.color = "red";
  botLike.style.transition = ".5s ease-in";

  midLike.style.transform = "translate(-50%,-50%) scale(1)";
  midLike.style.color = "red";
  midLike.style.opacity = "0.9";
  setTimeout(function () {
    midLike.style.transform = "translate(-50%,-50%) scale(0)";
  }, 900);
});
