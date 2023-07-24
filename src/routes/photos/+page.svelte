<script>
    import { gallerypics } from "./photoData";
</script>

<h2 class="pg-name-variant">Photos</h2>
<div id="page-container">
    <img id="hero" src="img/KHOPSHOOTS_HD_19.jpg" alt="larger pic" loading="lazy"/>
    <div id="grid-gallery">
        {#each gallerypics as pic}
            <img src={pic.img_src} alt={pic.img_src} loading="lazy"/>
        {/each}
    </div>
</div>

<style>
    #page-container{
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        padding-inline: 1em;
    }
    #hero{
        width: min(100vw, 800px);
        border-radius: .5em;
        margin-bottom: 2em;
    }
    #grid-gallery > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    #grid-gallery{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        grid-template-rows: repeat(6, 200px);
        gap: 1em;
        grid-auto-flow: dense;
    }
    #grid-gallery > img:nth-child(4n){
        grid-column: span 2;
        grid-row: span 2;
    }
    #grid-gallery > img:nth-child(8n){
        grid-column: span 3;
        grid-row: span 3;
    }
    
    @media (max-width: 900px){
        #page-container{
            padding-inline: 0;
        }
        #grid-gallery{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            grid-template-rows: repeat(4, 200px);
            gap: 1em;
            
        }
        #grid-gallery > img:nth-child(2n){
            grid-column: span 2;
            grid-row: span 2;
        }
        #grid-gallery > img:nth-child(8n){
            grid-column: unset;
            grid-row: unset;
        }
    }
</style>