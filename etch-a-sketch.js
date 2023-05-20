const grids = document.querySelector('.grids');
let dimension = document.getElementById("intro");
let submission = document.getElementById("confirm");

let clear = document.getElementById("clear");

//Initial By Default: 16*16. 
drawGrid(16);
//clearButton.addEventListener("click", clearGrid);

function getDimension() {
    return document.getElementById("dim").innerHTML = dimension.value + '*' + dimension.value;
}


function drawGrid(dimension3) {


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

submission.addEventListener("click", (submission) => drawGrid(dimension.value));
clear.addEventListener("click", (clear) => clearGrid());
console.log(dimension.value)



function eraser(event) {

    let square = event.target.style;

    return square.backgroundColor = "white";
    
    
}


function getColor(event) {
    let square = event.target.style;
    return square.backgroundColor = "black";
}

function clearGrid() {
    columns = document.getElementsByClassName('gridColumn');
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = "white";
    }
}

