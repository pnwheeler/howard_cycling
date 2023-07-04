import { c as create_ssr_component, e as escape, f as each, v as validate_component, m as missing_component } from "../../../chunks/index.js";
const Location_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".name.svelte-bbmi1y{color:var(--color-blue)}.address.svelte-bbmi1y{color:var(--color-disabled)}.description.svelte-bbmi1y{color:var(--color-light)}",
  map: null
};
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { address = "" } = $$props;
  let { description = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$4);
  return `<h4 class="${["svelte-bbmi1y", name ? "name" : ""].join(" ").trim()}">${escape(name)}</h4>
<p class="${["svelte-bbmi1y", address ? "address" : ""].join(" ").trim()}">${escape(address)}</p>
<p class="${["svelte-bbmi1y", description ? "description" : ""].join(" ").trim()}">${escape(description)}
</p>`;
});
const locations = [
  {
    name: "​Rockburn Skills Park and surrounding trails",
    address: "6105 Rockburn Branch Park Rd, Elkridge, MD 21075",
    description: "There are several miles of trails around the skills park and recreation field section            of this park that are challenging but suitable for the upper level beginner and intermediate            rider."
  },
  {
    name: "Fairland Park",
    address: "13800 Old Gunpowder Rd, Laurel, MD 20707 (parking behind Gradens Ice House for quick trail access)",
    description: "These offer a great mix of short punchy climbs and mid level technical trails that can         challenge all level of riders.  You can string together many miles of trails to keep your attention for        a single long ride or several shorter rides."
  },
  {
    name: "Wincopin trails",
    address: "9313 Vollmerhausen Rd, Jessup, MD 20794",
    description: "This is a fairly short set of trails located in Savage that will offer a great diversity of             challenges and can be a great location if the whole family wants to come out and walk/ride at their own             pace and meet up at various parts of the park since all trails loop back to the main trail with the             exception of the yellow trail.  Just down the road from this parking lot is a mostly flat trail that             connects with Lake Elkhorn."
  },
  {
    name: "Western Regional Fields",
    address: "14800 Carrs Mill Rd, Woodbine, MD 21797",
    description: "These trails are fun and can challenge all riders to improve their skill but are easy enough             that most beginners will be able to ride comfortably."
  },
  {
    name: "Columbia trail system",
    address: "",
    description: "There is no shortage of paved trails in Columbia to explore.  The great thing about these trails            is that the whole family can come out and the more adventurous members of the group can ride on the grass or            dirt of to the side while those who feel more comfortable on the pavement can stay safely on the path."
  },
  {
    name: "C & O towpath",
    address: "",
    description: "Endless miles of flat, scenic trails.  There are sections of single track as you near Georgetown so             the group can split off so everyone can feed their own sense of adventure along the way."
  },
  {
    name: "Bacon Ridge trails",
    address: "​1801 Hawkins Rd, Annapolis, MD 21401",
    description: "A 5.5 mile moderately trafficked loop trail located near Crownsville, Maryland that features beautiful            wild flowers and is good for all skill levels. The trail offers a number of activity options and is best used from             April until October. Dogs are also able to use this trail but must be kept on leash."
  }
];
const Places_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "section.svelte-1ibr0d0{text-align:left}.locations-container.svelte-1ibr0d0{display:grid;gap:1em;padding-inline:1em;margin-top:0.5em}@media(max-width: 900px){.locations-container.svelte-1ibr0d0{padding-inline:0}}",
  map: null
};
const Places = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<h2>Beginner and Intermediate MTB Rides</h2>
<div class="locations-container svelte-1ibr0d0">${each(locations, (location) => {
    return `<section class="svelte-1ibr0d0">${validate_component(Location, "Location").$$render($$result, Object.assign({}, location), {}, {})}
        </section>`;
  })}
