<script>
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  import "leaflet";

  import { mapStore } from "./map/map.js";

  let container;

  onMount(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.5.1/dist/leaflet.css";
    link.integrity =
      "sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==";
    link.crossOrigin = "";

    link.onload = () => {
      const map = L.map(container).setView([0.0, 0.0], 2);

      L.control.scale().addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      }).addTo(map);

      mapStore.set(map);
    };

    document.head.appendChild(link);

    return () => {
      map.remove();
      link.parentNode.removeChild(link);
    };
  });
</script>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>

<div bind:this="{container}"></div>
