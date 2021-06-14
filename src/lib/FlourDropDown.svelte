<script>
    import { onMount } from 'svelte';
    import storage from '$lib/storage';

    export let flourGramsPerCup;

    function handleChange() {
        storage.set('flourGramsPerCup', flourGramsPerCup.toString());
    }
    onMount(() => {
        flourGramsPerCup = storage.get('flourGramsPerCup', 140);
        console.log(`flourGramsPerCup`, typeof flourGramsPerCup);
    });
</script>

<div class="ingredients-flour-note" on:change={handleChange}>
    <p><strong><sup>*</sup></strong> Using</p>
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
    .ingredients-flour-note {
        display: flex;
        justify-content: center;
        margin: 20px 0 5px;
    }
    .ingredients-flour-note p {
        margin: 2px 0 0;
    }
    .ingredients-flour-note select {
        font-size: 16px;
        height: 30px;
        margin: 0 10px;
    }
</style>
