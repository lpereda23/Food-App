let btn = document.getElementById("cta-button");
let overlay = document.getElementById("overlay");

btn.addEventListener("click", () =>{
    //console.log("In JS click!!!");
    overlay.style.display = "grid";
    overlay.classList.add("animate-overlay");
    //setTimeout((remBac()) => {  console.log("World!"); }, 3000);
    setTimeout(remBac, 3000);
    //overlay.classList.remove("animate-overlay");
    //overlay.style.display = "none";
})

function remBac(){
    overlay.classList.remove("animate-overlay");
    overlay.style.display = "none";
}