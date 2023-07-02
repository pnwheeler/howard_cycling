<script>
    import { fly, fade } from 'svelte/transition';
    import Places from './places/Places.svelte';
    import Merch from './merch/Merch.svelte';
    import Activities from './activities/Activities.svelte';
   
    export const subpages = [
        { name:'places to ride', component: Places},
        { name: 'activities', component: Activities},
        { name:'merch', component: Merch}
    ];
    $: active = subpages[1];
</script>

<nav class="sub-nav nav-variant" aria-controls="secondary-navigation">
    {#each subpages as subpage, i}
        <button 
        class="nav-tab"
        class:active={active.name === subpage.name}
        on:click={() => active = subpages[i]}>
            {subpage.name}
        </button>
    {/each}
</nav>

{#key active.component}
    <div 
    in:fly|local={{x: -100, duration: 500, delay: 500}}
    out:fade>
        <svelte:component this={active.component} />
    </div>
{/key}


<style>
    .sub-nav{
        display: grid;
        grid-template-columns: repeat(3, 200px);
        justify-content: center;
        padding-block: 0.5em;
        place-items: center;
        font-size: 1.3em;
    }
    button {
        display: flex;
        justify-content: center;
        cursor: pointer;
        border: none;
        border-radius: 1em;
        width: 150px;
        text-transform: uppercase;
        --grad: 10;
        color: var(--color-light);
        background-color: var(--color-dark);
        transition: all .3s ease;
    }
    button:hover {
        font-variation-settings: "GRAD" 50, "XTRA" 0, "wght" 500, "wdth" 100;
        color: var(--color-lighter);   
        box-shadow: 0 0 0 .1em var(--color-disabled); 
    }
    button.active {
        font-variation-settings: "GRAD" 100, "XTRA" 0, "wght" 500, "wdth" 100;
        background-color: var(--color-blue);
        box-shadow: 0 0 0 .1rem var(--color-blue);
        color: white;
    }
    @media (max-width: 670px){
        .sub-nav{
            gap: unset;
            grid-template-columns: repeat(3, auto);
            justify-content: space-evenly;
        }
        .sub-nav button{
            width: fit-content;
            padding-inline: 0.5em;
        }
    }
</style>
