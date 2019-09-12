<script>
  import { flag, name } from "country-emoji";
  import { get } from "svelte/store";

  import circuits from "../data/circuits.json";

  import { mapStore } from "./map/map";
  import loadGeoJSON from "./map/geojson";

  const keys = Object.keys(circuits);

  const handleClick = event => {
    const id = event.target.dataset.id;

    fetch(`data/${id}.geojson`)
      .then(response => response.json())
      .then(geojson => {
        loadGeoJSON(geojson);
      });
  };
</script>

<style>
  #sidebar {
    display: flex;
    flex-direction: column;
  }

  h1 {
    text-align: center;
  }

  #list {
    overflow: auto;
  }

  .circuit {
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
  }
  .circuit-title {
    align-items: center;
    display: flex;
  }
  .circuit-title > h2 {
    margin: 0;
  }
  .circuit-title > .flag {
    margin-right: 10px;
    text-align: center;
    width: 25px;
  }
  .circuit > ul {
    margin: 0;
    margin-top: 10px;
  }
</style>

<div id="sidebar">
  <h1>Formula 1® circuits</h1>

  <div id="list">
    {#each keys as key}
    <div class="circuit">
      <div class="circuit-title">
        <span class="flag" title="{ name(key) }">{ flag(key) }</span>
        <h2>{ circuits[key].name }</h2>
      </div>
      <div class="circuit-link">
        <a href="{ circuits[key].link }" target="_blank">
          More information...
        </a>
      </div>
      <ul>
        {#each circuits[key].geometries as geometry}
        <li data-id="{ geometry.id }" on:click="{handleClick}">
          { geometry.name }
        </li>
        {/each}
      </ul>
    </div>
    {/each}
  </div>
</div>
