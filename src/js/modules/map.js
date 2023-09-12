const center = [55.75663929126742, 37.59245869472879];

function init() {
  const map = new ymaps.Map('map', {
    center,
    zoom: 18
  });

  const placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: `${app.path.rootFolder}/${app.path.buildFolder}/img/iconGeo.svg`,
    iconImageSize: [40, 55],
    iconImageOffset: [-80, -10]
  });

  map.geoObjects.add(placemark);
}
ymaps.ready(init);



