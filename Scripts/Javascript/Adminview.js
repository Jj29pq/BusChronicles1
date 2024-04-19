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
    }
};
