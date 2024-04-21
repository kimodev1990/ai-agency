const videoNumber = document.getElementById("video-number");
var x = window.matchMedia("(max-width:976px)");
var y = window.matchMedia("(min-width:976px)");
var z = window.matchMedia("(max-width:768px)");
var q = window.matchMedia("(min-width:768px)");

function myFunctionOne() {
  if (x.matches) {
    videoNumber.classList.remove("video-background-three");
    videoNumber.classList.add("video-background-four");
  } else if (y.matches) {
    videoNumber.classList.add("video-background-three");
    videoNumber.classList.remove("video-background-four");
  }
}

function myFunctionTwo() {
  if (z.matches) {
    videoNumber.classList.add("video-background-five");
  } else if (q.matches) {
    videoNumber.classList.remove("video-background-five");
  }
}

myFunctionOne();
myFunctionTwo;

window.addEventListener("resize", () => {
  myFunctionOne();
  myFunctionTwo();
});
