/**
 * Central GSAP entry point. Registers ScrollTrigger once, client-side only,
 * so every component imports the same configured instance.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
