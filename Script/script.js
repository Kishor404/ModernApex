let slides=[".sc1",".sc2",".sc3"];
let id=0;
const nextSlide=()=>{
    document.querySelector(slides[id]).style="display:none;"
    id=(id+1)%slides.length;
    document.querySelector(slides[id]).style="display:flex;"
}
const prevSlide=()=>{
    document.querySelector(slides[id]).style="display:none;"
    id=(id-1+slides.length)%slides.length;
    console.log(id)
    document.querySelector(slides[id]).style="display:flex;"
}

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
