<script>
    import { page } from "$app/stores";
    import HamburgerButton from "./HamburgerButton.svelte";
    import { fade, fly} from 'svelte/transition';
    import { quartInOut, quartOut } from "svelte/easing";

    
    const links = [
        { href:'/', name:'home', id: 0}, 
        { href:'/events', name:'events', id: 1},
        { href:'/registration', name:'registration', id:2},
        { href:'/coaches', name:'coaches', id:3}, 
        { href:'/faq', name:'faq', id:4}, 
        { href:'/teaminfo', name:'team info', id:5},   
        { href:'/photos', name:'photos', id:6}
    ];
   
    export let open = false;
    export let mobile = false;
    export let onClick = () => (open = !open);
    $:index = links.findIndex(link => link.href == routeId);
    $:routeId = $page.route.id;
    // Reduce emphasis on navbar when we have pages with nested page layouts
    $:disabled = (routeId === '/teaminfo' && !mobile);
</script>



{#if mobile}
    <div class="mobile-container">
        <div class="sticky-bar">
            <span class="mobile-heading">
                Howard Cycling Club <span style="color: var(--color-blue);">&blacktriangleright; 
                    {links[index].name}
                </span>
            </span> 
            <HamburgerButton {open} {onClick} width={50}/>
        </div>
        {#if open}
            <nav class="overlay nav-variant" class:open 
            in:fly|local={{duration: 900, x: 500, delay: 200, easing:quartOut}}
            out:fly|local={{duration: 1000, x: 500, delay: 300, easing:quartInOut}}>
                {#each links as {href, name}}
                    <a class:active={routeId == href} {href} on:click={onClick}>{name}</a>
                {/each}
            </nav>
        {/if}
    </div>
{:else}
    <nav class="nav-bar nav-variant" class:greyscale={disabled} aria-controls="primary-navigation">
        {#each links as {href, name}}
            <a class:active={routeId == href} {href}>{name}</a>
        {/each}
    </nav>
{/if}

<style>
/* ----------------------mobile version-------------------*/  
    .mobile-container{
        position: fixed;
        top: 0;
        width: 100vw;
        display: flex;
        flex-direction: column;
        z-index: 4;
    }
    .sticky-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 3.5em;
        border-bottom: 0.15rem solid var(--color-blue); 
        background-color: rgba(24, 24, 24, 0.85);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    .mobile-heading{
        padding-left: 1em; 
        color: var(--color-disabled);
    }
    .overlay{
        display: none;
        
    }
    .overlay.open{
        padding-top: 2em;
        position:relative;
        display: flex;
        background-color: var(--color-dark);
        flex-direction: column;
        min-height: 100vh; 
        width: 100%;
        top: 0;
        z-index: 3;
        gap: 1em;
        overflow: hidden;
    }
    .overlay a{
        margin-right: 0.5em;
        padding-right: 0.5em;
        justify-content: end;
        text-decoration: none;
        font-size: 2em;
        box-shadow: none;
        transition: all .2s;  
    }
    .overlay a.active{
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
        white-space: nowrap;
        transition: all .5s ease;
    }
    .nav-bar a:hover {
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