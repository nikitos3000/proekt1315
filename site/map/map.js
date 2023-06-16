let map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.585472, 39.723098],
        zoom: 13
    });

    DG.marker([43.606076, 39.724020]).addTo(map).bindPopup('<img src="/img2/log2.png">');
    DG.marker([43.622623, 39.725447]).addTo(map).bindPopup('Вы кликнули по мне!');
    DG.marker([43.637023, 39.747160]).addTo(map).bindPopup('Вы кликнули по мне!');
    DG.marker([43.556885, 39.773455]).addTo(map).bindPopup('Вы кликнули по мне!');
    DG.marker([43.612499, 39.707808]).addTo(map).bindPopup('Вы кликнули по мне!');
    DG.marker([43.582848, 39.775638]).addTo(map).bindPopup('Вы кликнули по мне!');
   
});
