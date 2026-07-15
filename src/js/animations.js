/* ==========================================================================
   BMCCI ANIMATION ENGINE (GSAP + LENIS SMOOTH SCROLL)
   ========================================================================== */

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initial Loader Screen Fade Out
 */
export function initLoader() {
  const loader = document.getElementById('global-loader');
  if (!loader) return;

  const isLoaded = sessionStorage.getItem('bmcci_loaded');
  if (isLoaded === 'true') {
    // Skip loading transition if page has already loaded once in session
    loader.style.display = 'none';
  } else {
    // Premium reveal on initial load
    window.addEventListener('load', () => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          loader.style.display = 'none';
          sessionStorage.setItem('bmcci_loaded', 'true');
        }
      });
    });

    // Fallback safety in case window load doesn't trigger quickly
    setTimeout(() => {
      if (loader.style.display !== 'none') {
        loader.style.display = 'none';
        sessionStorage.setItem('bmcci_loaded', 'true');
      }
    }, 3000);
  }
}

/**
 * Scroll Progress Bar Indicator
 */
export function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
  });
}

/**
 * Initializes Lenis Smooth Inertial Scroll
 */
export function initSmoothScroll() {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  // Expose to window for global components (like back-to-top)
  window.lenis = lenisInstance;

  // Sync scroll triggers with Lenis
  lenisInstance.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

/**
 * Global Page Entrance Animation (Fade Up)
 */
export function initEntranceAnimations() {
  // Elements with .animate-reveal will fade up on viewport load
  const revealElements = document.querySelectorAll('.animate-reveal');

  if (revealElements.length === 0) return;

  gsap.fromTo(revealElements, 
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.15, 
      ease: 'power3.out',
      clearProps: 'transform,opacity'
    }
  );
}

/**
 * Scroll Reveal Animations (Reveal on scroll)
 */
export function initScrollReveal() {
  const scrollElements = document.querySelectorAll('[data-scroll-reveal]');

  scrollElements.forEach((el) => {
    const delay = el.getAttribute('data-reveal-delay') || 0;
    const duration = el.getAttribute('data-reveal-duration') || 0.8;
    const direction = el.getAttribute('data-reveal-direction') || 'up';
    
    let initialX = 0;
    let initialY = 0;

    if (direction === 'up') initialY = 40;
    else if (direction === 'down') initialY = -40;
    else if (direction === 'left') initialX = 40;
    else if (direction === 'right') initialX = -40;

    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: initialX,
      y: initialY,
      duration: parseFloat(duration),
      delay: parseFloat(delay),
      ease: 'power3.out',
      clearProps: 'transform,opacity'
    });
  });
}

/**
 * Number Counter Animations (Economic statistics dashboards)
 */
export function initNumberCounters() {
  const counters = document.querySelectorAll('[data-counter-target]');

  counters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute('data-counter-target') || '0');
    const duration = parseFloat(counter.getAttribute('data-counter-duration') || '1.5');
    const suffix = counter.getAttribute('data-counter-suffix') || '';
    const prefix = counter.getAttribute('data-counter-prefix') || '';
    const decimals = parseInt(counter.getAttribute('data-counter-decimals') || '0', 10);

    const dataObj = { value: 0 };

    gsap.to(dataObj, {
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      value: target,
      duration: duration,
      ease: 'power2.out',
      onUpdate: () => {
        counter.textContent = `${prefix}${dataObj.value.toFixed(decimals)}${suffix}`;
      }
    });
  });
}

/**
 * Premium Image Clip Reveal Animation
 */
export function initImageReveal() {
  const imageContainers = document.querySelectorAll('.image-reveal-wrapper');

  imageContainers.forEach((container) => {
    const img = container.querySelector('img');
    if (!img) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    // Animate mask reveal
    tl.fromTo(container, 
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
      { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.2, ease: 'power4.inOut' }
    );

    // Subtle scale shift inside mask
    tl.fromTo(img,
      { scale: 1.15 },
      { scale: 1, duration: 1.6, ease: 'power3.out' },
      '-=1.2'
    );
  });
}

/**
 * Main entrance router for all animations
 */
export function initAllAnimations() {
  initLoader();
  initScrollProgress();
  initSmoothScroll();
  initEntranceAnimations();
  initScrollReveal();
  initNumberCounters();
  initImageReveal();
}
