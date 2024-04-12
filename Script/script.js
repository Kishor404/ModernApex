let Slide = [
    ["./Assets/Slider/Slider1.jpeg", "Welcome To<br>Modern Apex Electrochemical Works LLC"],
    ["./Assets/Slider/Slider2.jpeg", "Well Managed Team Work To Satisfi the works."],
    ["./Assets/Slider/Slider3.jpeg", "Monkey D Luffy Is Son Of Monkey D Dragon."]
];

let id_Slide = 0;
const sliderImg = document.querySelector(".Slider-Img");
const sliderCaption = document.querySelector("#Slider-Cont");

const prevSlide = () => {
    id_Slide = (id_Slide - 1 + Slide.length) % Slide.length;
    setSlide();
};

const nextSlide = () => {
    id_Slide = (id_Slide + 1) % Slide.length;
    setSlide();
};

const setSlide = () => {
    sliderImg.style.opacity = 0.8;
    sliderCaption.style.opacity = 0;
    setTimeout(() => {
        sliderImg.src = Slide[id_Slide][0];
        sliderCaption.innerHTML = Slide[id_Slide][1];
        sliderImg.style.opacity = 1;
        sliderCaption.style.opacity = 1;
    }, 500);
};
setSlide();

let intervalId = setInterval(nextSlide, 7000); 


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