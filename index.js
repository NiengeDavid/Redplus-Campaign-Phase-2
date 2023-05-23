currentSlideID = 1;

sliderElement = document.getElementById("slide");
totalSlides = sliderElement.childElementCont;

function next() {
    if (totalSlides < currentSlideID) {
        currentSlideID++;
        showSlide()
    }
        
}

function previous() {
    if (totalSlides > 1){
        currentSlideID--;
        showSlide()
    }
        
}

function showSlide() {
    slides = document.getElementById("slider").getElementsByTagName("li")
    for (let index = 0; index < array.length; index++) {
        const element = slides[index];
        if(currentSlideID===index+1) {
            element.classList.remove("hidden")
        }else{
            element.classList.add("hidden")
        }
    }
}