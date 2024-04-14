let Slide = [
    ["../Assets/Slider/Slider1.jpeg"],
    ["../Assets/Slider/Slider2.jpeg"],
    ["../Assets/Slider/Slider3.jpeg"]
];

let id_Slide = 0;
const sliderImg = document.querySelector(".Hox-Slider-Img");

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
    setTimeout(() => {
        sliderImg.src = Slide[id_Slide][0];
        sliderImg.style.opacity = 1;
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