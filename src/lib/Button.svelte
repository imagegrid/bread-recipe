<script>
    import { createEventDispatcher } from 'svelte';

    export let disabled = false;
    export let isRound = false;
    export let isSmall = false;

    const dispatch = createEventDispatcher();

    function clicked() {
        dispatch('clicked');
    }
</script>

<a class="button" on:click={clicked} class:is-round={isRound} class:is-small={isSmall} href={''} class:disabled><slot /></a>

<style>
    .button {
        display: flex;
        align-items: center;
        color: #000;
        background: rgb(252, 252, 252);
        background: linear-gradient(180deg, rgba(252, 252, 252, 1) 0%, rgba(204, 204, 204, 0.5) 100%);
        border: 1px solid #c4c4c4;
        border-radius: 30px;
        padding: 5px 15px;
        text-decoration: none;
        user-select: none;
    }
    .button.is-small {
        padding: 4px 12px;
    }
    .button.is-round {
        padding: 10px;
    }
    .button.disabled {
        background: rgb(252, 252, 252);
        opacity: 0.5;
    }
</style>
