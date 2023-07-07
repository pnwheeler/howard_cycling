import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const HamburgerButton_svelte_svelte_type_style_lang = "";
const Navbar_svelte_svelte_type_style_lang = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-1dyytd7.svelte-1dyytd7{display:flex;background-color:var(--color-darkest);justify-content:center;align-items:center;gap:1em;padding:min(1vh, 1em)}.header.svelte-1dyytd7>img.svelte-1dyytd7{display:flex;width:min(150px, 20vw)}main.svelte-1dyytd7.svelte-1dyytd7{padding-inline:1em;padding-bottom:1em;overflow-x:hidden}main.mobile.svelte-1dyytd7.svelte-1dyytd7{padding-top:4em}.main-layout.svelte-1dyytd7.svelte-1dyytd7{text-align:center;color:var(--color-light);background-color:var(--color-darker);min-height:100vh;min-height:100vh;display:grid;justify-items:stretch;grid-template-rows:auto\r\n            auto\r\n            1fr}footer.svelte-1dyytd7.svelte-1dyytd7{background-color:var(--color-darkest);border-inline:0.1em solid var(--color-blue)}footer.mobile.svelte-1dyytd7.svelte-1dyytd7{border:none}footer.svelte-1dyytd7>h1.svelte-1dyytd7{font-size:2em;grid-column:span 3}.socials.svelte-1dyytd7.svelte-1dyytd7{display:flex;justify-content:center;gap:2em;padding-block:1em;flex-basis:50px}.socials.svelte-1dyytd7 a.svelte-1dyytd7{flex-grow:0;flex-shrink:0;flex-basis:40px}a.svelte-1dyytd7.svelte-1dyytd7{position:relative;background-color:transparent;border:none;background-size:contain;transform:scale(1);transition:transform .2s ease}a.svelte-1dyytd7.svelte-1dyytd7:hover{transform:scale(1.3)}smaller.svelte-1dyytd7.svelte-1dyytd7{color:var(--color-disabled)}",
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
