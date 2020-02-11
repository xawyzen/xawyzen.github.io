var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer("https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={key}", {
        key: '30ed08b6749b4fa2a0bbfe8a111078f4',
        attribution: 'cc <a href="https://www.thunderforest.com/">Thunderforest',
        maxZoom: 18,
    }).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
        .setLatLng([51.5, -0.01])
        .setContent("I am a standalone popup.")
        .openOn(mymap);

function onMapClick(e) {
    L.popup().setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);