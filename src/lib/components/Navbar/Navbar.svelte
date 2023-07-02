<script>
    import { page } from "$app/stores";
    import { fade, fly, slide} from 'svelte/transition';
    import { quartInOut } from "svelte/easing";
    
    const links = [
        { href:'/', name:'home'}, 
        { href:'/events', name:'events'},
        { href:'/registration', name:'registration'},
        { href:'/coaches', name:'coaches'}, 
        { href:'/faq', name:'faq'}, 
        { href:'/teaminfo', name:'team info'},   
        { href:'/photos', name:'photos'}
    ];
   
    let open = false;
    let w = 100;
    const targetWidth = 900;
    $:mobileMenu = (w < targetWidth) ? true : false;
    const handleMobileIconClick = () => (open = !open);
    
    
    $:routeId = $page.route.id;
    // Reduce emphasis on navbar when we have pages with nested page layouts
    $:disabled = (routeId === '/teaminfo');
</script>


<div class="title">
    <h1 class="special-variant" transition:fade={{duration: 1000}}>Howard Cycling Club</h1>
    <img transition:fly={{duration: 1000, delay: 300, x: 100}} src='/img/HowardLion_Vectorized.png' alt="logo"/>
</div>
<nav bind:clientWidth={w} class="nav-bar nav-variant" class:greyscale={disabled} aria-controls="primary-navigation">
    {#if mobileMenu}
        <button class:open id="menu-button" on:click={handleMobileIconClick}>
            {#key open}
                {#if open}
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="currentColor" stroke="currentColor"><path d="M481.333-421.334 279.666-219.667q-13.333 13.333-30.333 13.333t-29.666-13.333q-13.333-12.666-13.333-29.5 0-16.833 13.333-29.499l202.667-202.667L218.667-684Q206-696.667 206-713.333q0-16.667 12.667-29.334 12.666-12.666 29.5-12.666 16.833 0 30.166 12.666L480-541.333l201-201Q693.667-755 710.667-755T741-742.333Q753.666-729 753.666-711.5T741-681.334L539.666-479.667l201.667 202.334Q753.666-265 753.666-248t-12.333 29.333Q729-206.334 712.167-206.334t-28.5-12.333L481.333-421.334Z"/></svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="currentColor" stroke="currentColor"><path d="M150.333-225.334q-17.833 0-30.083-12.406T108-267.573q0-17.427 12.25-29.593 12.25-12.167 30.083-12.167h661.334q17.183 0 29.425 12.284 12.241 12.283 12.241 29.71t-12.241 29.716q-12.242 12.289-29.425 12.289H150.333Zm0-213.333q-17.833 0-30.083-12.406Q108-463.48 108-480.906q0-17.427 12.25-29.594 12.25-12.166 30.083-12.166h661.334q17.183 0 29.425 12.283 12.241 12.284 12.241 29.711 0 17.426-12.241 29.716-12.242 12.289-29.425 12.289H150.333Zm0-212q-17.833 0-30.083-12.406Q108-675.48 108-692.907q0-17.426 12.25-29.593 12.25-12.166 30.083-12.166h661.334q17.183 0 29.425 12.283 12.241 12.284 12.241 29.71 0 17.427-12.241 29.717-12.242 12.289-29.425 12.289H150.333Z"/></svg>
                {/if}
            {/key}
        </button>
        {#if open}
            <div class="mobile" class:open 
            in:fly|local={{duration: 400, x: 500, easing:quartInOut}}
            out:slide|local={{duration:700, easing:quartInOut}}
            >
                {#each links as {href, name}}
                    <a class="nav-grad" class:active={routeId == href} {href} on:click={handleMobileIconClick}>{name}</a>
                {/each}
            </div>
        {/if}
    {:else}
        {#each links as {href, name}}
            <a class="nav-grad" class:active={routeId == href} {href}>{name}</a>
        {/each}
    {/if}
</nav>
<style>

    .title {
        display: flex;
        background-color: var(--color-darkest);
        justify-content: center;
        align-items: center;
        font-size: min(2.3vw, 1em);
        gap: 1em;
        padding: min(1vh, 1em);
        text-shadow: 0.1rem 0.1rem var(--color-lighter);
    }
    .title > img{
        display: flex;
        width: min(150px, 20vw);
    }
    .title > h1 { 
        color:var(--color-blue);
        text-transform: uppercase;
        
    }
    .nav-bar{
        --icon-size: 1.5em;
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
    #menu-button{
        cursor: pointer;
        display: flex;
        height: var(--icon-size);
        width: var(--icon-size);
        align-items: center;
        justify-self: end;
        border:none;
        padding: none;
        color: white;
        background-color: transparent;
    }
    svg{
        min-width: 1.5em;
        width: 1.5em;
        height: auto;
    }
    #menu-button.open svg{
        color: var(--color-disabled);
    }
    #menu-button svg{
        color: var(--color-blue);
    }
    .mobile{
        display: none;
    }
    .mobile.open{
        display: flex;
        flex-direction: column;
        gap: 1em;
        position: absolute;
        padding-block: 1em;
        top: var(--icon-size);
        background-color:var(--color-darkest);
        width: 100%;
        height: 100vh;
        z-index: 10;
    }
    .mobile.open > a::after{
        width: 200px;
    }
    a {
        cursor: pointer;
        z-index: 2;
        justify-content: center;
        justify-self: stretch;
        text-decoration: none;
        color: var(--color-light);
        white-space: nowrap;
        transition: all .5s ease;
    }
    a:hover {
        --grad: 100;
        color: var(--color-lighter);
    }
    a::after{
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
    a:hover::after{
        top: 50%;
        opacity: 1;
    }
    a.active{
        --grad: 100;
        color: white;
    }
    a.active::after{
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