<script lang="ts">
    import Ingredients from '$lib/Ingredients.svelte';
    import Directions from '$lib/Directions.svelte';
    import Makes from '$lib/Makes.svelte';
    import Header from '$lib/Header.svelte';
    import { onMount } from 'svelte';

    let loaves: number = 1;

    onMount(() => {
        if (localStorage.getItem('loaves')) {
            loaves = parseInt(localStorage.getItem('loaves'));
        }
    });
</script>

<Header topText="The Ultimate">Bread Recipe</Header>
<Ingredients {loaves} />
<Makes bind:loaves />
<Directions />
