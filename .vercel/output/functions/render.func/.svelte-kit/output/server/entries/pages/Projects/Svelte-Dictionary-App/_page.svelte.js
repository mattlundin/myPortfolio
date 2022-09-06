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
      projectName: "Svelte Dictionary App",
      projectImg: "/images/svelte-dictionary-app.webp",
      projectImgAlt: "Svelte Dictionary App",
      projectDescription: "This dictionary app was built solely with Svelte. Not many of my sites use APIs and I was excited to incorporate it within Svelte and see how it handled them. Sure enough, it didn't disappoint. The transitions used were the transitions that come built into Svelte itself.",
      projectURL: "https://svelte-dictionary-6bog4hm99-mattlundin.vercel.app/",
      projectGitHub: "https://github.com/mattlundin/svelte-dictionary-app"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
