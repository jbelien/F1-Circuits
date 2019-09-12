"use strict";

import { get, writable } from "svelte/store";

import { mapStore } from "./map.js";

export const layerStore = writable(null);

export default function(geojson) {
  const map = get(mapStore);

  const currentLayer = get(layerStore);
  if (currentLayer !== null) {
    map.removeLayer(currentLayer);
  }

  const layer = L.geoJSON(geojson, {}).addTo(map);

  map.fitBounds(layer.getBounds());

  layerStore.set(layer);
}