</div>`;
});
const Merch_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".merch.svelte-s59cdg.svelte-s59cdg{display:grid;gap:1em;grid-template-columns:1fr;place-items:center;padding-inline:1em;margin-top:0.5em}.merch.svelte-s59cdg>p.svelte-s59cdg{width:min(100%, 700px)}.merch.svelte-s59cdg>img.svelte-s59cdg{width:min(100%, 400px)}@media(max-width: 900px){.merch.svelte-s59cdg.svelte-s59cdg{width:100%;padding-inline:0}}",
  map: null
};
const Merch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<h2>Merchandise</h2>
<div class="merch svelte-s59cdg"><p class="svelte-s59cdg">The Howard Cycling club may have team merchandise for sale. Please reach out to merchandise coordinator [TBD].
        Merchandise will typically be sold on-site at practices and races. <span class="emphasize">No cash</span>, only credit
        accepted at this time. 
    </p>
    <p class="svelte-s59cdg">Quantities are limited. Pricing and sizes TBD.
    </p>
    <img src="./img/placeholder_merch.jpg" alt="placeholder" class="merch svelte-s59cdg">
</div>`;
});
const Activities_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".activities-container.svelte-alsp0u{display:grid;gap:1em;padding-inline:1em;margin-top:0.5em}@media(max-width: 900px){.activities-container.svelte-alsp0u{padding-inline:0}}",
  map: null
};
const Activities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<h2>Club Activities</h2>
<div class="activities-container svelte-alsp0u"><section class="div-block"><h3>No-Contact Rider Registration</h3>
        <p>Returning riders can register via the TeamApp link provided by email and can complete all
            necessary documents via the online process. New riders for the 2023 season that would like to
            take advantage of the one-time “Try it Out” practice should complete the online waiver found on
            the <a href="https://nationalmtb.org/agreement-to-participate-and-release-of-liability-form/" target="_blank">NICA website</a>and
            bring a signed copy with them. The club will staff a rider registration table
            during events to speak with riders and parents and to receive appropriate documentation.
        </p></section>
    <section class="div-block"><h3>Required Equipment</h3>
        <div class="pane border-blue bg-dark fit-content"><p>All riders are required to carry the following equipment to all practices and rides:</p>
            <ul class="indent"><li>A positive can do attitude</li>
                <li>A very large amount of &quot;ready to have a little fun&quot; </li>
                <li>Mask/face covering</li>
                <li>Full finger cycling gloves</li>
                <li>Spare tube for their wheel size</li>
                <li>Tube repair patch kit</li>
                <li>Tire levers</li>
                <li>Hand bike pump</li>
                <li>Basic cycling multi tool</li>
                <li>Water (2 bottles or equivalent)</li>
                <li>Helmet </li></ul></div>
        <p>All riders are responsible to ensure that they arrive ready to practice and ready to begin on
            time. Wheels roll at designated times. The club will not provide shared equipment or water for
            use by athletes or coaches.
        </p></section>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.sub-nav.svelte-1scprfv.svelte-1scprfv{display:grid;grid-template-columns:repeat(3, 200px);justify-content:center;padding-block:0.5em;place-items:center;font-size:1.3em}button.svelte-1scprfv.svelte-1scprfv{display:flex;justify-content:center;cursor:pointer;border:none;border-radius:1em;width:150px;text-transform:uppercase;--grad:10;color:var(--color-light);background-color:var(--color-dark);font-variation-settings:"GRAD" 0, "XTRA" 380, "wght" 500, "wdth" 60;transition:all .3s ease}button.svelte-1scprfv.svelte-1scprfv:hover{color:var(--color-lighter);box-shadow:0 0 0 .1em var(--color-disabled)}button.active.svelte-1scprfv.svelte-1scprfv{font-variation-settings:"GRAD" 100, "XTRA" 380, "wght" 500, "wdth" 60;background-color:var(--color-blue);box-shadow:0 0 0 .1rem var(--color-blue);color:white}@media(max-width: 670px){.sub-nav.svelte-1scprfv.svelte-1scprfv{gap:unset;grid-template-columns:repeat(3, auto);justify-content:space-evenly}.sub-nav.svelte-1scprfv button.svelte-1scprfv{width:fit-content;padding-inline:0.5em}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  const subpages = [
    {
      name: "places to ride",
      component: Places
    },
    {
      name: "activities",
      component: Activities
    },
    { name: "merch", component: Merch }
  ];
  if ($$props.subpages === void 0 && $$bindings.subpages && subpages !== void 0)
    $$bindings.subpages(subpages);
  $$result.css.add(css);
  active = subpages[1];
  return `<nav class="sub-nav svelte-1scprfv" aria-controls="secondary-navigation">${each(subpages, (subpage, i) => {
    return `<button class="${["nav-tab svelte-1scprfv", active.name === subpage.name ? "active" : ""].join(" ").trim()}">${escape(subpage.name)}
        </button>`;
  })}</nav>

<div>${validate_component(active.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
