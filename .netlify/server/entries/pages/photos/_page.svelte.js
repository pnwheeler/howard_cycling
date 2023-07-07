import { c as create_ssr_component, f as each, d as add_attribute } from "../../../chunks/index.js";
const gallerypics = [
  { img_src: "./img/photos_tab/biker1.png" },
  { img_src: "./img/photos_tab/biker2.png" },
  { img_src: "./img/photos_tab/biker3.png" },
  { img_src: "./img/photos_tab/biker4.png" },
  { img_src: "./img/photos_tab/biker5.png" },
  { img_src: "./img/photos_tab/biker6.png" },
  { img_src: "./img/photos_tab/gallery7.png" },
  { img_src: "./img/photos_tab/gallery8.png" },
  { img_src: "./img/photos_tab/gallery9.png" },
  { img_src: "./img/photos_tab/gallery10.png" },
  { img_src: "./img/photos_tab/gallery11.png" },
  { img_src: "./img/photos_tab/gallery12.png" },
  { img_src: "./img/photos_tab/gallery13.png" },
  { img_src: "./img/photos_tab/gallery14.png" },
  { img_src: "./img/photos_tab/gallery15.png" },
  { img_src: "./img/photos_tab/gallery16.png" }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#page-container.svelte-m3kvv.svelte-m3kvv{display:flex;flex-direction:column;gap:1em;align-items:center;padding-inline:1em}#hero.svelte-m3kvv.svelte-m3kvv{width:min(100vw, 800px);border-radius:.5em;margin-bottom:2em}#grid-gallery.svelte-m3kvv.svelte-m3kvv{display:grid;grid-template-columns:repeat(auto-fit, minmax(160px, 1fr));grid-template-rows:repeat(6, 200px);gap:1em;grid-auto-flow:dense}#grid-gallery.svelte-m3kvv>img.svelte-m3kvv:nth-child(4n){grid-column:span 2;grid-row:span 2}#grid-gallery.svelte-m3kvv>img.svelte-m3kvv:nth-child(8n){grid-column:span 3;grid-row:span 3}#grid-gallery.svelte-m3kvv>img.svelte-m3kvv{width:100%;height:100%;object-fit:cover}@media(max-width: 900px){#page-container.svelte-m3kvv.svelte-m3kvv{padding-inline:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2 class="pg-name-variant">Photos</h2>
<div id="page-container" class="svelte-m3kvv"><img id="hero" src="img/bikers.png" alt="larger pic" class="svelte-m3kvv">
    <div id="grid-gallery" class="svelte-m3kvv">${each(gallerypics, (pic) => {
    return `<img${add_attribute("src", pic.img_src, 0)}${add_attribute("alt", pic.img_src, 0)} class="svelte-m3kvv">`;
  })}</div>
</div>`;
});
export {
  Page as default
};
