

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



function makeGrid() {
let number = parseInt(prompt('Grid size' , '16'));

if (number < 100) {
  makeRows(number);
  makeColumns(number);
}
else {
  prompt ('too big')
}
};


function makeRows(rowNum) {
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  };
};

function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
    };

  };
};



// Button
let gridButton = document.querySelector('#gridButton');
gridButton.addEventListener('click' , function() {
makeGrid();
});

let reset = document.querySelector('#reset-btn');
reset.addEventListener('click' , function() {
window.location.reload();
});



//Change color to black
function changeColorBlack (target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (o) {
    target = o.target;

    if (target.matches("div.cell")) {
        changeColorBlack(target);
    }
});




//TO DO:
//Reset grid after new input
//Add 'clear' button
//New grid in same total space




