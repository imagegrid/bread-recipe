<script lang="ts">
    import Subhead from './Subhead.svelte';
    import FlourDropDown from './FlourDropDown.svelte';
    import Button from './Button.svelte';
    import storage from '$lib/storage';
    import { onMount } from 'svelte';

    export let loaves: number;

    let metric = true;
    let flourGramsPerCup = 140;
    const waterGramsPerCup = 236;
    const saltGramsPerTeaspoon = 6;
    const yeastGramsPerTeaspoon = 3;
    const fatGramsPerTeaspoon = 5;

    /* The recipe is based off the 5:3 (flour to water) baking ratio. 
    It produces an average sized loaf of around 750g, which may
    vary somewhat depending on the type of flour used.  */

    $: water = Math.round(290 * loaves); /* 1g = 1ml water */
    $: flour = Math.round((water * 1.6) / 10) * 10; /* 5:3 flour to water */
    $: salt = Math.round(flour * 0.02); /* 2% of flour */
    $: yeast = 8 * loaves; /* yeast sold in 8 gram packets. */
    $: fat = Math.round(flour * 0.03); /* 3% of flour */

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

        return `${Math.round(c) || ''}${fraction}`;
    }
    function toggleMeasure() {
        metric = !metric;
        storage.set('metric', metric.toString());
    }
    onMount(() => {
        metric = storage.get('metric', 'true');
    });
</script>

<section class="ingredients">
    <Subhead heading="Ingredients" />

    <div class="ingredients-content">
        <div class="ingredients-amounts">
            <ul>
                <li>{metric ? `${flour}g` : `${flourCups} Cups`}</li>
                <li>{metric ? water : waterCups}{metric ? 'g' : ' Cups'}</li>
                <li>{metric ? yeast : yeastTeaspoons}{metric ? 'g' : ' Tsp'}</li>
                <li>{metric ? salt : saltTeaspoons}{metric ? 'g' : ' Tsp'}</li>
                <li>{metric ? fat : fatTeaspoons}{metric ? 'g' : ' Tsp'}</li>
            </ul>
        </div>
        <div class="ingredients-names">
            <ul>
                <li>
                    Flour{#if !metric}<span class="asterisk">*</span>{/if}
                </li>
                <li>Water</li>
                <li>Yeast</li>
                <li>Salt</li>
                <li>Fat</li>
            </ul>
        </div>
    </div>
    <div class="ingredients-convert">
        <Button on:clicked={toggleMeasure} small={true}><img src="/icons/refresh-cw.svg" alt="convert" /> g/Cup</Button>
    </div>
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
        font-size: 34px;
        letter-spacing: -1px;
        font-family: var(--serif);
        white-space: nowrap;
        position: relative;
    }
    .ingredients-amounts {
        color: var(--accent);
        text-align: right;
    }
    .ingredients-names {
        text-align: left;
        padding: 0;
    }
    .ingredients ul {
        padding: 0 5px;
        margin: 0;
        line-height: 1.4em;
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
    .asterisk {
        position: absolute;
        top: -5px;
        right: 0px;
        font-size: 75%;
    }
</style>
