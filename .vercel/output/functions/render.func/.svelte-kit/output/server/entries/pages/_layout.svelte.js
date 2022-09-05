import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const app = "";
const MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  {
    {
      {
        setTimeout(
          () => {
          },
          300
        );
      }
    }
  }
  return `<div class="${"sm:hidden"}"><button class="${"fixed top-5 right-5 z-50"}" aria-label="${"Toggle menu"}" type="${"button"}">${`<svg style="${"width:40px;height:40px;color:white;"}" viewBox="${"0 0 24 24"}" class="${"fixed right-5 text-offWhite"}"><path fill="${"currentColor"}" d="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}"></path></svg>
			`}</button>

	${``}</div>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"fixed w-full flex items-center h-20 w-100 px-5 bg-darkBlue text-offWhite overflow-hidden z-40"}"><div class="${"icon"}"><h1 class="${"font-inspiration hover:scale-125 text-offWhite hover:text-lightBlue transition ease duration-200 text-5xl"}"><a href="${"/"}">ML</a></h1></div>
	<ul class="${"hidden sm:flex items-center nav-list ml-auto text-offWhite text-2xl"}"><li class="${"p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200"}"><a href="${"/"}">Home</a></li>
		<li class="${"p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200"}"><a href="${"/About"}">About</a></li>
		<li class="${"p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200"}"><a href="${"/Projects"}">Projects</a></li>
		<li class="${"p-2 hover:text-lightBlue transition hover:scale-125 ease duration-200"}"><a href="${"/Contact"}">Contact</a></li></ul></nav>

${validate_component(MobileNav, "MobileNav").$$render($$result, {}, {}, {})}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<div class="${"pt-20"}"></div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
