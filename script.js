const canvas = document.querySelector("#canvas");

let black = document.querySelector("#black");
let random = document.querySelector("#random");
let shading = document.querySelector("#shading");

let brush = "black";

black.addEventListener("click", () =>{
    brush = "black"
})
random.addEventListener("click", () =>{
    brush = "random"
})
shading.addEventListener("click", () =>{
    brush = "shading"
})

const square = document.createElement("div");
square.id = "square";
square.style.width = "100px";
square.style.background = "rgba(166, 228, 255, 1)";

const row = document.createElement("div");
row.style.display = "flex";
row.id = "row";
row.style.height = "100px"

function addRowClmn(num, parent, child){
    for (let i=0; i<num; i++){
        parent.appendChild(child.cloneNode(true));
    }
    return parent
}


const inputNumber = document.querySelector("#input");
const enterNumber = document.querySelector("#enter-number");
const reset = document.querySelector("#reset");

reset.addEventListener("click", () =>{
    resetCanvas();
    let rstRw = addRowClmn(16, row, square);
    addRowClmn(16, canvas, rstRw);
});

function resetCanvas(){
    row.innerHTML = "";
    canvas.innerHTML = "";
}

enterNumber.addEventListener("click", () =>{

    let inpt = inputNumber.value;
    if (inpt>64){
        alert("Value should be less than 64!")
    }else{
        resetCanvas();
        let entRw = addRowClmn(inpt, row, square);
        addRowClmn(inpt, canvas, entRw);
    }
})


window.addEventListener("load", () =>{
    let loadRw = addRowClmn(16, row, square);
    addRowClmn(16, canvas, loadRw);
})

// let rows = addRowClmn(16, row, square)
// addRowClmn(16, canvas, rows)


canvas.addEventListener("mouseover", (e) => {
    const target = e.target;
    let opacity = target.style.opacity;
    if(!opacity){
        opacity = 1;
    }else{
        opacity -= 0.1;
    }
    opacity -= 0.1;
    if(target.id == "square"){
        if(brush == "black"){
            target.style.opacity = 1;
            target.style.background = "black";
        }else if(brush == "random"){
            target.style.opacity = 1;
            target.style.background = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`;
        }else if(brush == "shading"){
            target.style.opacity = opacity;
        }
    }
})