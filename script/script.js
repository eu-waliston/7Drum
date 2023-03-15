let keys = document.querySelectorAll(".drum").length;


for (let i = 0; i < keys; i++) {
  document.addEventListener("keypress", (event) => {
    makeSound(event.key);
    keyPressed(event.key);


    if(event.keyCode == 32) {
        keyPressed(event.key)
    }
  });
}

function keyPressed(curentKey) {
  let actionBtn = document.querySelector("." + curentKey);
  actionBtn.classList.add("pressed");

  setTimeout(() => {
    actionBtn.classList.remove("pressed");
  }, 100);
}

function makeSound(key) {
  switch (key) {
    case "a":
      let a = new Audio("../sounds/Hi-Hat.mp3");
      a.play();
      break;

    case "s":
      let s = new Audio("../sounds/crash.mp3");
      s.play();
      break;

    case "d":
      let d = new Audio("../sounds/tom-1.mp3");
      d.play();
      break;

    case " ":
      let space = new Audio("../sounds/kick-bass.mp3");
      space.play();
      break;

    case "j":
      let j = new Audio("../sounds/tom-2.mp3");
      j.play();
      break;

    case "k":
      let k = new Audio("../sounds/tom-3.mp3");
      k.play();
      break;
    case "l":
      let l = new Audio("../sounds/snare.mp3");
      l.play();
      break;

    default:
      console.log(":(");
      break;
  }
}