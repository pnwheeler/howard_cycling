<script>
    import CoachCard from "./CoachCard.svelte";
    import { profiles } from "./coaches";
</script>

<h2 class="pg-name-variant">Meet the coaches</h2>
<div class="coaches-container">
    {#each profiles as profile}
        <div><CoachCard {...profile}/></div>
    {/each}
</div>

<style>
    .coaches-container{
        display: flex;
        flex-flow: row wrap;
        gap: 2em;
        justify-content: center;
        align-items: start;
		padding-inline: 1em;
		margin-top: 0.5em;
    }
</style>
