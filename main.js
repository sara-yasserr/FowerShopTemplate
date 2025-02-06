var reviews = document.querySelectorAll(".review .box-container .box");
var i = 0;
reviews[i].classList.add("r");

function right() {
   
    reviews[i].classList.remove("r");
    reviews[i].style.animation = 'slider 1s reverse forwards linear'; 
    
  
    setTimeout(function() {
        reviews[i].style.animation = 'none'; 
    }, 1000);

    
    if (i < reviews.length - 1) {
        i++;
    } else {
        i = 0;
    }


    reviews[i].classList.add("r");
    reviews[i].style.animation = 'none';  
}

function left() {

    reviews[i].classList.remove("r");
    reviews[i].style.animation = 'slider 1s forwards linear';  // Add the animation
    
    
    setTimeout(function() {
        reviews[i].style.animation = 'none'; 
    }, 1000);

    // Update index
    if (i > 0) {
        i--;
    } else {
        i = reviews.length - 1;
    }

    
    reviews[i].classList.add("r");
    reviews[i].style.animation = 'none';  
}



var home_h3 = document.querySelector(".home .content h3")
var home_span = document.querySelector(".home .content span")
var home_p = document.querySelector(".home .content p")

window.onload = function(){
    home_h3.style.animation = `home-right forwards 1s`
    home_span.style.animation = `home-right forwards 1.6s`
    home_p.style.animation = `home-right forwards 2.2s`

}

var content_h3 = document.querySelector(".about .row .content h3")
var content_p = document.querySelectorAll(".about .row .content p")

window.addEventListener("scroll",function(){
    if(this.scrollY >=240){
        content_h3.style.animation=`about-left forwards 1s`
        content_p[0].style.animation=`about-left forwards 1.6s`
        content_p[1].style.animation=`about-left forwards  2.2s`

    }
})

