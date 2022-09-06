import { c as create_ssr_component } from "../../chunks/index.js";
import "../../chunks/gsap.js";
import "gsap";
import "gsap/dist/ScrollTrigger.js";
import "gsap/dist/CustomEase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Matt Lundin</title>`, ""}`, ""}

<main class="${"h-[calc(100vh-80px)] overflow-hidden"}"><div class="${"name pt-12 xs:pl-12 pl-4"}"><p class="${"slide-right sm:text-8xl text-7xl text-darkBlue"}"><span class="${"fade-in sm:text-[160px] text-[140px] text-medBlue font-inspiration"}">M</span>ATT
		</p>
		<p class="${"slide-right sm:text-8xl text-7xl text-darkBlue"}"><span class="${"fade-in sm:text-[160px] text-[140px] text-medBlue font-inspiration"}">L</span>UNDIN
		</p></div>
	<div class="${"hidden md:block absolute bottom-0 right-0"}"><img src="${"/images/look-left-transparent.png"}" alt="${""}" class="${"fixed bottom-0 right-0 h-56 w-56"}"></div>
	<div class="${"block md:hidden absolute bottom-0 right-0"}"><img src="${"/images/look-up-transparent.png"}" alt="${""}" class="${"fixed bottom-0 right-0 h-56 w-56"}"></div>

	<div class="${"relative sm:ml-12 ml-4 mt-12"}"><div class="${"creative absolute xs:ml-12 ml-4 text-medBlue sm:text-7xl text-6xl font-rubikDirt clip-path-polygon-[0_0,_0_0,_0_100%,_0_100%]"}">CR<span class="${"text-darkBlue"}">E</span>AT<span class="${"text-darkBlue"}">I</span>VE
		</div>
		<div class="${"absolute flex xs:text-5xl text-3xl"}"><div class="${"front-end flex flex-row"}"><div class="${"front flex flex-row mr-3"}"><div class="${"grow"}">F</div>
					ront
				</div>
				<div class="${"end flex flex-row"}"><div class="${"grow"}">E</div>
					nd
				</div></div>
			
			<div class="${"developer flex flex-row ml-3 text-medBlue"}"><div class="${"down"}"><div class="${"grow"}">D</div></div>
				<div class="${"up"}">e</div>
				<div class="${"down"}">v</div>
				<div class="${"up"}">e</div>
				<div class="${"down"}">l</div>
				<div class="${"up"}">o</div>
				<div class="${"down"}">p</div>
				<div class="${"up"}">e</div>
				<div class="${"down"}">r</div></div></div></div></main>`;
});
export {
  Page as default
};
