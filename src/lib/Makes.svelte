<script lang="ts">
    import Subhead from './Subhead.svelte';
    export let loaves: number;

    function increment() {
        loaves++;
        localStorage.setItem('loaves', loaves.toString());
    }
    function decrement() {
        if (loaves > 1) {
            loaves--;
            localStorage.setItem('loaves', loaves.toString());
        }
    }
</script>

<section class="serving">
    <Subhead heading="Makes" />
    <div class="ingredients-buttons">
        <a class="button" href={''} on:click|preventDefault={decrement} class:disabled={loaves === 1}><img src="/icons/minus.svg" alt="minus" /></a>
        <p class="loaf-total">{loaves}</p>
        <a class="button" href={''} on:click|preventDefault={increment}><img src="/icons/plus.svg" alt="plus" /></a>
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
    .ingredients-buttons a {
        height: 20px;
        width: 20px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .loaf-total {
        font-family: var(--serif);
        color: var(--accent);
        font-size: 36px;
        margin: -10px 15px;
        padding: 0;
    }
</style>
