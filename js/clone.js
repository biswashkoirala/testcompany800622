// for auto slideshow
console.log('Hello JS')
var myIndex = 0;
carousel();           //function call

//function define below
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlidesAuto");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// for manual slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesManu");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// JavaScript for menu toggle
var menuToggle = document.querySelector('.menu-toggle');
var navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});