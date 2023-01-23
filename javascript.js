

// grid selection
function createGrid (number) {
    const container = document.getElementById(container);
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for (let i = 1; i <= number*number; i++) {
        let div = document.createElement("div");
        div.classList.add("gridBox");
        container.appendChild(div);
    }
    document.querySelector(".grid").textContent = `${number}x${number}`;
}

function changeColor () {
    event.target.style.backgroundColor = "beige";
}

function resetGrid () {
    let num = prompt("Please enter grid size less than or equal to 100:");
    if (num == undefined || num === num || num==="") {
        return;
    }
    while (num>100) {
        num = prompt ("Number too big! Please enter grid size that is less than 100:");
    }
    
    while (container.hasChildNodes()) {
        container.removeChild(gridContainer.firstChild);
    }
    createGrid();
    let gridBoxList = document.querySelectorAll(".gridBox");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover",changeColor)});
}

function clearGrid () {
    let gridBoxList = document.querySelectorAll(".gridBox");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

let gridNumber = 16;
createGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".gridBox");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

const clearButton = document.getElementsByClassName(".c-button");
const resetButton = document.getElementsByClassName(".r-button");

clearButton.addEventListener ("click", clearGrid);
resetButton.addEventListener ("click", resetGrid);