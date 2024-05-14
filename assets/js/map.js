

      map = new OpenLayers.Map("mapdiv");
      map.addLayer(new OpenLayers.Layer.OSM());
  
      var lonLat = new OpenLayers.LonLat(-94.5786 ,39.0997 )
            .transform(
              new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
              map.getProjectionObject() // to Spherical Mercator Projection
            );
            
      var zoom=10;
  
      var markers = new OpenLayers.Layer.Markers( "Markers" );
      map.addLayer(markers);
      
      markers.addMarker(new OpenLayers.Marker(lonLat));
      
      map.setCenter (lonLat, zoom);
    