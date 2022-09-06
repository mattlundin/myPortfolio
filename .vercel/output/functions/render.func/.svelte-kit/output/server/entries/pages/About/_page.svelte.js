import { c as create_ssr_component, d as each, f as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/gsap.js";
import "gsap";
import "gsap/dist/ScrollTrigger.js";
import "gsap/dist/CustomEase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const technologies = [
    {
      img: "/images/html-logo.png",
      alt: "HTML5",
      css: ""
    },
    {
      img: "/images/css-logo.png",
      alt: "CSS3",
      css: ""
    },
    {
      img: "/images/js-logo.png",
      alt: "JavaScript",
      css: ""
    },
    {
      img: "/images/svelte-logo.png",
      alt: "Svelte",
      css: ""
    },
    {
      img: "/images/GSAP-logo.png",
      alt: "GSAP",
      css: ""
    },
    {
      img: "/images/tailwind-logo.png",
      alt: "Tailwind",
      css: "object-cover mt-6"
    },
    {
      img: "/images/scss-logo.png",
      alt: "SCSS",
      css: "h-full w-full object-contain"
    },
    {
      img: "/images/npm-logo.png",
      alt: "NPM",
      css: "mt-3"
    },
    {
      img: "/images/github-logo.png",
      alt: "Github",
      css: ""
    }
  ];
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<main class="${"h-full min-h-[calc(100vh-80px)] max-w-screen-2xl mx-auto"}"><header class="${"flex justify-center items-center md:mx-auto mx-3 mb-24 h-36 max-w-3xl bg-darkBlue rounded-b-3xl border-none -z-10 shadow-xl overflow-hidden"}"><h1 class="${"my-auto font-rubikDirt xs:text-7xl text-6xl text-offWhite"}">About Me</h1></header>

	
	<div class="${"flex md:flex-row flex-col px-3 pb-4 gap-12"}"><div class="${"md:w-1/2 w-full"}"><div class="${"flex flex-row items-center justify-center text-5xl pb-8"}"><div class="${"hello"}">H</div>
				<div class="${"hello"}">e</div>
				<div class="${"hello"}">l</div>
				<div class="${"hello"}">l</div>
				<div class="${"hello"}">o</div>
				<div class="${"hello"}">\xA0</div>
				<div class="${"hello"}">W</div>
				<div class="${"hello"}">o</div>
				<div class="${"hello"}">r</div>
				<div class="${"hello"}">l</div>
				<div class="${"hello"}">d</div></div>

			<div class="${"fade-in"}"><p class="${"mb-2"}">My name is Matt and I am a Front End Developer living in Texas. I have been developing for
					over 2 years and during that time, I have created quite an obsession with animations and
					transitions. I believe giving projects that extra little finesse can make the biggest
					difference to help keep visitor&#39;s attention where it should be, the site they&#39;re visiting.
				</p>
				<p>I am constantly learning and striving to do better in every single project I take on. With
					numerous tools to build with I focus on not only functionality, but simplicity as well. I
					enjoy experimenting and finding ways to continuously improve and cut down my development
					time while giving optimum results.
				</p>
				</div></div>
		<div class="${"md:w-1/2 h-full w-full pb-12"}"><h2 class="${"tech-title flex justify-center flex-row flex-wrap text-center text-3xl"}">What I&#39;m Currently Working With
			</h2>
			<div class="${"img-container flex flex-wrap justify-around items-center h-full m-4 p-6 gap-4 bg-darkBlue rounded-lg shadow-xl shadow-black overflow-hidden"}">${each(technologies, ({ img, alt, css }) => {
    return `<div class="${"img-box h-32 w-32 p-1 shadow-sm shadow-black"}"><img${add_attribute("src", img, 0)}${add_attribute("alt", alt, 0)}${add_attribute("class", css, 0)}>
					</div>`;
  })}</div></div></div></main>`;
});
export {
  Page as default
};
