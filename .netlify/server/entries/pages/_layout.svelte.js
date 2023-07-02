import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const Navbar_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-obmznx.svelte-obmznx{padding-inline:1em;padding-bottom:1em;overflow-x:hidden}.main-layout.svelte-obmznx.svelte-obmznx{text-align:center;color:var(--color-light);background-color:var(--color-darker);min-height:100vh;min-height:100dvh;display:grid;justify-items:stretch;grid-template-rows:auto\r\n            auto\r\n            1fr}.footer.svelte-obmznx.svelte-obmznx{background-color:var(--color-dark);color:var(--color-darkest)}.footer.svelte-obmznx>h1.svelte-obmznx{text-transform:uppercase;font-size:2em;grid-column:span 3;text-shadow:0.1rem 0.1rem var(--color-blue)}#socials.svelte-obmznx.svelte-obmznx{display:flex;justify-content:center;gap:1em;padding-block:1em}smaller.svelte-obmznx.svelte-obmznx{color:var(--color-light)}a.svelte-obmznx.svelte-obmznx{width:30px;background-color:transparent;border:none;background-size:contain}a.svelte-obmznx.svelte-obmznx:hover{transform:scale(1.1)}",
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
