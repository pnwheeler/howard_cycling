<h2 class="pg-name-variant">Events</h2>
<div class="events-grid">
    <section class="div-block tl">
        <h3 class="center">2023 Howard Cycling Club Calendar</h3>
        <div class="pane bg-dark border-blue">
            <ul>
                <li><span class="emphasize">March 1:</span> Online registration opens for MICL Coaches.</li>
                <li>
                    <span class="emphasize">April 1:</span> Online registration opens for MICL Student-athletes.
                    See the <a href="/registration">registration tab</a> Pre-season begins.
                </li>
                <li>
                    <span class="emphasize">July 1: Season Begins</span> &ndash; Team Dues must be paid in full
                </li>
                <li class="emphasize">
                    July 15 is the cut off for one day trials and joining for the team.
                </li>
            </ul>
        </div>
    </section>
    <section class="div-block cl">
        <h3 class="center">Practice Schedule</h3>
        <div class="pane border-blue bg-dark">
            <div class="schedule-grid">
                <section>
                    <h3 class="text-center">Weekday</h3>
                    <p><span class="emphasize">When:</span> 6:30 &ndash; 8:00PM</p>
                    <p>
                        <span class="emphasize">Where:</span> Typically held at the Living Farm Museum in Howard
                        County
                    </p>
                </section>
                <section>
                    <h3 class="text-center">Weekend</h3>
                    <p><span class="emphasize">When:</span> 9:00 &ndash; 11:00AM</p>
                    <p>
                        <span class="emphasize">Where:</span> Variable &mdash; held at local and distant trails.
                        Specifics are only available to registered team members.
                    </p>
                </section>
                <section class="more-info">
                    <p class="center">
                        If you are interested in further information please fill out the registration form.
                        There is no obligation after registration and the registration outlines specifics.
                    </p>
                </section>
            </div>
        </div>
    </section>

    <section class="div-block tr">
        <h3>MICL Events</h3>
        <p class="indent">Refer to <a href="https://marylandmtb.org/events-calendar" target="_blank">www.marylandmtb.org</a> for current information and dates regarding races and league events.</p>
    </section>
    <section class="div-block cr">
        <h3>​GRiT</h3>
        <p class="indent">GRiT (Girls Riding Together) program is a NICA national initiative aimed at increasing the overall participation rate of more female student-athletes and female coaches in NICA.  The Mountain Lions have several team members who are GRiT Ambassadors. </p>
        <p>For more information on registration go to the MICL GRiT Website:
        <a href="https://marylandmtb.org/girls-riding-together-grit" target="_blank">www.marylandmtb.org/girls-riding-together</a></p>
    </section>
    <section class="div-block half pane border-light b" id="note">
        <h4 class="emphasize">Note:</h4>
        <ul>
            <li>We use the Stack Team App to keep registered riders and families up to date and share a more detailed schedule for MLCC team members.</li>
            <li>To Ensure that we properly staff our events, and to support any future contact tracing requirements, all riders and coaches MUST RSVP their attendance for EVERY event in Team App.</li>
        </ul>
    </section>
</div>

<style>
    .events-grid{
        display: grid;
        grid-template-areas: 
            "tl tr"
            "cl cr"
            "b b";
        row-gap: 1em;
        column-gap: 2em;
        padding-inline: 1em;
		margin-top: 0.5em;
    }
    .tl {
        grid-area: tl;
    }
    .tr {
        grid-area: tr;
    }
    .cl {
        grid-area: cl;
    }
    .cr {
        grid-area: cr;
    }
    .b {
        grid-area: b;
    }
    .tr::after,
    .cr::after{
        content: "";
        height: 2px;
        width: 100%;
        background-color: var(--color-blue);
    }
    .tl > h3, .cl > h3{
        color: var(--color-blue);
    }
	.schedule-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
        gap: 1em;
	}
    .more-info{
        grid-column: 1 / 3;
    }
    #note{
        justify-self: center;
        font-size: small;
    }
    @media (max-width: 900px){
        .events-grid{
            padding-inline: 0;
            grid-template-areas:
                "tl"
                "cl"
                "b"
                "tr"
                "cr";
        }
        #note{
            width: 100%;
        }
    }
</style>
