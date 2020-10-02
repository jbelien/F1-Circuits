<script>
  import { flag, name as countryName } from "country-emoji";

  export let code;
  export let link;
  export let name;
</script>

<style>
  .circuit-title {
    align-items: center;
    display: flex;
  }
  .circuit-title > h2 {
    flex-grow: 1;
    font-size: 1em;
    margin: 0;
  }
  .circuit-title > .flag {
    margin: 0 10px;
    text-align: center;
    width: 25px;
  }
  .circuit-title > .circuit-link {
    margin: 0 10px;
  }
  .circuit-title > .circuit-link > a,
  .circuit-title > .circuit-link > a:visited {
    color: dodgerblue;
    text-decoration: none;
  }
</style>

<div class="circuit-title">
  <span class="flag" title="{ countryName(code) }">{ flag(code) }</span>
  <h2>{ name }</h2>
  <div class="circuit-link">
    <a href="{ link }" target="_blank" title="More information...">
      <i class="mi-circle-information"></i>
    </a>
  </div>
</div>
