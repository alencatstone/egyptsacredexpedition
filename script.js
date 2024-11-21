// Анимация заголовка
gsap.from(".hero-title", { opacity: 0, y: -50, duration: 1.5 });
gsap.from(".hero-subtitle", { opacity: 0, y: 50, delay: 0.5, duration: 1 });
gsap.to(".cta-button", { scale: 1.1, repeat: -1, yoyo: true, duration: 1 });

// Анимации при прокрутке
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
