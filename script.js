const makeGrid = function (n) {
    let grid, cell;
    grid = document.getElementById("grid");
    for (let i = 0; i < n; i++) {
        cell = document.createElement("div");
        cell.classList.add("cell")
        grid.append(cell);
    }
};

// Cell darkening functionality
let grid = document.querySelector(".grid");

grid.addEventListener('mouseover', e => {
    if (e.target.classList.contains("cell")) {
        let currentRGB = e.target.style.backgroundColor
        let rgbArray = rgbString2Array(currentRGB);
        let newRGB = map(rgbArray, reduceValue)
        e.target.style.backgroundColor = rgbArray2String(newRGB);
    }
});

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
    return (value - 16).toFixed();
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
