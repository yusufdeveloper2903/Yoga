let headerNav = document.querySelector(".info-header");
let tab = document.querySelectorAll(".info-header-tab");
let tabContent = document.querySelectorAll(".info-tabcontent");


function hideTabContent(x){
    for(let i=x; i<tabContent.length; i++){
        tabContent[i].classList.add("hide")
        tabContent[i].classList.remove("show")
    }
}
function showTabContent(z){
    if(tabContent[z].classList.contains("hide")){
        tabContent[z].classList.add("show")
        tabContent[z].classList.remove("hide")
    }
}

headerNav.addEventListener("click", (e) =>{
    e.preventDefault()
    let target = e.target
    for(let i=0;i<tab.length;i++){
        if(target ==tab[i]){
            hideTabContent(0)
            showTabContent(i)
        }
    }
})



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// Set the date we're counting down to
var countDownDate = new Date("May 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "время акции истекло";
  }
}, 1000);