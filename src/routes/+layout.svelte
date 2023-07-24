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
        {#if !mobile}
            <div class="header">
                <h1 class="decorative-shadow" in:fade={{duration: 1000}}>Howard Cycling Club</h1>
                <img in:fly={{duration: 1000, delay: 300, x: 100}} src='/img/HowardLion_Vectorized.png' alt="logo"/>
            </div>
        {/if}
        <Navbar mobile={mobile} open={open}/>
        <main class:mobile>
            {#key data.url}
                <div 
                in:fly|local={{x: -100, duration: 500, delay: 500}}
                out:fade>
                    <slot/>
                </div>
            {/key}
        </main>
        
        <footer>
            <h1 class="decorative-shadow">Howard Cycling Club</h1>
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
    .header {
        display: flex;
        background-color: var(--color-darkest);
        justify-content: center;
        align-items: center;
        gap: 1em;
        padding: min(1vh, 1em);
    }
    .header > img{
        display: flex;
        width: min(150px, 20vw);
    }
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
        min-height: 100vh;
        display: grid;
        justify-items: stretch;
        grid-template-rows:
            auto
            auto
            1fr;
    }
    footer{
        background-color: var(--color-dark);
    }
    footer > h1 {
        font-size: 2em;
        grid-column: span 3;
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
        flex-basis: 40px;
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
        color: var(--color-light);
    }
</style>