const canvasColor = document.getElementById('colorPicker');
const canvasWidth = document.getElementById('inputWedth');
const canvasHeight = document.getElementById('inputHeight');
const pixelCanvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    pixelCanvas.innerHTML = "";
    makeGrid();
});

pixelCanvas.addEventListener('click', function (event) {
    if (event.target.tagName == 'TD') {
        if (event.target.classList.toggle('colored')) {
            event.target.style.backgroundColor = String(canvasColor.value);
        } else {
            event.target.style.backgroundColor = 'white';
        }
    }
});

function makeGrid() {
    const tBody = document.createElement('tbody');
    for (let rows = 0; rows < canvasHeight.value; rows++) {
        const newRow = document.createElement('tr');
        for (let cols = 0; cols < canvasWidth.value; cols++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
        tBody.appendChild(newRow);
    }
    pixelCanvas.appendChild(tBody);
}
