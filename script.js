const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container"
container.style.display = "flex";
container.style.flexDirection = "column";

body.appendChild(container);

const rows = document.createElement("div");
rows.id = "rows";
rows.style.display = "flex";

const square = document.createElement("div");
square.id = "square";
square.style.height = "20px";
square.style.width = "20px";
square.style.background = "lightblue";

function rowsAndColmn(num, cont, child){
    for(let i=0; i<num; i++){
        cont.appendChild(child.cloneNode(true))
    }
    return cont
}

newRows = rowsAndColmn(50, rows, square);

rowsAndColmn(50, container, newRows);

container.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.id == "square"){
        target.style.background = "red";
    }
})