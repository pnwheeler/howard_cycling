<script>
    import Info from './Info.svelte';
    import StudentInstructions from './StudentInstructions.svelte';
</script>
<section class="div-block span-70">
    <p class="text-center">Ready to commit? <span class="emphasize">Awesome!</span></p> 
    <p>You've come to the right place my friend. 
        Just send us some basic info and one of the coaches will get right back to you. 
        You'll get a personalized Pit Zone invitation and you're on your way.
    </p>
    <p>Student Athlete registration opens for the 2023 season on <span class="emphasize">April 1</span>.</p>
</section>
<section class="div-block">  
    <h3>To register as a student:</h3>
    <StudentInstructions/>
</section>  
<section class="div-block">
    <p>All athletes get to participate.  We <em>do not</em> make cuts and we do not have tryouts.  
        We <em>do</em> expect athletes to show up for practice and participate as a team member.  
        Just as they would any other sport or other extra curricular activity.  
        In order to maintain a sustainable level of safety ratios, we are limiting the registration 
        of middle school age students. A new middle school age student must be sponsored by a current 
        team member, a sibling of a current member or a family member.  There is no restriction on 
        high school age or ability level.
    </p>
    <div class="div-block">
        <p>MICL registration fees are collected through NICA Pit Zone at the time of registration:</p>
        <ul class="indent">
            <li>​2023 MICL Season Registration Fee (includes 5 League fall events): <span>$300</span>​</li>
        </ul>
    </div>
</section>
<section class="div-block span-70 text-left" >
    <p>
        Not quite sure? We get that. Bring your bike to practice and give it a try!  
        Please fill out the <a href="https://nationalmtb.org/agreement-to-participate-and-release-of-liability-form/" target="_blank">NICA Waiver</a>, and bring it with you when you join us for one practice before needing to register.  
        If you use the NICA electronic waiver form,  please email the signed copy to 
        <a href="mailto:howardcyclingclub@gmail.com">howardcyclingclub@gmail.com</a>.
    </p>
    <p class="text-center">Get ready to ride. It's gonna be sweet. Promise.</p>
</section>
<section class="span-fit">
    <Info/>
</section>

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