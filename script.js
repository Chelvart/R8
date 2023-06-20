document.addEventListener("DOMContentLoaded", function() {
  const stickman = document.getElementById("stickman");
  let isJumping = false;

  function jump() {
    if (!isJumping) {
      isJumping = true;
      stickman.style.bottom = "200px";
      setTimeout(function() {
        stickman.style.bottom = "0";
        isJumping = false;
      }, 500);
    }
  }

  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 32) {
      jump();
    }
  });
});
