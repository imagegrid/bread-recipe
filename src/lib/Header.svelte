<script lang="ts">
    export let topText: string;
</script>

<header>
    <h1><span>{topText}</span> <slot /></h1>
</header>

<style>
    h1 {
        font-family: var(--serif);
        font-size: 36px;
        font-weight: 400;
        line-height: 0.8;
        margin: 1.3rem 0 0;
        text-transform: uppercase;
    }
    h1 span {
        font-size: 18px;
        font-family: var(--serif);
        font-weight: 700;
        display: block;
        letter-spacing: 1.5px;
        margin-bottom: 1.25rem;
    }
</style>
