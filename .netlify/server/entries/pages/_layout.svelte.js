import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const HamburgerButton_svelte_svelte_type_style_lang = "";
const Navbar_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1wh3249.svelte-1wh3249{padding-inline:1em;padding-bottom:1em;overflow-x:hidden}main.mobile.svelte-1wh3249.svelte-1wh3249{padding-top:4em}.main-layout.svelte-1wh3249.svelte-1wh3249{text-align:center;color:var(--color-light);background-color:var(--color-darker);min-height:100vh;min-height:100dvh;display:grid;justify-items:stretch;grid-template-rows:auto\r\n            auto\r\n            1fr}.footer.svelte-1wh3249.svelte-1wh3249{background-color:var(--color-darkest)}.footer.svelte-1wh3249>h1.svelte-1wh3249{text-transform:uppercase;font-size:2em;grid-column:span 3;color:var(--color-blue);text-shadow:0.1rem 0.1rem var(--color-lighter)}#socials.svelte-1wh3249.svelte-1wh3249{display:flex;justify-content:center;gap:1em;padding-block:1em}smaller.svelte-1wh3249.svelte-1wh3249{color:var(--color-disabled)}a.svelte-1wh3249.svelte-1wh3249{width:30px;background-color:transparent;border:none;background-size:contain;transform:scale(1);transition:transform .2s ease}a.svelte-1wh3249.svelte-1wh3249:hover{transform:scale(1.3)}",
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
