import { c as create_ssr_component, e as escape, f as add_attribute } from "./index.js";
import "./gsap.js";
const ProjectDrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projectName } = $$props;
  let { projectImg } = $$props;
  let { projectImgAlt } = $$props;
  let { projectDescription } = $$props;
  let { projectURL } = $$props;
  let { projectGitHub } = $$props;
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.projectImg === void 0 && $$bindings.projectImg && projectImg !== void 0)
    $$bindings.projectImg(projectImg);
  if ($$props.projectImgAlt === void 0 && $$bindings.projectImgAlt && projectImgAlt !== void 0)
    $$bindings.projectImgAlt(projectImgAlt);
  if ($$props.projectDescription === void 0 && $$bindings.projectDescription && projectDescription !== void 0)
    $$bindings.projectDescription(projectDescription);
  if ($$props.projectURL === void 0 && $$bindings.projectURL && projectURL !== void 0)
    $$bindings.projectURL(projectURL);
  if ($$props.projectGitHub === void 0 && $$bindings.projectGitHub && projectGitHub !== void 0)
    $$bindings.projectGitHub(projectGitHub);
  return `<div class="${"lg:w-11/12 lg:mx-auto h-full w-full max-w-screen-2xl bg-opacBlack my-12 border-2 border-lightBlue overflow-hidden"}"><div class="${"fade-down text-5xl text-center pt-8 text-offWhite"}">${escape(projectName)}</div>
	<div class="${"flex lg:flex-row md:p-12 md:gap-12 justify-between flex-col h-full p-4"}"><img${add_attribute("src", projectImg, 0)}${add_attribute("alt", projectImgAlt, 0)} class="${"fade-right h-auto max-h-[480px] lg:w-1/2 w-100"}">
		<div class="${"fade-left text-offWhite lg:w-1/2"}">${escape(projectDescription)}</div></div>
	<div class="${"fade-up bottom-8 flex items-center justify-around pb-12 w-full text-xl text-offWhite"}"><a${add_attribute("href", projectURL, 0)} class="${"text-2xl underline hover:text-lightBlue hover:scale-125 transition ease duration-300"}" target="${"_blank"}">Site</a>
		<a${add_attribute("href", projectGitHub, 0)} class="${"text-2xl underline hover:text-lightBlue hover:scale-125 transition ease duration-300"}" target="${"_blank"}">Github</a></div></div>`;
});
export {
  ProjectDrop as P
};
