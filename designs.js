const canvasColor = document.getElementById('colorPicker');
const canvasWidth = document.getElementById('inputWedth');
const canvasHeight = document.getElementById('inputHeight');

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('pixelCanvas').innerHTML = "";
    makeGrid();
});
function makeGrid() {
    
    const table = document.getElementById('pixelCanvas');
    const tBody = document.createElement('tbody');
    for (let rows = 0; rows < canvasHeight.value; rows++) {
        const newRow = document.createElement('tr');
        for (let cols = 0; cols < canvasWidth.value; cols++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
        tBody.appendChild(newRow);
    }
    table.appendChild(tBody);
    document.addEventListener('click', function (event) {
        if (event.target.tagName == 'TD') {
            event.target.style.backgroundColor = String(canvasColor.value);
        }
    });
}
