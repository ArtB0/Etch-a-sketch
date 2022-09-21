const container = document.querySelector(".container");
let rows = document.querySelector(".gridRow");
let columns = document.querySelector(".gridColumns");

//let number = parseInt(prompt('Grid size' , '16'), 100);

makeGrid();

function makeGrid () {
    let number = 16;
    makeRows(number);
    makeColumns(number);
}


function makeRows(rowNumber) {
    for (r=0; r < rowNumber; r++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

function makeColumns(cellNumber) {
    for (i=0; i < rows.length; i++) {
        for (j=0; j < cellNumber; j++){
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}



