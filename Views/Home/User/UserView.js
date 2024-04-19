var view = {
    displayBusInfo: function () {
        var busInfoDiv = document.getElementById('busInfo');
        busInfoDiv.innerHTML = '';
        for (var i = 0; i < model.busData.length; i++) {
            var busInfo = model.busData[i];
            var busInfoElement = document.createElement('p');
            busInfoElement.textContent = busInfo.transportadora + ': ' + busInfo.precio;
            busInfoDiv.appendChild(busInfoElement);
        }
    },
    displayPagination: function () {
        var paginationDiv = document.getElementById('pagination');
        paginationDiv.innerHTML = '';
        for (var i = 0; i < Math.ceil(model.busData.length / controller.itemsPerPage); i++) {
            var pageElement = document.createElement('a');
            pageElement.textContent = i + 1;
            if (i === controller.currentPage) {
                pageElement.className = 'active';
            }
            pageElement.onclick = (function (i) {
                return function () {
                    controller.goToPage(i);
                };
            })(i);
            paginationDiv.appendChild(pageElement);
        }
    }
};
