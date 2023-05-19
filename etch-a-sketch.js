const grids = document.querySelector('.grids');

for (let i = 0; i < 4; i++) {
    let row = document.createElement('div');
    row.classList.add('gridRow');
    grids.appendChild(row);
    for (let j = 0; j < 4; j++) {
        let square = document.createElement('div');
        square.classList.add('gridColumn');
        square.setAttribute("id", "square");
        row.appendChild(square);
    }
}

//const gridColumn = document.querySelectorAll(".gridColumn");
grids.addEventListener('mouseover', getColor);
/*for (let i = 0; i < gridColumn.length; i++) {
    gridColumn[i].addEventListener("mouseover", ()=> {
    
        this.style.backgroundColor="red";
    });
}*/


function getColor(event) {
    let square = event.target.style;
    return square.backgroundColor = "black";
}

//const gridRow = document.querySelectorAll(".gridRow");
//const gridColumn = document.querySelectorAll(".gridColumn");



