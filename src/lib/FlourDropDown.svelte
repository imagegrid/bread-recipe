<script lang="ts">
    import { onMount } from 'svelte';
    import storage from '$lib/storage';

    export let flourGramsPerCup: number;

    function handleChange() {
        storage.set('flourGramsPerCup', flourGramsPerCup);
    }
    onMount(() => {
        flourGramsPerCup = storage.get('flourGramsPerCup') || 140;
    });
</script>

<div class="ingredients-note" on:change={handleChange}>
    <p><strong><sup>&dagger;</sup></strong> Using</p>
    <select bind:value={flourGramsPerCup} name="flourGramsPerCup">
        <option value={120}>120g</option>
        <option value={130}>130g</option>
        <option value={140} selected>140g</option>
        <option value={150}>150g</option>
    </select>
    <p>per cup</p>
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
        margin: 20px 0 5px;
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
