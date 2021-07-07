<script lang="ts">
    export let heading: string;
</script>

<div class="subhead">
    <div class="subhead-inner">
        <h2>{heading}</h2>
    </div>
</div>

<style>
    .subhead {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    .subhead-inner {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #c4c4c4;
        width: 250px;
        height: 35px;
        text-align: center;
    }
    .subhead-inner h2 {
        margin: 0;
        padding: 0 15px;
        height: 20px;
        font-size: 16px;
        letter-spacing: 1px;
        font-family: var(--sans-serif);
        text-transform: uppercase;
        position: relative;
        bottom: -22px;
        background-color: #fff;
    }
</style>
