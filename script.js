const INITIAL_GRID_SIZE = 16;
const grid = document.querySelector("#grid");
let size_btn = document.querySelector("#set-size-btn");
let reset_btn = document.querySelector("#reset-grid-btn");
let grid_size = INITIAL_GRID_SIZE;

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

    grid_size_display = document.querySelector("#grid-size-display");
    grid_size_display.textContent = `${size}x${size}`;
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function resetGrid() {
    createGrid(grid_size);
}

function setGridSize() {
    let newSize = prompt("Enter new size: 1-100: ")

    newSize = parseInt(newSize);
    if (Number.isNaN(newSize) || newSize > 100 || newSize < 1){
        alert("Invalid size.")
        return;
    }
    
    grid_size = newSize;
    createGrid(grid_size);
}

function createCell() {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseover", (e) => 
        cell.style.backgroundColor = getCellColor())
    return cell;
}

function getCellColor() {
    return "black";
}

createGrid(grid_size);
size_btn.addEventListener("click", setGridSize)
reset_btn.addEventListener("click", resetGrid)