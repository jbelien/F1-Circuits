var map;

function initialize() {
	var mapOptions = {
		center: { lng: 4, lat: 50.8333 },
		zoom: 8,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		mapTypeControlOptions: { position: google.maps.ControlPosition.TOP_CENTER, mapTypeIds: [ google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP ] },
		scaleControl: true,
		overviewMapControl: true,
		overviewMapControlOptions: { opened: true }
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	map.data.setStyle(function(feature) {
		return {
			strokeColor: feature.getProperty('stroke-color'),
			strokeOpacity: feature.getProperty('stroke-opacity'),
			strokeWeight: feature.getProperty('stroke-width'),
			title: feature.getProperty('title')
		}
	});
	map.data.addListener('addfeature', function(event) {
		if (event.feature.getGeometry().getType() === 'LineString') {
			var bounds=new google.maps.LatLngBounds();
			event.feature.getGeometry().getArray().forEach(function(path) {
				bounds.extend(path);
			});
			event.feature.setProperty('bounds', bounds);
			map.fitBounds(event.feature.getProperty('bounds'));
		}
		else if(e.feature.getGeometry().getType() === 'Polygon') {
			var bounds=new google.maps.LatLngBounds();
			event.feature.getGeometry().getArray().forEach(function(path) {
				path.getArray().forEach(function(latLng) {
					bounds.extend(latLng);
				});
			});
			event.feature.setProperty('bounds',bounds);
			map.fitBounds(event.feature.getProperty('bounds'));
		}
	});
	map.data.addListener('click', function(event) {
		var content = '<strong>'+event.feature.getProperty('title')+'</strong><br>'+event.feature.getProperty('description');
		var info = new google.maps.InfoWindow({ content: content, position: event.latLng }).open(map);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
