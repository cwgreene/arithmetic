console.log("hello world");
var divarea = document.getElementById("divarea");

function renderProblem(divisor, dividend) {
    row = [];
    let decumulator = divisor;
    for(var i = 0; i <= Math.log10(divisor); i++) {
        row.splice(0, 0, decumulator % 10);
        decumulator = Math.floor(decumulator/10);   
    }
    decumulator = dividend;
    for(var j = 0; j <= Math.log10(dividend); j++) {
        row.splice(i, 0, {"text": decumulator % 10, "topBorder":true});
        decumulator = Math.floor(decumulator/10); 
    }
    row[i].leftBorder = true;
    return renderGrid([row.map(()=> null), row]);
}

function renderGrid(grid) {
    var container = document.createElement("div");
    var elementGrid = [];
    container.style.display = "grid";
    container.style.gridTemplateRows = `repeat(${grid.length}, 20px)`;
    container.style.gridTemplateColumns = `repeat(${grid[0].length}, 10px)`;
    console.log(container.style);
    for (var i in grid) {
        elementGrid.push([]);
        for (var j in grid[i]) {
            var element = document.createElement("div");
            element.style.gridRow = "auto";
            for(var dir of ["Left", "Top", "Bottom", "Right"]) {
                console.log(i);
                element.style[`border${dir}`] = "solid";
                element.style[`border${dir}Width`] = "1px";
                element.style[`border${dir}Color`] = "white";
            }
            var obj = grid[i][j];
            if (obj !== null) {
                if (obj.text !== undefined) {
                    element.textContent = grid[i][j].text;
                    if (obj.leftBorder) {
                        element.style.borderLeft = "solid";
                        element.style.borderLeftWidth = "1px";
                        element.style.borderLeftColor = "black";
                    }
                    if (obj.topBorder) {
                        element.style.borderTop = "solid";
                        element.style.borderTopWidth = "1px";
                        element.style.borderTopColor = "black";
                    }
                } else {
                    element.textContent = grid[i][j];
                }
            }
            container.appendChild(element);
            elementGrid
        }
    }
    return container;
}

//var grid = renderGrid([[0,null,3],[2,3,{"text":"3","leftBorder": true}]]);
var grid = renderProblem(12, 345);
divarea.appendChild(grid);
