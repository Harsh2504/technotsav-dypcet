// scrollAnimations.js
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Generic fade
  gsap.utils.toArray(".element-fade").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 50 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 10%",
      onEnter: () =>
        gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }),
      onLeave: () => gsap.to(el, { opacity: 0, y: -50, duration: 1, ease: "power2.out" }),
      onEnterBack: () => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(el, { opacity: 0, y: 50, duration: 1, ease: "power2.out" }),
    });
  });

  // Fade down
  gsap.utils.toArray(".element-fade-down").forEach((el) => {
    gsap.set(el, { opacity: 0, y: -50 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 10%",
      onEnter: () =>
        gsap.fromTo(el, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" }),
    //   onLeave: () => gsap.to(el, { opacity: 0, y: -50, duration: 1, ease: "power2.out" }),
      onEnterBack: () => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }),
    //   onLeaveBack: () => gsap.to(el, { opacity: 0, y: -50, duration: 1, ease: "power2.out" }),
    });
  });

  // Fade in left
  gsap.utils.toArray(".element-fade-in-left").forEach((el) => {
    gsap.set(el, { opacity: 0, x: -50 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 10%",
      onEnter: () => gsap.fromTo(el, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onEnterBack: () => gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(el, { opacity: 0, x: -50, duration: 1, ease: "power2.out" }),
    });
  });

  // Fade in right
  gsap.utils.toArray(".element-fade-in-right").forEach((el) => {
    gsap.set(el, { opacity: 0, x: 50 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 10%",
      onEnter: () => gsap.fromTo(el, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onEnterBack: () => gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(el, { opacity: 0, x: 50, duration: 1, ease: "power2.out" }),
    });
  });

  // Cards fade-in
  gsap.utils.toArray(".element-fade-cards").forEach((el) => {
    gsap.set(el, { opacity: 0, y: 50 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }),
      onLeave: () => gsap.to(el, { opacity: 0, y: -20, duration: 1, ease: "power2.out" }),
      onEnterBack: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(el, { opacity: 0, y: 20, duration: 1, ease: "power2.out" }),
    });
  });



// Simple fade up without ScrollTrigger
gsap.utils.toArray(".fade-up").forEach((el,index) => {
    gsap.set(el, { opacity: 0, y: 50 });
    gsap.fromTo(el, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 2, delay: index * 0.5, ease: "power2.out" }
    );
    console.log("Fade up animation applied to element:", el);
});
};
