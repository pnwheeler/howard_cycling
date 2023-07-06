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
            <smaller>Follow us on social media!</smaller>
            <div class="socials">
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
        background-color: var(--color-darkest);
        border-top: 0.1em solid var(--color-light);
    }
    .footer > h1 {
        text-transform: uppercase;
        font-size: 2em;
        grid-column: span 3;
        color: var(--color-blue);
        text-shadow: 0.1rem 0.1rem var(--color-lighter);
    }
    .socials {
        display: flex;
        justify-content: center;
        gap: 2em;
        padding-block:1em;
        flex-basis: 50px;
    }
    .socials a{
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 50px;
    }
    a {
        position: relative;
        background-color: transparent;
        border: none;
        background-size: contain;
        transform: scale(1);
        transition: transform .2s ease;
    }
    a:hover {
        transform: scale(1.3);
    }
    smaller {
        color: var(--color-disabled);
    }
</style>