import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import { CustomEase } from 'gsap/dist/CustomEase.js';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);
}

export * from 'gsap';
export { ScrollTrigger };
export { CustomEase };

// export const prerender = true;
