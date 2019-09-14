<script>
  import Circuit from './Circuit.svelte';

  import { get } from "svelte/store";

  import circuits from "../data/circuits.json";

  const keys = Object.keys(circuits);
</script>

<style>
  #sidebar {
    display: flex;
    flex-direction: column;
    width: 33%;
  }

  h1 {
    text-align: center;
  }

  #list {
    overflow: auto;
  }
</style>

<div id="sidebar">
  <h1>Formula 1® circuits</h1>

  <div id="list">
    {#each keys as key}
    <Circuit code="{key}" circuit="{circuits[key]}" />
    {/each}
  </div>
</div>
