<script lang="ts">
    import Subhead from './Subhead.svelte';
</script>

<section class="directions">
    <Subhead heading="Directions" />

    <div class="directions-list">
        <ol>
            <li>Mix warm water (32°C/90°F) and yeast.</li>
            <li>Add flour, salt, shortening.</li>
            <li>Knead 10 mins, or until smooth ball.</li>
            <li>Cover the bowl with a towel and place in oven with light on for 45 mins.</li>
            <li>Remove from oven, lightly press out large air bubbles, form into loafs, and place in greased bread trays.</li>
            <li>Let the dough rise for an hour.</li>
            <li>Bake 350°F for 25-30 mins</li>
        </ol>
    </div>
</section>

<style>
    .directions-list {
        display: flex;
        justify-content: center;
    }
    .directions-list ol {
        font-size: 16px;
        list-style-position: inside;
        font-family: var(--sans-serif);
        text-align: left;
        width: 350px;
        line-height: 1.4em;
        padding: 0 25px 10px 50px;
        margin: 5px 0 0;
        list-style-position: outside;
    }
    .directions-list ol li {
        margin-bottom: 0.75em;
    }
</style>
