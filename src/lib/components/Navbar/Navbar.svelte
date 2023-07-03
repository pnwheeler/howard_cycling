<script>
    import { page } from "$app/stores";
    import MobileMenu from "./MobileMenu.svelte";
    import { fade, fly} from 'svelte/transition';
    import { quartInOut, quartOut } from "svelte/easing";
    
    const links = [
        { href:'/', name:'home'}, 
        { href:'/events', name:'events'},
        { href:'/registration', name:'registration'},
        { href:'/coaches', name:'coaches'}, 
        { href:'/faq', name:'faq'}, 
        { href:'/teaminfo', name:'team info'},   
        { href:'/photos', name:'photos'}
    ];
   
    export let open = false;
    export let mobile = false;
    export let onClick = () => (open = !open);
    export let selected = links[0];
    $:routeId = $page.route.id;
    // Reduce emphasis on navbar when we have pages with nested page layouts
    $:disabled = (routeId === '/teaminfo' && !mobile);
</script>



{#if mobile}
    <div class="mobile-container">
        <div class="sticky-bar">
            <span class="mobile-heading">
                Howard Cycling Club <span style="color: var(--color-blue);">&blacktriangleright;</span> {selected.name}
            </span> 
            <MobileMenu {open} {onClick} width={50}/>
        </div>
        {#if open}
            <nav class="mobile-overlay nav-variant" class:open 
            in:fly|local={{duration: 700, x: 500, delay: 0, easing:quartOut}}
            out:fly|local={{duration: 1000, x: 500, delay: 300, easing:quartInOut}}>
                {#each links as {href, name}, i}
                    <a class:active={routeId == href} {href} on:click={onClick} on:click={()=>(selected = links[i])}>{name}</a>
                {/each}
            </nav>
        {/if}
    </div>
{:else}
    <div class="header">
        <h1 class="special-variant" transition:fade={{duration: 1000}}>Howard Cycling Club</h1>
        <img transition:fly={{duration: 1000, delay: 300, x: 100}} src='/img/HowardLion_Vectorized.png' alt="logo"/>
    </div>
    <nav class="nav-bar nav-variant" class:greyscale={disabled} aria-controls="primary-navigation">
        {#each links as {href, name}}
            <a class:active={routeId == href} {href}>{name}</a>
        {/each}
    </nav>
{/if}

<style>
    .header {
        display: flex;
        background-color: var(--color-darkest);
        justify-content: center;
        align-items: center;
        font-size: min(2.3vw, 1em);
        gap: 1em;
        padding: min(1vh, 1em);
        text-shadow: 0.15rem 0.15rem var(--color-lighter);
    }
    .header > img{
        display: flex;
        width: min(150px, 20vw);
    }
    .header > h1 { 
        color:var(--color-blue);
        text-transform: uppercase;
    }
/* ----------------------mobile version-------------------*/  
    .mobile-container{
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 10;
    }
    .sticky-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3.5em;
        box-shadow: 0 0.1rem 0 0 var(--color-blue); 
        background-color: var(--color-darker);
    }
    .mobile-heading{
        padding-left: 1em; 
        color: var(--color-disabled);
    }
    .mobile-overlay{
        display: none;
        
    }
    .mobile-overlay.open{
        padding-top: 2em;
        position:absolute;
        display: flex;
        background-color: var(--color-dark);
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        top: 3.5em;
        z-index: 11;
        gap: 1em;
        overflow: hidden;
    }
    .mobile-overlay a{
        margin-right: 0.5em;
        padding-right: 0.5em;
        justify-content: end;
        text-decoration: none;
        font-size: 2em;
        text-transform: uppercase;
        transition: all .2s;
        
    }
    .mobile-overlay a.active{
        font-variation-settings: "GRAD" 100, "XTRA" 0, "wght" 500, "wdth" 100;
        color: white;
        box-shadow: 0.1em 0 0 var(--color-blue); 
    }
/* --------------------non-mobile version-------------------*/

    .nav-bar{
        display: grid;
        grid-auto-flow: column;
        gap: 0.5em;
        padding-inline: 0.5rem;
        padding-block: 0.1rem;
        position: sticky;
        top: -0.1rem;
        z-index: 5;
        text-transform: uppercase;
        font-size: var(--size-step-2);
        background-color: var(--color-dark);
        box-shadow: 0 0.1rem 0 var(--color-disabled); 
    }
    .nav-bar a {
        cursor: pointer;
        z-index: 2;
        justify-content: center;
        justify-self: stretch;
        text-decoration: none;
        color: var(--color-light);
        white-space: nowrap;
        transition: all .5s ease;
    }
    .nav-bar a:hover {
        --grad: 100;
        color: var(--color-lighter);
    }
    .nav-bar a::after{
        pointer-events: none;
        content: '';
        position: absolute;
        width: 90%;
        height: 70%;
        top: 100%;
        background-color: transparent;
        border-radius: 0.5em;
        z-index: -1;
        box-shadow: 0 0 0 0.075em var(--color-blue);
        opacity: 0;
        transform: translateY(-50%);
        transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    .nav-bar a:hover::after{
        top: 50%;
        opacity: 1;
    }
    .nav-bar a.active{
        font-variation-settings: "GRAD" 100, "XTRA" 0, "wght" 500, "wdth" 100;
        color: white;
    }
    .nav-bar a.active::after{
        top: 50%;
        background-color: var(--color-blue);
        opacity: 1;   
    }
    .greyscale a {
        opacity: .3;
    }
    .greyscale:hover a{
        opacity: 1;
    }
</style>