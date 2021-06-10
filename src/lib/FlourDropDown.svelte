<script>
    import { onMount } from 'svelte';

    export let flourGramsPerCup;

    function handleChange() {
        localStorage.setItem('flourGramsPerCup', flourGramsPerCup.toString());
    }
    onMount(() => {
        if (localStorage.getItem('flourGramsPerCup')) {
            flourGramsPerCup = parseInt(localStorage.getItem('flourGramsPerCup'));
        }
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
        font-size: 120%;
        position: relative;
        top: -8px;
    }
    .ingredients-flour-note {
        display: flex;
        justify-content: center;
        margin-top: 20px;
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
