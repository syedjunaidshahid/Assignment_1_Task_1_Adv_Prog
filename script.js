// Create a Leaflet map
var mymap = L.map('map').setView([38.627, -90.1994], 12);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

var arch = L.icon({iconUrl:'https://www.tripsavvy.com/thmb/dRMQzyhir2_vVyIvlYpbuC_aGkc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gateway-to-the-west-561452183-5975330db501e800117858c8.jpg', 
                   iconSize: [30, 30], 
                   
                  });

var fpark = L.icon({
    iconUrl: 'https://planning-org-uploaded-media.s3.amazonaws.com/legacy_resources/greatplaces/spaces/2013/img/forestpark01.jpg', 
    iconSize: [30, 30]
     
});

var botgard = L.icon({
    iconUrl: 'https://149419083.v2.pressablecdn.com/wp-content/uploads/Central_Axis_Tom_Incrocci103-2.jpg', 
    iconSize: [30, 30]  
});

var citymsm = L.icon({
    iconUrl: 'https://explorestlouis.com/wp-content/uploads/2024/01/City-Museum-Partner-Listing-2.jpg', 
    iconSize: [30, 30]
});

var armory = L.icon({
    iconUrl: 'https://s7d2.scene7.com/is/image/TWCNews/IMG_1274?wid=1250&hei=703&$wide-bg$', 
    iconSize: [30, 30], 
});

// Define places of interest
var forestpark = L.marker([38.6366, -90.2931],{icon: fpark}).addTo(mymap);
var gatewayarch = L.marker([38.6247, -90.1848],{icon: arch}).addTo(mymap);
var botgarden = L.marker([38.6128, -90.2594],{icon: botgard}).addTo(mymap);
var citymuseum = L.marker([38.6334, -90.2005],{icon: citymsm}).addTo(mymap);
var armorystl = L.marker([38.6316617,-90.2402737],{icon: armory}).addTo(mymap);


gatewayarch.bindPopup("<b>The Gateway Arch").openPopup();
forestpark.bindPopup("<b>Forest Park St. Louis").openPopup();
botgarden.bindPopup ("<b>Missouri Botanical Garden").openPopup();
citymuseum.bindPopup("<b>City Museum St. Louis").openPopup();
armorystl.bindPopup("<b>Armory STL").openPopup();
