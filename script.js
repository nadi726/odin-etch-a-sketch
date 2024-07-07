const GRID_SIZE = 16;
const grid = document.querySelector("#grid");

for (let col = 0; col < GRID_SIZE; col++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let row = 0; row < GRID_SIZE; row++) {
        rowDiv.appendChild(createCell());
    }
    grid.appendChild(rowDiv);
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