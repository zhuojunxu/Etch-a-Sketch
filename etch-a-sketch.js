const grids = document.querySelector('.grids');
let dimension = document.getElementById("intro");
let submission = document.getElementById("confirm");
let eraser = document.getElementById("eraser");
let clear = document.getElementById("clear");

//Initial By Default: 16*16. 
if (dimension.value = "NaN") dimension.value=16;
drawGrid(grids, dimension.value);
submission.addEventListener("click", (submission) => resizeGrid(grids, dimension.value));

function getDimension() {
    return document.getElementById("dim").innerHTML = dimension.value + '*' + dimension.value;
}


function drawGrid(grids, dimension3) {
    for (let i = 0; i < dimension3; i++) {
        let row = document.createElement('div');
        row.classList.add('gridRow');
        grids.appendChild(row);
        for (let j = 0; j < dimension3; j++) {
            let square = document.createElement('div');
            square.classList.add('gridColumn');
            square.setAttribute("id", "square");
            row.appendChild(square);
            grids.addEventListener('mouseover', getColor);
        }
    }
    
}

clear.addEventListener("click", (clear) => clearGrid());
eraser.addEventListener("click", (eraser)=> {

   eraseGrid();
});
console.log(dimension.value)



function eraseGrid() {
    grids.addEventListener('mouseover', getWhiteColor);
}


function getColor(event) {
    let square = event.target.style;
    const color = document.getElementById("color-picker").value;
    return square.backgroundColor = color;
}

function getWhiteColor(event) {
    let square = event.target.style;
    return square.backgroundColor = "white";
}

function clearGrid() {
    columns = document.getElementsByClassName('gridColumn');
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = "";
    }
}

function resizeGrid(grids2, dimension3) {
    clearGrid();
    grids3 = document.querySelector('.grids');
    while (grids3.firstChild) {
        grids3.removeChild(grids3.firstChild);
    }
    drawGrid(grids3, dimension3);
}

