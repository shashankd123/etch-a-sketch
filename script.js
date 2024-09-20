const canvas = document.querySelector("#canvas");

const square = document.createElement("div");
square.id = "square";
square.style.width = "100px";
square.style.background = "lightblue";

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

    resetCanvas();

    let inpt = inputNumber.value;
    let entRw = addRowClmn(inpt, row, square);
    addRowClmn(inpt, canvas, entRw);

})


window.addEventListener("load", () =>{
    let loadRw = addRowClmn(16, row, square);
    addRowClmn(16, canvas, loadRw);
})

// let rows = addRowClmn(16, row, square)
// addRowClmn(16, canvas, rows)

canvas.addEventListener("mouseover", (e) => {
    const target = e.target;
    target.style.background = "red";
})

