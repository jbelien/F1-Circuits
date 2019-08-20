<script>
    import 'leaflet';
    import { onMount } from 'svelte';

    onMount(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.css';
        link.integrity = 'sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==';
        link.crossOrigin = '';

        link.onload = () => {
            const map = L.map('map').setView([0.0, 0.0], 2);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            }).addTo(map);
        };

        document.head.appendChild(link);

        return () => {
            map.remove();
            link.parentNode.removeChild(link);
        };

    });
</script>

<style>
    #map {
        height: 75vh;
        width: 75vw;
    }
</style>

<div id="map"></div>