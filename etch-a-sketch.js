const grids = document.querySelector('.grids');
let dimension = document.getElementById("intro");
let submission = document.getElementById("res");
submission.addEventListener("click", drawGrid);
drawGrid();



function drawGrid() {

    let dimension3 = dimension.value;

    //grids.addEventListener('click', getColor);

    for (let i = 0; i < dimension3; i++) {
        let row = document.createElement('div');
        row.classList.add('gridRow');
        grids.appendChild(row);
        for (let j = 0; j < dimension3; j++) {
            let square = document.createElement('div');
            square.classList.add('gridColumn');
            square.setAttribute("id", "square");
            row.appendChild(square);
        }
    }
    
    grids.addEventListener('mouseover', getColor);
    
}


function getColor(event) {
    let square = event.target.style;
    return square.backgroundColor = "black";
}

