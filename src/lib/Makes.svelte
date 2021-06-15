<script lang="ts">
    import Subhead from './Subhead.svelte';
    import Button from './Button.svelte';
    import storage from '$lib/storage';

    export let loaves: number;

    function increment() {
        loaves++;
        storage.set('loaves', loaves.toString());
    }
    function decrement() {
        if (loaves > 1) {
            loaves--;
            storage.set('loaves', loaves.toString());
        }
    }
</script>

<section class="serving">
    <Subhead heading="Makes" />
    <div class="ingredients-buttons">
        <Button on:clicked={decrement} round={true} disabled={loaves === 1}><img src="/icons/minus.svg" alt="minus" /></Button>
        <p class="loaf-total ">{loaves}</p>
        <Button on:clicked={increment} round={true}><img src="/icons/plus.svg" alt="plus" /></Button>
    </div>
    <p class="serving-size">750g Loa{loaves > 1 ? 'ves' : 'f'}</p>
</section>

<style>
    .serving {
        margin-bottom: 10px;
    }
    .serving-size {
        padding: 0;
        margin: 10px 0 0;
    }
    .ingredients-buttons {
        display: flex;
        justify-content: center;
    }
    .loaf-total {
        font-family: var(--serif);
        color: var(--accent);
        font-size: 36px;
        margin: -10px 15px;
        padding: 0;
    }
</style>
