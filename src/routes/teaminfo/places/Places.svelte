<script>
    import Location from "./Location.svelte";
    import { locations } from "./locationData";
</script>
<h2 class="pg-name-variant">Beginner and Intermediate MTB Rides</h2>
<div class="locations-container">
    {#each locations as location}
        <section>
            <Location {...location}/>
        </section>
    {/each}
</div>
<style>
    section{
        text-align: left;
    }
    .locations-container{
        display: grid;
        gap: 1em;
        padding-inline: 1em;
		margin-top: 0.5em;
    }
    @media (max-width: 900px){
        .locations-container{
            padding-inline: 0;
        }
    }
</style>