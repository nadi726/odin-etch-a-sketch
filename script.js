const INITIAL_GRID_SIZE = 16;
const grid = document.querySelector("#grid");
const sizeBtn = document.querySelector("#set-size-btn");
const resetBtn = document.querySelector("#reset-grid-btn");
const setColorBlackBtn = document.querySelector("#set-color-black-btn");
const setColorRandomBtn = document.querySelector("#set-color-random-btn");
const darkeningOnBtn = document.querySelector("#darkening-on-btn");
const darkeningOffBtn = document.querySelector("#darkening-off-btn");

let gridSize = INITIAL_GRID_SIZE;

// ENUMS
//
// Either "black" or "random"
let current_color = "black";

// Either "fill" or "darken"
// "fill" puts a new color regardless of whether the cell was empty,
// while "darken" will place a new color only if the cell was empty,
// with small opacity value, and otherwise will only raise the opacity.
let mode = "fill";

function createGrid(size) {
    clearGrid()

    for (let col = 0; col < size; col++) {
        let rowDiv = document.createElement("div");
        rowDiv.className = "row";
        for (let row = 0; row < size; row++) {
            rowDiv.appendChild(createCell());
        }
        grid.appendChild(rowDiv);
    }

    gridSizeDisplay = document.querySelector("#grid-size-display");
    gridSizeDisplay.textContent = `${size}x${size}`;
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function resetGrid() {
    createGrid(gridSize);
}

function setGridSize() {
    let newSize = prompt("Enter new size: 1-100: ");
    newSize = parseInt(newSize);

    if (Number.isNaN(newSize) || newSize > 100 || newSize < 1){
        alert("Invalid size.")
        return;
    }
    
    gridSize = newSize;
    createGrid(gridSize);
}

function createCell() {
    let cell = document.createElement("div");
    cell.className = "cell";
    
    cell.addEventListener("mouseover", function(e) {
        let isFirstHover = cell.style.backgroundColor == "";

        if (mode == "fill") {
            cell.style.backgroundColor = getCellColor();
            cell.style.opacity = 1;
        } else if (isFirstHover) {
            cell.style.backgroundColor = getCellColor();
            cell.style.opacity = 0.1;
        } else {
            let prevOpacity = parseFloat(cell.style.opacity);
            cell.style.opacity = Math.min(1.0, prevOpacity + 0.1);
        }
    })
    return cell;
}

function getCellColor() {
    if (current_color == "black") {
        return "black";
    } else {
        return getRandomColor()
    }
}

function getRandomColor() {
    const r = getRandomInt(256);
    const g = getRandomInt(256);
    const b = getRandomInt(256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


createGrid(gridSize);
sizeBtn.addEventListener("click", setGridSize);
resetBtn.addEventListener("click", resetGrid);
setColorBlackBtn.addEventListener("click", () => current_color = "black");
setColorRandomBtn.addEventListener("click", () => current_color = "random")
darkeningOnBtn.addEventListener("click", () => mode = "darkening")
darkeningOffBtn.addEventListener("click", () => mode = "fill")
