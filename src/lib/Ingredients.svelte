<script lang="ts">
    import Subhead from './Subhead.svelte';
    import FlourDropDown from './FlourDropDown.svelte';
    import HydrationDropDown from './HydrationDropDown.svelte';
    import Button from './Button.svelte';
    import storage from '$lib/storage';
    import { onMount } from 'svelte';

    export let loaves: number;

    let metric = true;
    let flourGramsPerCup = 140;
    let hydration = 0.65;
    const waterGramsPerCup = 236;
    const saltGramsPerTeaspoon = 6;
    const yeastGramsPerTeaspoon = 3;
    const fatGramsPerTeaspoon = 5;

    /* The recipe is based off the 5:3 (flour to water) baking ratio. 
    It produces an average sized loaf of around 750g, which may
    vary somewhat depending on the type of flour used.  */

    $: flour = Math.round(450 * loaves);
    $: water = Math.round((flour * hydration) / 10) * 10;
    $: salt = Math.round(flour * 0.02); /* 2% of flour */
    $: yeast = 8 * loaves; /* yeast sold in 8 gram packets. */
    $: fat = Math.round(flour * 0.02); /* 2% of flour */

    $: waterCups = convertToCups(water, waterGramsPerCup);
    $: flourCups = convertToCups(flour, flourGramsPerCup);
    $: saltTeaspoons = Math.round((flour * 0.02) / saltGramsPerTeaspoon);
    $: yeastTeaspoons = Math.round((flour * 0.01) / yeastGramsPerTeaspoon);
    $: fatTeaspoons = Math.round((flour * 0.03) / fatGramsPerTeaspoon);

    function convertToCups(grams: number, gramsPerCup: number): string {
        let fraction = '';
        const num = (Math.round((grams / gramsPerCup) * 4) / 4).toFixed(2);
        const c = parseFloat(num);

        if (c % 1 === 0.25) fraction = '¼';
        if (c % 1 === 0.5) fraction = '½';
        if (c % 1 === 0.75) fraction = '¾';

        return `${Math.floor(c) || ''}${fraction}`;
    }
    function toggleMeasure() {
        metric = !metric;
        storage.set('metric', metric);
    }
    onMount(() => {
        metric = storage.get('metric') || true;
    });
</script>

<section class="ingredients">
    <Subhead heading="Ingredients" />
    <div class="ingredients-content">
        <div class="ingredients-amounts">
            <ul>
                <li>{metric ? yeast : yeastTeaspoons}{metric ? ' g' : ' Tsp'}</li>
                <li>{metric ? water : waterCups}{metric ? ' g' : ' Cups'}</li>
                <li>{metric ? `${flour}` : `${flourCups}`}{metric ? ` g` : ` Cups`}</li>
                <li>{metric ? salt : saltTeaspoons}{metric ? ' g' : ' Tsp'}</li>
                <li>{metric ? fat : fatTeaspoons}{metric ? ' g' : ' Tsp'}</li>
            </ul>
        </div>
        <div class="ingredients-names">
            <ul>
                <li>Yeast</li>
                <li>Water<span>*</span></li>
                <li>
                    Flour{#if !metric}<span>&dagger;</span>{/if}
                </li>
                <li>Salt</li>
                <li>Fat</li>
            </ul>
        </div>
    </div>
    <div class="ingredients-convert">
        <Button on:clicked={toggleMeasure} small={true}><img src="/icons/refresh-cw.svg" alt="convert" /> g/Cup</Button>
    </div>
    <HydrationDropDown bind:hydration />
    {#if !metric}
        <FlourDropDown bind:flourGramsPerCup />
    {/if}
</section>

<style>
    .ingredients-content {
        display: flex;
        justify-content: center;
    }
    .ingredients-amounts,
    .ingredients-names {
        font-size: 36px;
        font-family: var(--sans-serif);
        white-space: nowrap;
    }
    .ingredients-amounts {
        text-align: right;
        color: var(--accent);
    }
    .ingredients-names {
        text-align: left;
        padding: 0;
    }
    .ingredients ul {
        padding: 0 5px;
        margin: 0;
        line-height: 1.2em;
    }
    .ingredients li {
        letter-spacing: -1px;
        position: relative;
    }
    .ingredients-convert {
        display: flex;
        justify-content: center;
    }
    .ingredients-convert {
        margin-top: 15px;
    }
    .ingredients-convert a img {
        margin-right: 8px;
    }
    .ingredients-names li span {
        position: relative;
        top: -12px;
        right: -5px;
        font-size: 60%;
    }
</style>
