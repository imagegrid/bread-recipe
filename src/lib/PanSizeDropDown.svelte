<script lang="ts">
    import { onMount } from 'svelte';
    import storage from './storage';

    export let panSize;

    function handleChange() {
        storage.set('panSize', panSize);
    }
    onMount(() => {
        panSize = storage.get('panSize') || panSize;
    });
</script>

<div class="pansize" on:change={handleChange}>
    <p>Baked in</p>
    <select bind:value={panSize} name="hydration">
        <option value={3}>1</option>
        <option value={3.5}>1.25</option>
        <option value={4.25}>1.5</option>
        <option value={5}>2</option>
    </select>
    <p>Pound Pan</p>
</div>

<style>
    .pansize {
        display: flex;
        justify-content: center;
        margin: 20px 0 5px;
    }
    .pansize p {
        margin: 2px 0 0;
    }
    .pansize select {
        font-size: 16px;
        height: 30px;
        margin: 0 10px;
    }
</style>
