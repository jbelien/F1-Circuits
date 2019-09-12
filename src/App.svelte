<script>
    import Map from './Map.svelte';
    import Sidebar from './Sidebar.svelte';
</script>

<style>
    .container {
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>

<div class="container">
    <Sidebar />
    <Map />
</div>