<script lang="ts">
    import Subhead from './Subhead.svelte';
    import Button from './Button.svelte';
    import storage from './storage';
    import PanSizeDropDown from './PanSizeDropDown.svelte';

    export let loaves: number;
    export let panSize: number;
    export let gramsPerLoaf: number;

    function increment() {
        loaves++;
        storage.set('loaves', loaves);
    }
    function decrement() {
        if (loaves > 1) {
            loaves--;
            storage.set('loaves', loaves);
        }
    }
</script>

<section class="serving">
    <Subhead heading="Makes" />
    <div class="ingredients-buttons">
        <Button on:clicked={decrement} round={true} disabled={loaves === 1}><img src="/icons/minus.svg" alt="minus" /></Button>
        <p class="loaf-total noselect">{loaves}</p>
        <Button on:clicked={increment} round={true}><img src="/icons/plus.svg" alt="plus" /></Button>
    </div>
    <p class="serving-size noselect">{gramsPerLoaf}g Loa{loaves > 1 ? 'ves' : 'f'}</p>
    <PanSizeDropDown bind:panSize />
</section>

<style>
    .serving-size {
        font-size: 16px;
        padding: 0;
        margin: 10px 0 0;
    }
    .ingredients-buttons {
        display: flex;
        justify-content: center;
    }
    .loaf-total {
        font-family: var(--sans-serif);
        color: var(--accent);
        font-size: 36px;
        margin: -10px 15px;
        padding: 0;
    }
</style>
