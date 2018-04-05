
// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('pixelCanvas').innerHTML = "";
    makeGrid();
});
function makeGrid() {
    var canvasColor = document.getElementById('colorPicker');
    var canvasWidth = document.getElementById('inputWedth').value;
    var canvasHeight = document.getElementById('inputHeight').value;
    var table = document.getElementById('pixelCanvas');
    var tBody = document.createElement('tbody');
    for (let rows = 0; rows < canvasHeight; rows++) {
        var newRow = document.createElement('tr');
        for (let cols = 0; cols < canvasWidth; cols++) {
            newCell = document.createElement('td');
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
