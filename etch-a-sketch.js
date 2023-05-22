const grids = document.querySelector('.grids');
let dimension = document.getElementById("intro");
let submission = document.getElementById("confirm");
let eraser = document.getElementById("eraser");
let colorMode = document.getElementById("colorMode");
let clear = document.getElementById("clear");

let colorButtons = document.getElementsByClassName('modes');
let eraserStatus = false;


//colorMode.classList.add('color-active');
//eraser.classList.add('eraser-active');


if (dimension.value = "NaN") {
    dimension.value=16;
}
drawGrid(grids, dimension.value);
submission.addEventListener("click", (submission) => resizeGrid(grids, dimension.value));

function getDimension() {
    return document.getElementById("dim").innerHTML = dimension.value + '*' + dimension.value;
}

colorMode.addEventListener("click", colorGrid);
// Code reserve to get either the color or eraser.
/*function getColorState() {
    if (colorMode) {
        eraser.classList.remove('eraser-active');
        colorMode.classList.add('color-active');
        colorGrid();
    } else if (eraser) {
        colorMode.classList.remove('color-active');
        eraser.classList.add('eraser-active');
        eraseGrid();
    }
}*/


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

/*//if(colorMode) {
    colorMode.addEventListener("click", (colorMode)=> {
        eraser.classList.remove('eraser-active');
        //colorMode.classList.add('color-active');
        colorMode.class
        colorGrid();
     })
//} else if (eraser) {
    eraser.addEventListener("click", (eraser)=> {
        colorMode.classList.remove('color-active');
        eraser.classList.add('eraser-active');
        eraseGrid();
     });
//}*/



function colorGrid() {
    eraserStatus = false;
    grids.addEventListener('mouseover', getColor);
    grids.removeEventListener('mouseover', getWhiteColor);
}

function eraseGrid() {
    eraserStatus = true;
    grids.addEventListener('mouseover', getWhiteColor);
    grids.removeEventListener('mouseover', getColor);
}


function getColor(event) {
    console.log("Trying");
    let square = event.target.style;
    let color = document.getElementById("color-picker").value;
    console.log(color);
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

eraser.addEventListener("click", eraseGrid);