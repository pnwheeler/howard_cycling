<script>
	import Info from './Info.svelte';
    import CoachInstructions from './CoachInstructions.svelte';
</script>

<section class="div-block span-70">
    <p class="text-center">Ready to commit? <span class="emphasize">Awesome!</span></p>
    <p>
        We need coaches for our team.  A coach will reach out to you as soon as possible.  
        No experience necessary; the league will give you all the training you need. 
        Coaching a team is a very rewarding experience!
    </p>
    <p>Registration for coaches for the 2023 Season opens on <span class="emphasize">March 1st.</span></p>
    <p><span class="emphasize">Note:</span> Existing coaches will get an invitation from the team in Pitzone to renew for this year.</p> 
</section>
<section class="div-block">
    <h3>To register as a new coach:</h3>
    <CoachInstructions/>
</section>
<section class="div-block">
    <p>MICL registration fees are collected through NICA Pit Zone at the time of registration:</p>
    <ul class="indent">
        <li>​Annual coach's league registration fee:  <span>$50</span></li>
        <li>Background check (onetime fee): <span>$38</span></li>
        <li>Additional training cost may depend on your NICA Coach License level.  Get more info on Licensing on the MICL Webpage. ​</li>
    </ul>
    <p>​Howard Cycling Club Team Dues will be invoice on July 1 through Team App:</p>
    <ul class="indent">
        <li>Coaches (includes Howard Cycling Club Jersey): <span>$50</span>​ </li>
    </ul>
</section>
<div class="div-block span-fit">
    <Info/>
</div>

<style>
    .span-70{
        grid-column: span 2;
        width: 70%;
        justify-self: center;
    }
    .span-fit{
        grid-column: span 2;
        width: fit-content;
        justify-self: center;
    }
    @media (max-width: 900px){
        section {
            grid-column: span 2;
        }
        .span-70, .span-fit{
            width: unset;
        }
    }
</style>