<script lang="ts">
    export let topText: string;
</script>

<header>
    <h1><span>{topText}</span> <slot>Bread Recipe</slot></h1>
</header>

<style>
    h1 {
        font-family: var(--serif);
        text-transform: uppercase;
        font-size: 36px;
        line-height: 1.3;
        margin-bottom: 0;
    }
    h1 span {
        font-size: 16px;
        font-family: var(--sans-serif);
        text-transform: uppercase;
        display: block;
        letter-spacing: 2px;
    }
</style>
