const GRID_SIZE = 16;
const grid = document.querySelector("#grid");

for (let col = 0; col < GRID_SIZE; col++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for (let row = 0; row < GRID_SIZE; row++) {
        let cell = document.createElement("div")
        cell.className = "cell";
        rowDiv.appendChild(cell);
    }
    grid.appendChild(rowDiv);
}