<script lang="ts">
    import { onMount } from 'svelte';
    import storage from '$lib/storage';

    export let hydration;

    function handleChange() {
        storage.set('hydration', hydration);
    }
    onMount(() => {
        hydration = storage.get('hydration') || 0.65;
    });
</script>

<div class="ingredients-note" on:change={handleChange}>
    <p><strong><sup>*</sup></strong> Using</p>
    <select bind:value={hydration} name="hydration">
        <option value={0.5}>50%</option>
        <option value={0.55}>55%</option>
        <option value={0.6}>60%</option>
        <option value={0.65} selected>65%</option>
        <option value={0.7}>70%</option>
        <option value={0.75}>75%</option>
        <option value={0.8}>80%</option>
    </select>
    <p>Hydration</p>
</div>

<style>
    sup {
        vertical-align: top;
        font-size: 100%;
        position: relative;
        top: -5px;
    }
    .ingredients-note {
        display: flex;
        justify-content: center;
        margin: 30px 0 5px;
    }
    .ingredients-note p {
        margin: 2px 0 0;
    }
    .ingredients-note select {
        font-size: 16px;
        height: 30px;
        margin: 0 10px;
    }
</style>
