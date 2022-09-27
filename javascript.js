

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");



function makeGrid() {
let number = parseInt(prompt('Grid size' , '16'));
  makeRows(number);
  makeColumns(number);
}


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


//window.location.reload();  //how to reset grid after new input



//Change color
function changeColor (target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (o) {
    target = o.target;

    if (target.matches("div.cell")) {
        changeColor(target);
    }
});








