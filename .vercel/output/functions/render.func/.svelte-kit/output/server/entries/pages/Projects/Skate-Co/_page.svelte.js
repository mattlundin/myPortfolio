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
      projectName: "Skate-Co",
      projectImg: "/images/Skate-Co.webp",
      projectImgAlt: "Skate-Co",
      projectDescription: "This mock site was built using HTML, CSS, JavaScript, and GSAP. As it's only a mock site there's not too much to write home about but I wanted to add this to show the progression as well as another example of different designs.",
      projectURL: "https://mattlundin.github.io/Skate-Co/",
      projectGitHub: "https://github.com/mattlundin/Skate-Co"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
