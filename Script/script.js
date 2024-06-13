let slides=[".sc1",".sc2",".sc3"];
let id=0;
const nextSlide=()=>{
    document.querySelector(slides[id]).style="display:none;"
    id=(id+1)%slides.length;
    document.querySelector(slides[id]).style="display:flex;"
    typeText()
}
const prevSlide=()=>{
    document.querySelector(slides[id]).style="display:none;"
    id=(id-1+slides.length)%slides.length;
    console.log(id)
    document.querySelector(slides[id]).style="display:flex;"
    typeText()
}



const opnNav=()=>{
    console.log("Open NAv")
    document.querySelector("#Head-Nav-List").style="transform: translate(0px);";
    document.querySelector(".Head-Nav-x").style="display:flex;";
    document.querySelector(".Head-Nav-3").style="display:none;";
}
const clsNav=()=>{
    document.querySelector("#Head-Nav-List").style="transform: translate(400px);";
    document.querySelector(".Head-Nav-x").style="display:none;";
    document.querySelector(".Head-Nav-3").style="display:flex;";
}


// Multiline text content to be typed out
const multilineText = [
    "Welcome to Modern Apex Electromechanical Works",
    "We provide top-quality services for maintenance, testing, troubleshooting, and installation.",
    "Contact us today for more information."
];

const typingSpeed = 40; // Typing speed in milliseconds

const typingContainer = document.getElementsByClassName("typing-text");
console.log(typingContainer)
let charIndex = 0;

function typeText() {

        if (charIndex <= multilineText[id].length) {
            typingContainer[id].textContent = multilineText[id].slice(0, charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            charIndex = 0;
            setTimeout(nextSlide,2000)
        }

}

var Loader;

const LoadNow=(Oppa)=>{
    if(Oppa<=0){
        LoadCont();
    }else if(Oppa<=0.8){
        console.log("OPP")
        Loader.style.opacity=Oppa;
        window.setTimeout(function(){LoadNow(Oppa-0.01)},3)
    }else if(Oppa<=1){
        console.log("Poo")
        Loader.style.opacity=Oppa;
        window.setTimeout(function(){LoadNow(Oppa-0.01)},50)
    }
}

const LoadCont=()=>{
    document.querySelector("header").style="display:auto;"
    document.querySelector("main").style="display:auto;"
    document.querySelector("footer").style="display:auto;"
    typeText();
    Loader.style="display:none;";
}

// Start typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("header").style="display:none;";
    document.querySelector("main").style="display:none;";
    document.querySelector("footer").style="display:none;"
    Loader=document.querySelector("#Loading");
    Loader.style="display:flex;";
    LoadNow(1);
    
});

