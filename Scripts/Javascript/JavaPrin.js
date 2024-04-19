// Datos de ejemplo
var busData = [
    { transportadora: 'Expreso sabana', precio: '' },
    { transportadora: 'TransGalaxia', precio: '' },
    { transportadora: 'Cootransfunza', precio: '' },
    
];

var currentPage = 0;
var itemsPerPage = 10;

function updateTable() {
    var table = document.getElementById('busTable');
    // Borrar filas existentes
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    // Agregar nuevas filas
    for (var i = currentPage * itemsPerPage; i < (currentPage + 1) * itemsPerPage && i < busData.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = busData[i].transportadora;
        cell2.innerHTML = busData[i].precio;
    }
}

function updatePagination() {
    var pagination = document.getElementById('pagination');
    // Borrar botones existentes
    while (pagination.firstChild) {
        pagination.removeChild(pagination.firstChild);
    }
    // Agregar nuevos botones
    for (var i = 0; i < Math.ceil(busData.length / itemsPerPage); i++) {
        var button = document.createElement('a');
        button.innerHTML = i + 1;
        if (i === currentPage) {
            button.className = 'active';
        }
        button.onclick = (function (i) {
            return function () {
                currentPage = i;
                updateTable();
                updatePagination();
            };
        })(i);
        pagination.appendChild(button);
    }
}

// Inicializar la tabla y la paginación
updateTable();
updatePagination();
