'use strict';

sheep.addEventListener("click", function() {
    document.getElementById("image").src = "sheep.webp";
    document.getElementById("image").alt =
      "This is a big horn sheep on a mountain";
      document.body.classList.add("pressed");
      document.body.classList.remove("moose");
      document.body.classList.remove("elk");
      document.body.classList.remove("wolf");
      document.body.classList.remove("bear");
})
bear.addEventListener("click", function() {
    document.getElementById("image").src = "bear.webp";
    document.getElementById("image").alt =
      "This is a big horn sheep on a mountain";
      document.body.classList.add("pressed");
      document.body.classList.remove("moose");
      document.body.classList.remove("elk");
      document.body.classList.remove("wolf");
      document.body.classList.remove("sheep");
})

moose.addEventListener("click", function() {
    document.getElementById("image").src = "moose.webp";
    document.getElementById("image").alt =
      "This is a moose";
      document.body.classList.add("pressed");
      document.body.classList.remove("sheep");
      document.body.classList.remove("elk");
      document.body.classList.remove("wolf");
      document.body.classList.remove("bear");
})
wolf.addEventListener("click", function() {
    document.getElementById("image").src = "wolf.webp";
    document.getElementById("image").alt =
      "This is a moose";
      document.body.classList.add("pressed");
      document.body.classList.remove("sheep");
      document.body.classList.remove("moose");
      document.body.classList.remove("elk");
      document.body.classList.remove("bear");
})
elk.addEventListener("click", function() {
    document.getElementById("image").src = "elk.webp";
    document.getElementById("image").alt =
      "This is an elk";
      document.body.classList.add("pressed");
      document.body.classList.remove("sheep");
      document.body.classList.remove("bear");
      document.body.classList.remove("moose");
      document.body.classList.remove("bear");

})

