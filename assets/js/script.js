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
  gsap.from(".button-container-index", {
    opacity: 0,
    y: 200,
    duration: 1,
  });

  gsap.from(".index-animated-first-img", {
    opacity: 0,
    x: 600,
    duration: 2,
    rotation: 45,
    onComplete: function () {
      gsap.to(".index-animated-first-img", {
        y: "-=10",
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });

  gsap.from(".index-hero-fouth-heading-first", {
    opacity: 1,
    x: 500,
    duration: 1.5,
    delay: 3,

  });
  gsap.from(".index-hero-fouth-heading-second", {
    opacity: 1,
    x: 500,
    duration: 1.3,
    delay: 3,

  });
  gsap.from(".index-hero-fouth-heading-third", {
    opacity: 1,
    x: 500,
    duration: 1.1,
    delay: 3,

  });
});
// JavaScript to toggle position of background-image on scroll
document.addEventListener('scroll', function() {
  const backgroundImage = document.querySelector('.background-image');
  const sectionEnd = backgroundImage.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= sectionEnd) {
      backgroundImage.style.position = 'fixed';
      backgroundImage.style.top = '0'; // Ensure it's fixed to the top
  } else {
      // Remove 'fixed' position when not at the end of the section
      backgroundImage.style.position = 'relative'; // or 'absolute', depending on your layout
  }
});

