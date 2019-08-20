<script>
    import circuits from '../data/circuits.json';

    const keys = Object.keys(circuits);
</script>

<div id="sidebar">
    <h1>Formula 1® circuits</h1>

    <ul>
        {#each keys as key}
            <li>{key} <a href="{circuits[key].link}" target="_blank">{circuits[key].name}</a> ({circuits[key].geometries.length})</li>
        {/each}
    </ul>
</div>