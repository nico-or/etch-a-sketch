// Onload function calls
makeGrid();

// cell constructor
function makeCell () {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.backgroundColor = "#fff";
    return cell;
}

// row constructor
function makeRow () {
    let cell = document.createElement("div");
    cell.classList.add("row");
    return cell;
}

// grid constructor
function makeGrid (n = 16) {

    let grid = document.createElement("div");
    grid.classList.add("centered")
    grid.id = "grid"

    for (let i = 0; i < n; i++) {
        let row = makeRow()
        for (let j = 0; j < n; j++) {
            row.append(makeCell());
        }
        grid.append(row);
    }

    let wrapper = document.querySelector("#grid-wrapper");
    wrapper.appendChild(grid)

    addCellListeners();
};

// Add cell event listener
function addCellListeners() {
    let cells = document.querySelectorAll(".cell");
    cells.forEach( cell => {
        cell.addEventListener('mouseover', e => {
            if (e.target.classList.contains("cell")) {
                let currentRGB = e.target.style.backgroundColor
                let rgbArray = rgbString2Array(currentRGB);
                let newRGB = map(rgbArray, reduceValue)
                e.target.style.backgroundColor = rgbArray2String(newRGB);
            }
        })
    });
}

// applies rule() function over each element of array
function map(array, rule) {
    let mapArray =[];
    for (item of array){
        mapArray.push(rule(item));
    };
    return mapArray;
}

// reduces Value. intended to use with rgb values
function reduceValue(value) {
    return value - 26;
}

// turns rgb string into array
function rgbString2Array(rgb) {
    return rgb.match(/\d+/g);
};

// turns array into rgb string
function rgbArray2String(rgb) {
    if (rgb.length != 3) return;
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

// reset button functionality
function clearGrid () {
    let wrapper = document.querySelector("#grid-wrapper");
    let grid = document.querySelector("#grid");
    wrapper.removeChild(grid);
}

function resetGrid (n = 16) {
    clearGrid()
    makeGrid(n)
}

// resize button functionality
function resizeGrid(params) {
    let size = +document.querySelector("#gridSize").value
    resetGrid(size)   
}