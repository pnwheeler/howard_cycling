<h2 class="pg-name-variant">Merchandise</h2>
<div class="merch">
    <p>The Howard Cycling club may have team merchandise for sale. Please reach out to merchandise coordinator [TBD].
        Merchandise will typically be sold on-site at practices and races. <span class="emphasize">No cash</span>, only credit
        accepted at this time. 
    </p>
    <p>
        Quantities are limited. Pricing and sizes TBD.
    </p>
    <img src='./img/placeholder_merch.jpg' alt="placeholder" class="merch"/>
</div>

<style>
    .merch{
        display: grid;
        gap: 1em;
        grid-template-columns: 1fr;
        
        place-items: center;
        padding-inline: 1em;
		margin-top: 0.5em;
    }
    .merch > p {
        width: min(100%, 700px);
    }
    .merch > img{
        width: min(100%, 400px);
    }
    @media (max-width: 900px){
        .merch{
            width: 100%;
            padding-inline: 0;
        }
    }
</style>