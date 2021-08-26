<script lang="ts">
    export let topText: string;
</script>

<header>
    <h1><span>{topText}</span> <slot /></h1>
</header>

<style>
    h1 {
        font-family: var(--serif);
        font-size: 44px;
        font-weight: 400;
        line-height: 0.8;
        margin: 1.5rem 0 0;
        letter-spacing: -2px;
    }
    h1 span {
        font-size: 18px;
        font-family: var(--serif);
        font-weight: 700;
        text-transform: uppercase;
        display: block;
        letter-spacing: 2.5px;
        margin-bottom: 1.2rem;
    }
</style>
