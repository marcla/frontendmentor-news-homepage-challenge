var toggleButton = document.querySelector(".toggle-button");
var menuMobile = document.querySelector(".main-menu");
var mainSection = document.querySelector(".main-section-container");
var closeButton = document.querySelector(".close-button");


toggleButton.addEventListener("click", function() {
  menuMobile.classList.add("open");
    setTimeout(function() {
   toggleButton.syle.display("none");
   closeButton.syle.display = "block";
  }, 10);
  
});


closeButton.addEventListener("click", function() {
  menuMobile.classList.remove("open");

});