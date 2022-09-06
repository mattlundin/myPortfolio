import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as ProjectDrop } from "../../../../chunks/ProjectDrop.js";
import "../../../../chunks/gsap.js";
import "gsap";
import "gsap/dist/ScrollTrigger.js";
import "gsap/dist/CustomEase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ProjectDrop, "ProjectDrop").$$render(
    $$result,
    {
      projectName: "Quints Art",
      projectImg: "/images/QuintsArt.webp",
      projectImgAlt: "Quints Art",
      projectDescription: "This site was built (is being built) with SvelteKit, Tailwind, and GSAP. This is still a work in progress as I am currently waiting for the content, image files, logo, etc... What I have enjoyed most about this one so far is the incorporation of GSAP along with some new parallax ideas I have been playing with. The final result may look a little different but I think this is off to a good start.",
      projectURL: "https://quints-art-1-6w7601n8p-mattlundin.vercel.app/",
      projectGitHub: "https://github.com/mattlundin/quints-art-1"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
