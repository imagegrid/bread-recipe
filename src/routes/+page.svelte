<script lang="ts">
    import Ingredients from '$lib/Ingredients.svelte';
    import Directions from '$lib/Directions.svelte';
    import Quantity from '$lib/Quantity.svelte';
    import Header from '$lib/Header.svelte';
    import storage from '$lib/storage';
    import { onMount } from 'svelte';

    let loaves: number = 1;

    onMount(() => {
        loaves = storage.get('loaves') || 1;
    });
</script>

<Header topText="The ultimate">Bread Recipe</Header>
<Ingredients {loaves} />
<Quantity bind:loaves />
<Directions />
