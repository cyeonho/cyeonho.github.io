// Use GSAP for smooth scrolling animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from("h1", { duration: 1.5, y: -50, opacity: 0 });
    gsap.from("p", { duration: 2, x: -50, opacity: 0, delay: 0.5 });
    gsap.from("h2", { duration: 2, scale: 0.8, opacity: 0, stagger: 0.3, delay: 1 });
});