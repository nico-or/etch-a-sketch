const makeGrid = function (n) {
    let grid, cell;
    grid = document.getElementById("grid");
    for (let i = 0; i < n; i++) {
        cell = document.createElement("div");
        cell.classList.add("cell")
        grid.append(cell);
    }
}
