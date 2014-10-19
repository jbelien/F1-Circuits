$(document).ready(function() {
	$('#info input[type=checkbox]').on('click', function() {
		var id = $(this).attr('id');

		if ($(this).is(':checked')) {
			var json = $(this).data('json');
			map.data.loadGeoJson(json);
		}
		else {
			map.data.remove(map.data.getFeatureById(id));
		}
	});
});