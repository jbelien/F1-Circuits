History of Formula 1&reg; Circuits
==================================

Introduction
------------
Collaborative project to inventory the different layouts of Formula 1 circuits worldwide.

Circuits list
-------------
* Belgium
    * Spa-Francorchamps (1978 - Today)

---------------------------------------

If you fork the project, do not forget to modify the Google API key generated with [Google Developer Console](https://console.developers.google.com/) in `index.html` (Line 10).

### GeoJSON format
    {
		"type":"Feature",
		"id":"<string>",
		"geometry":{
			"type":"LineString",
			"coordinates":<array>
		},
		"properties":{
			"title":"<string>",
			"description":"<string>",
			"stroke-color":"<string>",
			"stroke-opacity":<number>,
			"stroke-width":<number>
		}
	}

GeoJSON Specification : [http://geojson.org/geojson-spec.html](http://geojson.org/geojson-spec.html)

#### FeatureId format
`<Country ISO Code>`-`<Name>`-`<autonum>`

Country ISO Code : [http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

Examples:
`be-spa-francorchamps-1` (= 1921 layout), `be-spa-francorchamps-2` (= 1939 layout), ...