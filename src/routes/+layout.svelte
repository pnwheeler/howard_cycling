<script>
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import '../styles.css';
    
    import { Navbar } from '$lib/components/Navbar';
    export let data;
    let ready = false;
    onMount(() => ready = true);
    let w = 100;
    const mobileWidth = 900;
    $:mobile = (w < mobileWidth) ? true : false;
    let open = false;
</script>

{#if ready}
    <div class="main-layout" bind:clientWidth={w}>
        <Navbar mobile={mobile} open={open}/>
            <main class:mobile>
                {#if mobile}
                    {#key data.url}
                        <slot/>
                    {/key}
                {:else}
                    {#key data.url}
                        <div 
                        in:fly|local={{x: -100, duration: 500, delay: 500}}
                        out:fade>
                            <slot/>
                        </div>
                    {/key}
                {/if}
            </main>
        
        <footer class="footer">
            <h1 class="special-variant">Howard Cycling Club</h1>
            <smaller>Find our socials @</smaller>
            <div id="socials">
                <a href="https://www.facebook.com"> 
                    <img src="/icons/fb_logo.png" alt="facebook"/>
                </a>
                <a href="https://www.teamapp.com"> 
                    <img src="/icons/teamapp_logo.png" alt="facebook"/>
                </a>
                <a href="https://www.instagram.com"> 
                    <img src="/icons/insta_logo.png" alt="facebook"/>
                </a>
            </div>
        </footer>
    </div>
{/if}

<style>
    main{
        padding-inline: 1em;
        padding-bottom: 1em;
        overflow-x: hidden;
    }
    main.mobile{
        padding-top: 4em;
    }
    /* Positioning classes */
    .main-layout {
        text-align: center;
        color: var(--color-light);
        background-color: var(--color-darker);
        min-height: 100vh;
        min-height: 100dvh;
        display: grid;
        justify-items: stretch;
        grid-template-rows:
            auto
            auto
            1fr;
    }
    .footer{
        background-color: var(--color-dark);
        color: var(--color-darkest);
    }
    .footer > h1 {
        text-transform: uppercase;
        font-size: 2em;
        grid-column: span 3;
        text-shadow: 0.1rem 0.1rem var(--color-blue);
    }
    #socials {
        display: flex;
        justify-content: center;
        gap: 1em;
        padding-block:1em;
    }
    smaller {
        color: var(--color-light);
    }
    a {
        width: 30px;
        background-color: transparent;
        border: none;
        background-size: contain;
    }
    a:hover {
        transform: scale(1.1);
    }
</style>