
const geoArray = JSON.parse(localStorage.getItem('geoArray'));
geoArrayLat = geoArray[geoArray.length - 1].latitude;
geoArrayLon = geoArray[geoArray.length - 1].longitude;

map = new OpenLayers.Map("mapdiv");
map.addLayer(new OpenLayers.Layer.OSM());

var lonLat = new OpenLayers.LonLat(geoArrayLon ,geoArrayLat)
.transform(
      new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
      map.getProjectionObject() // to Spherical Mercator Projection
);

var zoom=13;

var markers = new OpenLayers.Layer.Markers( "Markers" );
map.addLayer(markers);

markers.addMarker(new OpenLayers.Marker(lonLat));

map.setCenter (lonLat, zoom);