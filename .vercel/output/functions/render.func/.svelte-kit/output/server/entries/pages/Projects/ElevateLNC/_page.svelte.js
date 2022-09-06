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
      projectName: "Elevate LNC",
      projectImg: "/images/ElevateLNC.webp",
      projectImgAlt: "Elevate LNC",
      projectDescription: "This website was built using HTML, CSS, JavaScript, and GSAP. There were numerous changes throughout this project which were both rewarding and challenging. It was this site where I gained the most knowledge of SEO, especially when the blog section was incorporated. Since building this website the client has decided to get away from her hosting and has gone back to the 'drag and drops', so unfortunately what I built will only live on my repository.",
      projectURL: "https://mattlundin.github.io/ElevateLNC/home",
      projectGitHub: "https://github.com/mattlundin/ElevateLNC"
    },
    {},
    {}
  )}

`;
});
export {
  Page as default
};
