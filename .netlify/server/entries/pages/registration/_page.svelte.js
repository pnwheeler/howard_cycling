import { c as create_ssr_component, v as validate_component, f as each, m as missing_component, d as add_attribute, e as escape } from "../../../chunks/index.js";
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="div-block pane border-light"><h3>Have a question?</h3>
    <p>Email us at <a href="mailto:howardcyclingclub@gmail.com">howardcyclingclub@gmail.com</a>
    for additional information.</p></div>`;
});
const StudentInstructions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="border-blue pane bg-dark"><ol><li>Send an email to howardcyclingclub@gmail.com with the following information:</li>
        <ul><li>Rider&#39;s Name</li>
            <li>Age</li>
            <li>Grade level (next school year)</li>
            <li>Parent contant information: name, phone #, &amp; email</li></ul>
        <li>A coach will send you an invite from NICA Pitzone.</li>
        <li>Use the link in the email you received from NICA Pitzone, fill out the registration, and registration pay the fees to NICA.</li>
        <li>Our Membership committee will add you to TeamApp for emails and communication.</li>
        <li>Team dues will be collected through TeamApp after registration is completed.</li></ol></div>`;
});
const Student_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".span-70.svelte-i9hu5c{grid-column:span 2;width:70%;justify-self:center}.span-fit.svelte-i9hu5c{grid-column:span 2;width:fit-content;justify-self:center}@media(max-width: 900px){section.svelte-i9hu5c{grid-column:span 2}.span-70.svelte-i9hu5c,.span-fit.svelte-i9hu5c{width:unset}}",
  map: null
};
const Student = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="div-block span-70 svelte-i9hu5c"><p class="text-center">Ready to commit? <span class="emphasize">Awesome!</span></p> 
    <p>You&#39;ve come to the right place my friend. 
        Just send us some basic info and one of the coaches will get right back to you. 
        You&#39;ll get a personalized Pit Zone invitation and you&#39;re on your way.
    </p>
    <p>Student Athlete registration opens for the 2023 season on <span class="emphasize">April 1</span>.</p></section>
<section class="div-block svelte-i9hu5c"><h3>To register as a student:</h3>
    ${validate_component(StudentInstructions, "StudentInstructions").$$render($$result, {}, {}, {})}</section>  
<section class="div-block svelte-i9hu5c"><p>All athletes get to participate.  We <em>do not</em> make cuts and we do not have tryouts.  
        We <em>do</em> expect athletes to show up for practice and participate as a team member.  
        Just as they would any other sport or other extra curricular activity.  
        In order to maintain a sustainable level of safety ratios, we are limiting the registration 
        of middle school age students. A new middle school age student must be sponsored by a current 
        team member, a sibling of a current member or a family member.  There is no restriction on 
        high school age or ability level.
    </p>
    <div class="div-block"><p>MICL registration fees are collected through NICA Pit Zone at the time of registration:</p>
        <ul class="indent"><li>​2023 MICL Season Registration Fee (includes 5 League fall events): <span>$275</span>​</li></ul>
        <p>​Howard Cycling Club Team Dues will be invoiced on <span class="emphasize">July 1</span> through TeamApp:</p>
        <ul class="indent"><li>Student Athletes (includes Howard Cycling Club Jersey): <span>$75</span>​</li></ul></div></section>
<section class="div-block span-70 text-left svelte-i9hu5c"><p>Not quite sure? We get that. Bring your bike to practice and give it a try!  
        Please fill out the <a href="https://nationalmtb.org/agreement-to-participate-and-release-of-liability-form/" target="_blank">NICA Waiver</a>, and bring it with you when you join us for one practice before needing to register.  
        If you use the NICA electronic waiver form,  please email the signed copy to 
        <a href="mailto:howardcyclingclub@gmail.com">howardcyclingclub@gmail.com</a>.
    </p>
    <p class="text-center">Get ready to ride. It&#39;s gonna be sweet. Promise.</p></section>
<section class="span-fit svelte-i9hu5c">${validate_component(Info, "Info").$$render($$result, {}, {}, {})}
</section>`;
});
const CoachInstructions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="border-blue pane bg-dark"><ol><li>Send an email to the team at [EMAIL] and we will send you a coaches invite to register.</li>
        <li>One of the head coaches will send you an invite from NICA Pitzone to complete the signup.</li>
        <li>Use the link in the email you received from NICA Pitzone, fill out the registration, and registration pay the fees to NICA</li>
        <li>Our Membership committee will add you to TeamApp for emails and communication.</li>
        <li>Team dues will be collected through TeamApp.</li></ol></div>`;
});
const Coach_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".span-70.svelte-efr5po{grid-column:span 2;width:70%;justify-self:center}.span-fit.svelte-efr5po{grid-column:span 2;width:fit-content;justify-self:center}@media(max-width: 900px){section.svelte-efr5po{grid-column:span 2}.span-70.svelte-efr5po,.span-fit.svelte-efr5po{width:unset}}",
  map: null
};
const Coach = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="div-block span-70 svelte-efr5po"><p class="text-center">Ready to commit? <span class="emphasize">Awesome!</span></p>
    <p>We need coaches for our team.  A coach will reach out to you as soon as possible.  
        No experience necessary; the league will give you all the training you need. 
        Coaching a team is a very rewarding experience!
    </p>
    <p>Registration for coaches for the 2023 Season opens on <span class="emphasize">March 1st.</span></p>
    <p><span class="emphasize">Note:</span> Existing coaches will get an invitation from the team in Pitzone to renew for this year.</p></section>
<section class="div-block svelte-efr5po"><h3>To register as a new coach:</h3>
    ${validate_component(CoachInstructions, "CoachInstructions").$$render($$result, {}, {}, {})}</section>
<section class="div-block svelte-efr5po"><p>MICL registration fees are collected through NICA Pit Zone at the time of registration:</p>
    <ul class="indent"><li>​Annual coach&#39;s league registration fee:  <span>$50</span></li>
        <li>Background check (onetime fee): <span>$38</span></li>
        <li>Additional training cost may depend on your NICA Coach License level.  Get more info on Licensing on the MICL Webpage. ​</li></ul>
    <p>​Howard Cycling Club Team Dues will be invoice on July 1 through Team App:</p>
    <ul class="indent"><li>Coaches (includes Howard Cycling Club Jersey): <span>$50</span>​ </li></ul></section>
<div class="div-block span-fit svelte-efr5po">${validate_component(Info, "Info").$$render($$result, {}, {}, {})}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".registration-grid.svelte-1r7p934{display:grid;grid-template-columns:repeat(2, 1fr);row-gap:1em;column-gap:2em;margin-top:0.5em;padding-inline:1em}select.svelte-1r7p934{cursor:pointer;display:inline-flex;align-self:center;width:max-content;color:var(--color-light);height:1.5em;margin-left:0.5em;width:fit-content;padding-inline:0.5em}option.svelte-1r7p934{text-align:center}@media(max-width: 900px){.registration-grid.svelte-1r7p934{padding-inline:0;row-gap:2em}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  const options = [{ role: "student", component: Student }, { role: "coach", component: Coach }];
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  $$result.css.add(css);
  selected = options[0];
  return `<div class="flex-row"><h2 class="pg-name-variant">Sign up as a </h2>
    <select class="bg-dark border-blue svelte-1r7p934">${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)} class="svelte-1r7p934">${escape(option.role)}</option>`;
  })}</select></div>

<div class="registration-grid svelte-1r7p934">${validate_component(selected.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
