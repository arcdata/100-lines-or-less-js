require(['esri/map', 'dojo/domReady!'], function (Map) {
    var map;

    map = new Map('map', {
        center: [15.376, 49.789],
        zoom: 8,
        basemap: 'topo'
    });
});
