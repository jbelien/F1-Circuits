<script>
  import Title from './Title.svelte';
  import Version from './Version.svelte';

  export let code;
  export let circuit;
</script>

<style>
  .circuit {
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
  }
  .circuit > ul {
    margin: 0;
    margin-top: 10px;
  }
</style>

<div class="circuit">
  <Title code="{code}" name="{circuit.name}" link="{circuit.link}" />
  <ul>
  {#each circuit.geometries as geometry}
  <Version id="{geometry.id}" name="{geometry.name}" />
  {/each}
  </ul>
</div>
