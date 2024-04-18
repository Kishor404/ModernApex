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
    "Welcome to Modern Apex Electromechanical Works !",
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

// Start typing effect when the page loads
document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
