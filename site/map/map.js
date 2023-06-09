let map;

DG.then(function () {
    map = DG.map('map', {
        center: [54.98, 82.89],
        zoom: 13
    });

    DG.marker([54.98, 82.89]).addTo(map).bindPopup('Вы кликнули по мне!');
});