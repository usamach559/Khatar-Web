document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".navbar", {
    opacity: 0,
    y: -150,
    duration: 0.8,
  });
  gsap.from(".up-animation", {
    opacity: 0,
    y: 200,
    duration: 1,
  });

  gsap.from(".index-animated-first-img", {
    opacity: 0,
    x: 600,
    duration: 2,
    rotation: 45,
    onComplete: function() {
        gsap.to(".index-animated-first-img", {
          y: "-=5",      
          duration: 0.9,   
          repeat: -1,     
          yoyo: true,     
          ease: "bounce.inOut" 
        });
      }
  });
});
