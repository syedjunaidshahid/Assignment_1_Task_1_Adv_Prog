// Create a Leaflet map
var mymap = L.map('map').setView([38.627, -90.1994], 12);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Define places of interest
var places = [
    { name: "Forest Park", coordinates: [38.6366, -90.2931] },
    { name: "Gateway Arch", coordinates: [38.6247, -90.1848] },
    { name: "Missouri Botanical Garden", coordinates: [38.6128, -90.2594] },
    { name: "City Museum", coordinates: [38.6334, -90.2005] },
    { name: "Creve Coeur Lake", coordinates: [38.7168592,-90.4867479] }
];

// Add markers and bind popups
for (var i = 0; i < places.length; i++) {
    var marker = L.marker(places[i].coordinates).addTo(mymap);
    marker.bindPopup("<b>" + places[i].name + "</b>").openPopup();
}

// Change symbology for the points
var customIcon = L.divIcon({
    className: 'custom-marker',
    iconSize: [30, 30],
    html: '<div class="marker"></div>'
});

// Add markers with custom icon
for (var i = 0; i < places.length; i++) {
    var customMarker = L.marker(places[i].coordinates, { icon: customIcon }).addTo(mymap);
    customMarker.bindPopup("<b>" + places[i].name + "</b>").openPopup();
}
