var hamburger = document.getElementById('hamburger')
var mobileMenu = document.getElementById("mobile");

hamburger.addEventListener("click",
  function() {
    mobileMenu.classList.toggle("show");
  }, false
);