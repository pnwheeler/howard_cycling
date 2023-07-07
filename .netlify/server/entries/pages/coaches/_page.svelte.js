import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index.js";
const CoachCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-s30zko.svelte-s30zko{display:flex;flex-direction:column;padding:.5em;width:300px;text-align:center;transition:all 0.3s ease-in-out}#name.svelte-s30zko.svelte-s30zko{color:var(--color-light);text-align:center;transition:color .3s ease;font-weight:bold}#role.svelte-s30zko.svelte-s30zko{color:var(--color-blue);text-align:center;font-weight:bolder}.card.svelte-s30zko p.svelte-s30zko{font-size:smaller;text-align:left;color:var(--color-disabled)}.coach-pic.svelte-s30zko.svelte-s30zko{height:200px;overflow:hidden;border-radius:.5em}.coach-pic.svelte-s30zko img.svelte-s30zko{width:250px;filter:grayscale(.9);transform:translate3d(10px, 80px, 0) scale(1.6);transition:all .3s ease-in-out}.card.svelte-s30zko:hover img.svelte-s30zko{filter:grayscale(0);transform:translate3d(10px, 15px, 0) scale(1.2)}.card.svelte-s30zko:hover hr.svelte-s30zko{background:var(--color-blue)}.card.svelte-s30zko.svelte-s30zko:hover{transform:scale(1.05)}.card.svelte-s30zko:hover .section.svelte-s30zko{color:var(--color-light)}.card.svelte-s30zko:hover #name.svelte-s30zko{color:var(--color-lighter)}.section.svelte-s30zko.svelte-s30zko{display:flex;color:var(--color-disabled);flex:0;align-items:center;justify-content:space-between;transition:all .3s ease}.section.svelte-s30zko>hr.svelte-s30zko{height:1px;border-style:none;background:var(--color-darker);margin:0;flex:1}",
  map: null
};
const CoachCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hovering = false;
  let { img_src } = $$props;
  let { name } = $$props;
  let { role } = $$props;
  let { likes } = $$props;
  let { dislikes } = $$props;
  let { riding_since } = $$props;
  let { fav_trail } = $$props;
  let { why } = $$props;
  const question_response = [
    { question: "Bike Likes", response: likes },
    {
      question: "Bike Dislikes",
      response: dislikes
    },
    {
      question: "Riding MTB since",
      response: riding_since
    },
    {
      question: "Favorite Trail",
      response: fav_trail
    },
    {
      question: "Why I got involved",
      response: why
    }
  ];
  if ($$props.img_src === void 0 && $$bindings.img_src && img_src !== void 0)
    $$bindings.img_src(img_src);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.likes === void 0 && $$bindings.likes && likes !== void 0)
    $$bindings.likes(likes);
  if ($$props.dislikes === void 0 && $$bindings.dislikes && dislikes !== void 0)
    $$bindings.dislikes(dislikes);
  if ($$props.riding_since === void 0 && $$bindings.riding_since && riding_since !== void 0)
    $$bindings.riding_since(riding_since);
  if ($$props.fav_trail === void 0 && $$bindings.fav_trail && fav_trail !== void 0)
    $$bindings.fav_trail(fav_trail);
  if ($$props.why === void 0 && $$bindings.why && why !== void 0)
    $$bindings.why(why);
  if ($$props.question_response === void 0 && $$bindings.question_response && question_response !== void 0)
    $$bindings.question_response(question_response);
  $$result.css.add(css$1);
  return `<div class="${["card bg-dark border-blue svelte-s30zko", ""].join(" ").trim()}">${slots.default ? slots.default({ hovering }) : ``}
    <div class="coach-pic svelte-s30zko"><img${add_attribute("src", img_src, 0)}${add_attribute("alt", img_src, 0)} class="svelte-s30zko"></div>
    <span id="name" class="svelte-s30zko">${escape(name)}</span>
    <span id="role" class="svelte-s30zko">${escape(role)}</span>
    ${each(question_response, ({ question, response }) => {
    return `<span class="section svelte-s30zko">${escape(question)}<hr class="svelte-s30zko"></span>
        ${``}`;
  })}</div>

<div class="box"></div>`;
});
const profiles = [
  {
    img_src: "./img/dan.jpg",
    name: "Dan The NICA Man Abate",
    role: "ASSISTANT COACH-ASSISTANT TO THE ASSISTANT",
    likes: "Water bottles on handlebars and bells.",
    dislikes: "Handle bar tassels",
    riding_since: "Racing since a young lad",
    fav_trail: "The one I can't keep up on.​",
    why: "The enjoyment I get out of seeing kids riding, having fun, and enjoying time out on the trails."
  },
  {
    img_src: "./img/bill.jpg",
    name: "Bill Wheeler",
    role: "ASSISTANT COACH-ASSISTANT COACHES COACH",
    likes: "A quiet bike is a good bike. O-Dark Hundred starts to watch the dawn roll in.",
    dislikes: `If it's raining, "I am OUT".`,
    riding_since: "Late 80s MTB, yeah I'm old. ;-) A Gremlin was a car, not a character.",
    fav_trail: "That long dangerous rocky one, that scares most people.  It's why they call me Jelly.",
    why: "Love to see people on bikes and learning about bikes. I've coached Cyclocross and Triathlon.  I love to help people learn and be active."
  },
  {
    img_src: "./img/dan.jpg",
    name: "Dan The NICA Man Abate",
    role: "ASSISTANT COACH-ASSISTANT TO THE ASSISTANT",
    likes: "Water bottles on handlebars and bells.",
    dislikes: "Handle bar tassels",
    riding_since: "Racing since a young lad",
    fav_trail: "The one I can't keep up on.​",
    why: "The enjoyment I get out of seeing kids riding, having fun, and enjoying time out on the trails."
  },
  {
    img_src: "./img/bill.jpg",
    name: "Bill Wheeler",
    role: "ASSISTANT COACH-ASSISTANT COACHES COACH",
    likes: "A quiet bike is a good bike. O-Dark Hundred starts to watch the dawn roll in.",
    dislikes: `If it's raining, "I am OUT".`,
    riding_since: "Late 80s MTB, yeah I'm old. ;-) A Gremlin was a car, not a character.",
    fav_trail: "That long dangerous rocky one, that scares most people.  It's why they call me Jelly.",
    why: "Love to see people on bikes and learning about bikes. I've coached Cyclocross and Triathlon.  I love to help people learn and be active."
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".coaches-container.svelte-130znyf{display:flex;flex-flow:row wrap;gap:2em;justify-content:center;align-items:start;padding-inline:1em;margin-top:0.5em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2 class="pg-name-variant">Meet the coaches</h2>
<div class="coaches-container svelte-130znyf">${each(profiles, (profile) => {
    return `<div>${validate_component(CoachCard, "CoachCard").$$render($$result, Object.assign({}, profile), {}, {})}</div>`;
  })}
</div>`;
});
export {
  Page as default
};
