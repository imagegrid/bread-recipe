<script>
    import { createEventDispatcher } from 'svelte';

    export let disabled = false;
    export let round = false;
    export let small = false;

    const dispatch = createEventDispatcher();

    function clicked() {
        dispatch('clicked');
    }
</script>

<button class="button noselect" on:click={clicked} class:round class:small class:disabled><slot /></button>

<style>
    .button {
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: #000;
        background: rgb(252, 252, 252);
        background: linear-gradient(180deg, rgba(252, 252, 252, 1) 0%, rgba(204, 204, 204, 0.5) 100%);
        border: 1px solid #c4c4c4;
        border-radius: 30px;
        padding: 5px 15px;
        text-decoration: none;
        user-select: none;
        cursor: pointer;
    }
    .button:active {
        background: rgb(224, 224, 224);
    }
    .button.small {
        padding: 4px 12px;
    }
    .button.round {
        padding: 10px;
    }
    .button.disabled {
        background: rgb(252, 252, 252);
        opacity: 0.5;
    }
</style>
