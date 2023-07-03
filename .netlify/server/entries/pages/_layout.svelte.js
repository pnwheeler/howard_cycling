import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const MobileMenu_svelte_svelte_type_style_lang = "";
const Navbar_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-lbnwd4.svelte-lbnwd4{padding-inline:1em;padding-bottom:1em;overflow-x:hidden}main.mobile.svelte-lbnwd4.svelte-lbnwd4{padding-top:4em}.main-layout.svelte-lbnwd4.svelte-lbnwd4{text-align:center;color:var(--color-light);background-color:var(--color-darker);min-height:100vh;min-height:100dvh;display:grid;justify-items:stretch;grid-template-rows:auto\r\n            auto\r\n            1fr}.footer.svelte-lbnwd4.svelte-lbnwd4{background-color:var(--color-dark);color:var(--color-darkest)}.footer.svelte-lbnwd4>h1.svelte-lbnwd4{text-transform:uppercase;font-size:2em;grid-column:span 3;text-shadow:0.1rem 0.1rem var(--color-blue)}#socials.svelte-lbnwd4.svelte-lbnwd4{display:flex;justify-content:center;gap:1em;padding-block:1em}smaller.svelte-lbnwd4.svelte-lbnwd4{color:var(--color-light)}a.svelte-lbnwd4.svelte-lbnwd4{width:30px;background-color:transparent;border:none;background-size:contain}a.svelte-lbnwd4.svelte-lbnwd4:hover{transform:scale(1.1)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${``}`;
});
export {
  Layout as default
};
