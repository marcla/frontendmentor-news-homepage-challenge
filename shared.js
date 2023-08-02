var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var mainSection = document.querySelector(".main-section-container");
var closeButton = document.querySelector(".close-button");


toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
    setTimeout(function() {
   toggleButton.syle.display("none");
   closeButton.syle.display = "block";
  }, 10);
  
});


closeButton.addEventListener("click", function() {
  mobileNav.classList.remove("open");
       backdrop.style.display = "none";

});