<script>
  export let id;
  export let name;

  let active = false;

  import loadGeoJSON from "./map/geojson";

  const handleClick = event => {
    const previousActive = document.querySelector(".circuit > ul > li.active");
    if (previousActive !== null) {
      previousActive.classList.remove("active");
    }

    active = true;

    fetch(`data/${id}.geojson`)
      .then(response => response.json())
      .then(geojson => {
        loadGeoJSON(geojson);
      });
  };
</script>

<style>
  li {
    cursor: pointer;
  }
  li.active,
  li:hover {
    color: dodgerblue;
  }
</style>

<li class:active on:click="{handleClick}">
  {name}
</li>
