/* eslint-disable no-undef */
let map;

DG.then(() => {
  map = DG.map('map', {
    center: [43.585472, 39.723098],
    zoom: 12,
  });

  DG.marker([43.606076, 39.724020])
    .addTo(map)
    .bindPopup('<div>Уютная квартира с видом на море<br><a href="../kupit/buy.html">Перейти к разделу</a><img src="../img/ImgOfAppart/apart1_2.png" alt="Изображение" style="max-width: 75px; max-height: 75px;"></div>');
  DG.marker([43.622623, 39.725447])
    .addTo(map)
    .bindPopup('<div>Уютная квартира в минималистическом стиле<br><a href="../kupit/buy.html">Перейти к разделу</a><img src="../img/ImgOfAppart/apart4_3.png" alt="Изображение" style="max-width: 75px; max-height: 75px;"></div>');
  DG.marker([43.637023, 39.747160])
    .addTo(map)
    .bindPopup('<div><br>Изысканный особняк в эклектической стилистике<a href="../kupit/buy.html">Перейти к разделу</a><img src="../img/ImgOfHouses/house4_1.png" alt="Изображение" style="max-width: 75px; max-height: 75px;"></div>');
  DG.marker([43.556885, 39.773455])
    .addTo(map)
    .bindPopup('<div>Дом в стиле ХайТек<br><a href="../kupit/buy.html">Перейти к разделу</a><img src="../img/ImgOfHouses/house3_1.png" alt="Изображение" style="max-width: 75px; max-height: 75px;"></div>');
  DG.marker([43.612499, 39.707808])
    .addTo(map)
    .bindPopup('<div>Изысканный особняк в историческом районе<br><a href="../kupit/buy.html">Перейти к разделу</a><img src="../img/ImgOfHouses/house2_1.png" alt="Изображение" style="max-width: 75px; max-height: 75px;"></div>');
  DG.marker([43.582848, 39.775638])
    .addTo(map)
    .bindPopup('<div>Уютная квартира в стиле лофт<br><a href="../kupit/buy.html">Перейти к разделу</a><img src="../img/ImgOfAppart/apart3_2.png" alt="Изображение" style="max-width: 75px; max-height: 75px;"></div>');
});
